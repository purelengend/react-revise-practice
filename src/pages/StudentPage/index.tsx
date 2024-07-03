import {
  Box,
  Button,
  Center,
  HStack,
  Heading,
  IconButton,
  Image,
  Link,
  Spinner,
  Stack,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { Suspense, lazy, useCallback, useMemo, useState } from "react";

// Components
import { CustomTable, SortSelect } from "@/components";
import { DeleteIcon, EditIcon } from "@/components/common/Icons";

// Constants
import {
  DEFAULT_STUDENT_AVATAR_URL,
  DEFAULT_STUDENT_DATA,
  FORM_TITLE,
  PAGE_LIMIT,
  SORT_BY_OPTION_LIST,
  TOAST_MSG,
  TOAST_STATUS,
} from "@/constants";

// Types
import { Student } from "@/types";
import { ColumnProps } from "@/components/common/CustomTable";

// Hooks
import {
  useDeleteStudent,
  useGetStudentCount,
  useGetStudents,
  useMutateStudent,
  useQueryParams,
} from "@/hooks";

// Utils
import { customToast, formatPhoneNumber } from "@/utils";

const StudentFormModal = lazy(() => import("@/components/StudentFormModal"));

const ConfirmModal = lazy(() => import("@/components/ConfirmModal"));

const Pagination = lazy(() => import("@/components/common/Pagination"));

const StudentPage = () => {
  const {
    isOpen: isStudentFormModalOpen,
    onOpen: onOpenStudentFormModal,
    onClose: onCloseStudentFormModal,
  } = useDisclosure();

  const {
    isOpen: isStudentConfirmModalOpen,
    onOpen: onOpenStudentConfirmModal,
    onClose: onCloseStudentConfirmModal,
  } = useDisclosure();

  const toast = useToast();

  const [updateStudent, setUpdateStudent] =
    useState<Student>(DEFAULT_STUDENT_DATA);

  const [studentId, setStudentId] = useState<string>("");

  const { page, limit, sortBy, order, name } = useQueryParams();

  const { data: students = [], isFetching: isFetchingStudents } =
    useGetStudents({ page, limit, sortBy, order, name });

  const { data: totalStudents = 0 } = useGetStudentCount(name);

  const { mutate: mutateStudent, isPending: isMutatingStudent } =
    useMutateStudent();

  const { mutate: deleteStudent, isPending: isDeleteStudent } =
    useDeleteStudent();

  const handleOpenAddModal = useCallback(() => {
    setUpdateStudent(DEFAULT_STUDENT_DATA);
    onOpenStudentFormModal();
  }, [onOpenStudentFormModal]);

  const onMutationStudentSubmit = useCallback(
    async (data: Student) => {
      return mutateStudent(data, {
        onSuccess: (_, { id }) => {
          onCloseStudentFormModal();

          if (!id) {
            toast(
              customToast(
                TOAST_MSG.ADD.SUCCESS.title,
                TOAST_MSG.ADD.SUCCESS.description,
                TOAST_STATUS.SUCCESS,
              ),
            );
            return;
          }
          toast(
            customToast(
              TOAST_MSG.EDIT.SUCCESS.title,
              TOAST_MSG.EDIT.SUCCESS.description,
              TOAST_STATUS.SUCCESS,
            ),
          );
        },
        onError: (_, { id }) => {
          if (!id) {
            toast(
              customToast(
                TOAST_MSG.ADD.ERROR.title,
                TOAST_MSG.ADD.ERROR.description,
                TOAST_STATUS.ERROR,
              ),
            );
            return;
          }
          toast(
            customToast(
              TOAST_MSG.EDIT.ERROR.title,
              TOAST_MSG.EDIT.ERROR.description,
              TOAST_STATUS.ERROR,
            ),
          );
        },
      });
    },
    [mutateStudent, onCloseStudentFormModal, toast],
  );

  const onDeleteStudentSubmit = useCallback(
    (data: Pick<Student, "id">) => {
      deleteStudent(data.id, {
        onSuccess: () => {
          onCloseStudentConfirmModal();
          toast(
            customToast(
              TOAST_MSG.DELETE.SUCCESS.title,
              TOAST_MSG.DELETE.SUCCESS.description,
              TOAST_STATUS.SUCCESS,
            ),
          );
        },
        onError: () => {
          customToast(
            TOAST_MSG.DELETE.ERROR.title,
            TOAST_MSG.DELETE.ERROR.description,
            TOAST_STATUS.ERROR,
          );
        },
      });
    },
    [deleteStudent, onCloseStudentConfirmModal, toast],
  );

  const studentColumns: Array<ColumnProps<Student>> = useMemo(
    () => [
      {
        title: "",
        key: "image",
        render: (item: Student) => (
          <Image
            display="block"
            borderRadius="lg"
            objectFit="contain"
            w={16.25}
            h={13.75}
            src={
              item.avatarUrl === ""
                ? DEFAULT_STUDENT_AVATAR_URL
                : item.avatarUrl
            }
            alt={`avatar-of-${item.name}`}
          />
        ),
      },
      {
        title: "Name",
        key: "name",
        render: (item: Student) => <Text>{item.name}</Text>,
      },
      {
        title: "Email",
        key: "email",
        render: (item: Student) => (
          <Link href={`mailto:${item.email}`} maxW={30}>
            {item.email}
          </Link>
        ),
      },
      {
        title: "Phone",
        key: "phone",
        render: (item: Student) => (
          <Link href={`tel:+${item.phone}`}>
            {formatPhoneNumber(item.phone)}
          </Link>
        ),
      },
      {
        title: "Enroll Number",
        key: "id",
        render: (item: Student) => <Text>{item.id}</Text>,
      },
      {
        title: "Admission Date",
        key: "dateOfAdmission",
        render: (item: Student) => (
          <Text>{new Date(item.dateOfAdmission).toLocaleString()}</Text>
        ),
      },
      {
        title: "Action",
        key: "action",
        render: (item: Student) => {
          return (
            <HStack gap={8}>
              <IconButton
                aria-label="edit-student"
                value={item.id}
                onClick={() => {
                  setUpdateStudent(item);
                  onOpenStudentFormModal();
                }}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                aria-label="delete-student"
                value={item.id}
                onClick={() => {
                  setStudentId(item.id);
                  onOpenStudentConfirmModal();
                }}
              >
                <DeleteIcon />
              </IconButton>
            </HStack>
          );
        },
      },
    ],
    [onOpenStudentConfirmModal, onOpenStudentFormModal],
  );

  return (
    <Box
      w="full"
      minH="95.5vh"
      display="flex"
      flexDir="column"
      justifyContent="space-between"
      h="full"
      px={7.5}
      py={3}
      bg="white.100"
    >
      <Box>
        <Center
          justifyContent="space-between"
          flexDirection={{
            base: "column",
            md: "row",
          }}
        >
          <Heading fontSize="xl">Students List</Heading>

          <Stack
            gap={5}
            justify="space-between"
            direction={{
              base: "column",
              sm: "row",
            }}
            alignItems={{
              base: "end",
              sm: "initial",
            }}
          >
            <HStack
              w={{
                base: "90vw",
                sm: "auto",
              }}
              gap={5}
              justify="space-between"
            >
              <SortSelect sortList={SORT_BY_OPTION_LIST} />
            </HStack>

            <Button
              w={{
                base: "90vw",
                sm: 50,
              }}
              px={6}
              py={3}
              fontSize="sm"
              color="white"
              bg="yellow.200"
              _hover={{
                bg: "orange.400",
              }}
              onClick={handleOpenAddModal}
            >
              ADD NEW STUDENT
            </Button>
          </Stack>
        </Center>

        <CustomTable
          columns={studentColumns}
          data={students}
          isFetching={isFetchingStudents}
        />
      </Box>

      {!!students && totalStudents > PAGE_LIMIT && (
        <Suspense fallback={<Spinner />}>
          <Pagination totalRecords={totalStudents} pageLimit={PAGE_LIMIT} />
        </Suspense>
      )}

      {isStudentFormModalOpen && (
        <Suspense fallback={<Spinner />}>
          <StudentFormModal
            isOpen={isStudentFormModalOpen}
            isMutating={isMutatingStudent}
            onClose={onCloseStudentFormModal}
            student={updateStudent}
            onSubmit={onMutationStudentSubmit}
          />
        </Suspense>
      )}

      {isStudentConfirmModalOpen && (
        <Suspense fallback={<Spinner />}>
          <ConfirmModal
            id={studentId}
            title={FORM_TITLE.DELETE(studentId)}
            isOpen={isStudentConfirmModalOpen}
            isMutating={isDeleteStudent}
            onClose={onCloseStudentConfirmModal}
            onSubmit={onDeleteStudentSubmit}
          />
        </Suspense>
      )}
    </Box>
  );
};

export default StudentPage;
