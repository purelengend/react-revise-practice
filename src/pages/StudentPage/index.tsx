import {
  Box,
  Button,
  Center,
  HStack,
  Heading,
  IconButton,
  Image,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { useCallback, useEffect, useMemo, useState } from "react";

// Components
import {
  CustomTable,
  Pagination,
  SortSelect,
  StudentConfirmModal,
  StudentFormModal,
} from "@/components";
import { DeleteIcon, EditIcon } from "@/components/common/Icons";

// Constants
import {
  DEFAULT_STUDENT_AVATAR_URL,
  DEFAULT_STUDENT_DATA,
  SORT_BY_OPTION_LIST,
} from "@/constants";

// Types
import { Student } from "@/types";
import { ColumnProps } from "@/components/common/CustomTable";

// Hooks
import { useStudent, useStudentPagination } from "@/hooks";

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

  const [updateStudent, setUpdateStudent] =
    useState<Student>(DEFAULT_STUDENT_DATA);

  const [studentId, setStudentId] = useState<string>("");

  const {
    students,
    mutateStudent,
    isMutatingStudent,
    isMutateStudentSuccess,
    isDeletingStudent,
    isDeleteStudentSuccess,
    deleteStudent,
  } = useStudent();

  const { allStudents, refetchAllStudents } = useStudentPagination();

  const handleOpenAddModal = useCallback(() => {
    setUpdateStudent(DEFAULT_STUDENT_DATA);
    onOpenStudentFormModal();
  }, [onOpenStudentFormModal]);

  const onMutationStudentSubmit = useCallback(
    (data: Student) => {
      mutateStudent(data);
    },
    [mutateStudent],
  );

  // Close mutation modal when mutating successfully
  useEffect(() => {
    if (isMutateStudentSuccess) {
      onCloseStudentFormModal();
      refetchAllStudents();
    }
  }, [isMutateStudentSuccess, onCloseStudentFormModal, refetchAllStudents]);

  // Close confirm modal when deleting successfully
  useEffect(() => {
    if (isDeleteStudentSuccess) {
      onCloseStudentConfirmModal();
      refetchAllStudents();
    }
  }, [isDeleteStudentSuccess, onCloseStudentConfirmModal, refetchAllStudents]);

  const onDeleteStudentSubmit = useCallback(
    (data: Pick<Student, "id">) => {
      deleteStudent(data.id);
    },
    [deleteStudent],
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
      },
      {
        title: "Email",
        key: "email",
      },
      {
        title: "Phone",
        key: "phone",
      },
      {
        title: "Enroll Number",
        key: "id",
      },
      {
        title: "Admission Date",
        key: "dateOfAdmission",
        render: (item: Student) => (
          <>{new Date(item.dateOfAdmission).toLocaleString()}</>
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

        <CustomTable columns={studentColumns} data={students} />
      </Box>

      <Pagination totalRecords={allStudents?.length ?? 0} pageLimit={6} />

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
        <StudentConfirmModal
          id={studentId}
          isOpen={isStudentConfirmModalOpen}
          isMutating={isDeletingStudent}
          onClose={onCloseStudentConfirmModal}
          onSubmit={onDeleteStudentSubmit}
        />
      )}
    </Box>
  );
};

export default StudentPage;
