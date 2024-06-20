import {
  Box,
  Button,
  Center,
  HStack,
  Heading,
  Image,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";

// Components
import { CustomTable, SortSelect, StudentFormModal } from "@/components";

// Constants
import { SORT_BY_OPTION_LIST } from "@/constants";

// Types
import { Student } from "@/types";
import { ColumnProps } from "@/components/common/CustomTable";

// Hooks
import { useStudent } from "@/hooks/useStudent";

const studentColumns: Array<ColumnProps<Student>> = [
  {
    title: "",
    key: "image",
    render: (item: Student) => (
      <Image
        display="block"
        borderRadius="lg"
        w={16.25}
        h={13.75}
        src={item.avatarUrl}
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
    key: "enrollNumber",
  },
  {
    title: "Admission Date",
    key: "dateOfAdmission",
  },
];

const StudentPage = () => {
  const {
    isOpen: isStudentFormModalOpen,
    onOpen: onOpenStudentFormModal,
    onClose: onCloseStudentFormModal,
  } = useDisclosure();

  const { studentData } = useStudent();

  return (
    <Box w="full" minH="100vh" h="full" px={7.5} py={3} bg="white.100">
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
            onClick={onOpenStudentFormModal}
          >
            ADD NEW STUDENT
          </Button>
        </Stack>
      </Center>
      <CustomTable columns={studentColumns} data={studentData} />
      {isStudentFormModalOpen && (
        <StudentFormModal
          isOpen={isStudentFormModalOpen}
          onClose={onCloseStudentFormModal}
        />
      )}
    </Box>
  );
};

export default StudentPage;
