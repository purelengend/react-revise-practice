import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
} from "@chakra-ui/react";
import {
  BaseSyntheticEvent,
  FormEvent,
  memo,
  useCallback,
  useState,
} from "react";
import { Controller, useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";

// Components
import { AttachmentIcon } from "../common/Icons";

// Types
import { Student } from "@/types";

// Schema
import { StudentSchema } from "@/schema";

// Hooks
import { useImage } from "@/hooks";

// Constants
import {
  DEFAULT_STUDENT_AVATAR_URL,
  TOAST_MSG,
  TOAST_STATUS,
} from "@/constants";

// Utils
import { customToast, formatPhoneNumber, onlyNumberKeyDown } from "@/utils";

export type StudentFormModalProps = {
  isOpen: boolean;
  isMutating: boolean;
  student: Student;
  onClose: () => void;
  onSubmit: (data: Student) => void;
};

const StudentFormModal = memo(
  ({
    isOpen,
    isMutating,
    onClose,
    student,
    onSubmit,
  }: StudentFormModalProps) => {
    const [selectedImage, setSelectedImage] = useState<File>();

    const { mutate: uploadImage, isPending: isUploadingImage } = useImage();

    const {
      control,
      handleSubmit,
      setValue,
      formState: { errors, isDirty, isValid },
    } = useForm<Student>({
      defaultValues: student,
      resolver: valibotResolver(StudentSchema),
      mode: "onBlur",
    });

    const toast = useToast();

    const handleImageUploadAndSubmit = useCallback(
      async (
        image: File,
        callbackSubmit: (e?: BaseSyntheticEvent) => Promise<void>,
      ) => {
        const imageFormData = new FormData();

        imageFormData.append("image", image);

        uploadImage(imageFormData, {
          onSuccess: (response) => {
            const imageUrl = response.data.data.url;

            setValue("avatarUrl", imageUrl);

            callbackSubmit();
          },
          onError: () => {
            toast(
              customToast(
                TOAST_MSG.UPLOAD_IMG.ERROR.title,
                TOAST_MSG.UPLOAD_IMG.ERROR.description,
                TOAST_STATUS.ERROR,
              ),
            );
          },
        });
      },
      [setValue, toast, uploadImage],
    );

    const handleSelectImage = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
          setSelectedImage(e.target.files[0]);

          setValue("avatarUrl", e.target.files[0].name, {
            shouldDirty: true,
          });
        }
      },
      [setValue],
    );

    const handleSubmitForm = useCallback(
      async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Submit when there is an image
        if (selectedImage)
          await handleImageUploadAndSubmit(
            selectedImage,
            handleSubmit(onSubmit),
          );
        // Submit when no image
        else handleSubmit(onSubmit)();
      },
      [handleImageUploadAndSubmit, handleSubmit, onSubmit, selectedImage],
    );

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
            md: 169,
          }}
        >
          <ModalHeader
            textAlign="center"
            py={9}
            borderBottom="1px solid"
            borderBottomColor="white.300"
            fontSize="2xl"
          >
            {student.id ? "Edit student" : "Add student"}
          </ModalHeader>
          <form id="#student-form" noValidate onSubmit={handleSubmitForm}>
            <ModalBody py={9}>
              <FormControl
                isInvalid={!!errors}
                display="flex"
                flexDir="column"
                gap={5}
                opacity={isMutating ? 0.5 : 1}
              >
                <Center>
                  <Box bg="gray.400" borderRadius="50%" pos="relative">
                    <FormLabel
                      m={0}
                      htmlFor="#avatar"
                      aria-label="upload-image"
                    >
                      <Image
                        boxSize={32}
                        objectFit="cover"
                        borderRadius="50%"
                        opacity={isUploadingImage ? 0.5 : 1}
                        src={
                          selectedImage
                            ? URL.createObjectURL(selectedImage)
                            : student.avatarUrl
                              ? student.avatarUrl
                              : DEFAULT_STUDENT_AVATAR_URL
                        }
                        fallbackSrc={DEFAULT_STUDENT_AVATAR_URL}
                      />
                      <AttachmentIcon pos="absolute" right={3} bottom={3} />
                    </FormLabel>
                    <Input
                      id="#avatar"
                      name="avatar"
                      type="file"
                      aria-label="avatar"
                      hidden
                      onChange={handleSelectImage}
                    />
                    <Controller
                      control={control}
                      name="avatarUrl"
                      render={({ field }) => (
                        <Input id="#avatarUrl" {...field} hidden />
                      )}
                    />
                  </Box>
                </Center>

                <Controller
                  control={control}
                  name="name"
                  render={({ field, formState: { errors } }) => (
                    <Box>
                      <FormLabel htmlFor="#name">Name</FormLabel>
                      <Input
                        {...field}
                        id="#name"
                        variant="filled"
                        isInvalid={!!errors.name}
                        isDisabled={isMutating}
                      />
                      {errors.name && (
                        <FormErrorMessage>
                          {errors.name.message}
                        </FormErrorMessage>
                      )}
                    </Box>
                  )}
                />

                <Controller
                  control={control}
                  name="email"
                  render={({ field, formState: { errors } }) => (
                    <Box>
                      <FormLabel htmlFor="#email">Email</FormLabel>
                      <Input
                        {...field}
                        id="#email"
                        type="email"
                        variant="filled"
                        isInvalid={!!errors.email}
                        isDisabled={isMutating}
                      />
                      {errors.email && (
                        <FormErrorMessage>
                          {errors.email.message}
                        </FormErrorMessage>
                      )}
                    </Box>
                  )}
                />

                <Controller
                  control={control}
                  name="phone"
                  render={({
                    field: { onChange, ...rest },
                    formState: { errors },
                  }) => (
                    <Box>
                      <FormLabel htmlFor="#phone">Phone</FormLabel>
                      <Input
                        {...rest}
                        id="#phone"
                        type="text"
                        variant="filled"
                        maxLength={12}
                        isInvalid={!!errors.phone}
                        isDisabled={isMutating}
                        onChange={formatPhoneNumber(onChange)}
                        onKeyDown={onlyNumberKeyDown}
                      />
                      {errors.phone && (
                        <FormErrorMessage>
                          {errors.phone.message}
                        </FormErrorMessage>
                      )}
                    </Box>
                  )}
                />

                <Controller
                  control={control}
                  name="id"
                  render={({ field }) => (
                    <Input {...field} id="#id" type="text" hidden />
                  )}
                />

                <Controller
                  control={control}
                  name="dateOfAdmission"
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="#admission-date"
                      type="number"
                      hidden
                    />
                  )}
                />
              </FormControl>
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
                isDisabled={isMutating || !isDirty || !isValid}
              >
                Submit
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    );
  },
);

export default StudentFormModal;
