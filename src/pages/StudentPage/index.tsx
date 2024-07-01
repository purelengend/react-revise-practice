import {
  Box,
  Button,
  Center,
  HStack,
  Heading,
  IconButton,
  Image,
  Link,
  Stack,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import { useCallback, useMemo, useState } from "react";

// Components
import {
  CustomTable,
  SortSelect,
  ConfirmModal,
  StudentFormModal,
  Pagination,
} from "@/components";
import { DeleteIcon, EditIcon } from "@/components/common/Icons";

// Constants
import {
  DEFAULT_STUDENT_AVATAR_URL,
  DEFAULT_STUDENT_DATA,
  FORM_TITLE,
  PAGE_LIMIT,
  QUERY_PARAMS,
  // PAGE_LIMIT,
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
} from "@/hooks";

// Utils
import { customToast } from "@/utils";

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

  const [searchParams] = useSearchParams();

  const page = Number(searchParams.get(QUERY_PARAMS.PAGE)) || 1;
  const limit = Number(searchParams.get(QUERY_PARAMS.LIMIT)) || PAGE_LIMIT;
  const sortBy = searchParams.get(QUERY_PARAMS.SORTBY) || "";
  const order = searchParams.get(QUERY_PARAMS.ORDER) || "";
  const name = searchParams.get(QUERY_PARAMS.NAME) || "";

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
            w={16.25}
            h={13.75}
            src={
              item.avatarUrl === ""
                ? DEFAULT_STUDENT_AVATAR_URL
                : item.avatarUrl
            }
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
          <Link href={`tel:+${item.phone}`}>{item.phone}</Link>
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
            <HStack gap={5} justify="space-between">
              <SortSelect sortList={SORT_BY_OPTION_LIST} />
            </HStack>

            <Button
              w={50}
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
        <Pagination totalRecords={totalStudents} pageLimit={PAGE_LIMIT} />
      )}

      {isStudentFormModalOpen && (
        <StudentFormModal
          isOpen={isStudentFormModalOpen}
          isMutating={isMutatingStudent}
          onClose={onCloseStudentFormModal}
          student={updateStudent}
          onSubmit={onMutationStudentSubmit}
        />
      )}

      {isStudentConfirmModalOpen && (
        <ConfirmModal
          id={studentId}
          title={FORM_TITLE.DELETE(studentId)}
          isOpen={isStudentConfirmModalOpen}
          isMutating={isDeleteStudent}
          onClose={onCloseStudentConfirmModal}
          onSubmit={onDeleteStudentSubmit}
        />
      )}
    </Box>
  );
};

export default StudentPage;
