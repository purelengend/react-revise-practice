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

export type ConfirmFormProps = {
  id: string;
};
export type ConfirmModalProps = {
  id: string;
  title: string;
  isOpen: boolean;
  isMutating: boolean;
  onClose: () => void;
  onSubmit: (data: ConfirmFormProps) => void;
};

const ConfirmModal = ({
  id,
  title,
  isOpen,
  isMutating,
  onClose,
  onSubmit,
}: ConfirmModalProps) => {
  const { control, handleSubmit } = useForm<ConfirmFormProps>({
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
        px={0}
        minW={{
          base: "auto",
          md: 169,
        }}
      >
        <ModalHeader
          textAlign="center"
          py={4}
          borderBottom="1px solid"
          borderBottomColor="white.300"
          fontSize="lg"
        >
          {title}
        </ModalHeader>
        <form id="#confirm-form" noValidate onSubmit={handleSubmit(onSubmit)}>
          <ModalBody py={4}>
            <Text color="gray.200" fontSize="md" textAlign="center">
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

export default ConfirmModal;
