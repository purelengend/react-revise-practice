import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";

// Types
import { Student } from "@/types";

export type StudentConFirmModalProps = {
  id: string;
  isOpen: boolean;
  isMutating: boolean;
  onClose: () => void;
  onSubmit: (data: Pick<Student, "id">) => void;
};

export type StudentConfirmFormProps = {
  id: string;
};

const StudentConfirmModal = ({
  id,
  isOpen,
  isMutating,
  onClose,
  onSubmit,
}: StudentConFirmModalProps) => {
  const { control, handleSubmit } = useForm<Pick<Student, "id">>({
    defaultValues: {
      id,
    },
  });

  return (
    <Modal
      autoFocus={false}
      returnFocusOnClose={false}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent
        bg="white"
        px={{
          base: 0,
          md: 15.75,
        }}
        minW={{
          base: "auto",
          md: 190,
        }}
      >
        <ModalHeader
          textAlign="center"
          py={9}
          borderBottom="1px solid"
          borderBottomColor="white.300"
          fontSize="2xl"
        >
          Are you sure to delete student with enroll number: {id}?
        </ModalHeader>
        <form id="#confirm-form" noValidate onSubmit={handleSubmit(onSubmit)}>
          <ModalBody py={9}>
            <Text color="gray.200" fontSize="lg" textAlign="center">
              This action cannot be undone, so please be careful with this
              action.
            </Text>
            <Controller
              name="id"
              control={control}
              render={({ field }) => <Input {...field} hidden isDisabled />}
            />
          </ModalBody>

          <ModalFooter display="flex" gap={5}>
            <Button
              type="button"
              w={30}
              px={7.5}
              py={4}
              onClick={onClose}
              bg="blackAlpha.100"
              _hover={{
                bg: "blackAlpha.300",
              }}
              isDisabled={isMutating}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              w={30}
              px={7.5}
              py={4}
              bg="yellow.200"
              _hover={{
                bg: "orange.400",
              }}
              isDisabled={isMutating}
            >
              Yes
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default StudentConfirmModal;
