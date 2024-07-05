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
} from "@chakra-ui/react";
import { memo, useCallback, useState } from "react";
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
import { DEFAULT_STUDENT_AVATAR_URL } from "@/constants";
import { formatPhoneNumber, onlyNumberKeyDown } from "@/utils";

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
      formState: { errors, isDirty },
    } = useForm<Student>({
      defaultValues: student,
      resolver: valibotResolver(StudentSchema),
      mode: "onBlur",
    });

    const handleImageUpload = useCallback(
      async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
          const imageFile = e.target.files[0];

          const imageFormData = new FormData();

          imageFormData.append("image", imageFile);

          uploadImage(imageFormData, {
            onSuccess: (response) => {
              const imageUrl = response.data.data.url;

              setValue("avatarUrl", imageUrl, { shouldDirty: true });
            },
            onError: () => {
              setSelectedImage(undefined);
            },
          });

          setSelectedImage(imageFile);
        }
      },
      [setValue, uploadImage],
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
          <form id="#student-form" noValidate onSubmit={handleSubmit(onSubmit)}>
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
                    {selectedImage ? (
                      <Image
                        boxSize={32}
                        objectFit="cover"
                        borderRadius="50%"
                        opacity={isUploadingImage ? 0.5 : 1}
                        src={URL.createObjectURL(selectedImage)}
                        fallbackSrc={DEFAULT_STUDENT_AVATAR_URL}
                      />
                    ) : (
                      <Image
                        boxSize={32}
                        objectFit="cover"
                        borderRadius="50%"
                        src={student.avatarUrl}
                        fallbackSrc={DEFAULT_STUDENT_AVATAR_URL}
                      />
                    )}
                    <FormLabel
                      htmlFor="#avatar"
                      pos="absolute"
                      right={0}
                      bottom={0}
                      aria-label="upload-image"
                    >
                      <AttachmentIcon />
                    </FormLabel>
                    <Input
                      id="#avatar"
                      name="avatar"
                      type="file"
                      aria-label="avatar"
                      isDisabled={isMutating || isUploadingImage}
                      hidden
                      onChange={handleImageUpload}
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
                isDisabled={isMutating || isUploadingImage}
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
                isDisabled={isMutating || isUploadingImage || !isDirty}
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
