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
import { memo, useCallback, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";

// Components
import { AttachmentIcon } from "../common/Icons";

// Services
import { uploadImage } from "@/services";

// Types
import { Student } from "@/types";

// Schema
import { StudentSchema } from "@/schema";

// Constants
import { DEFAULT_STUDENT_AVATAR_URL, DEFAULT_STUDENT_DATA } from "@/constants";

// Hooks
import { useStudent } from "@/hooks";

export type StudentFormModalProps = {
  isOpen: boolean;
  onClose: () => void;
  studentData?: Student;
};

const StudentFormModal = memo(
  ({ isOpen, onClose, studentData }: StudentFormModalProps) => {
    const [selectedImage, setSelectedImage] = useState<File>();

    const { mutateStudent, isMutatingStudent, isMutateStudentSuccess } =
      useStudent();

    // Close the modal when mutating successfully
    useEffect(() => {
      if (isMutateStudentSuccess) {
        onClose();
      }
    }, [isMutateStudentSuccess, onClose]);

    const {
      control,
      handleSubmit,
      setValue,
      formState: { errors },
    } = useForm<Student>({
      defaultValues: studentData ? studentData : DEFAULT_STUDENT_DATA,
      resolver: valibotResolver(StudentSchema),
      mode: "onBlur",
    });

    const handleImageUpload = useCallback(
      async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
          const imageFile = e.target.files[0];

          const imageFormData = new FormData();

          imageFormData.append("image", imageFile);

          const imageUrl = await uploadImage(imageFormData);

          if (imageUrl) {
            setSelectedImage(imageFile);

            setValue("avatarUrl", imageUrl.data.data.url);
          }
        }
      },
      [setValue],
    );

    const onMutationStudentSubmit = useCallback(
      (data: Student) => {
        mutateStudent(data);
      },
      [mutateStudent],
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
          >
            Modal Title
          </ModalHeader>
          <form
            id="#student-form"
            noValidate
            onSubmit={handleSubmit(onMutationStudentSubmit)}
          >
            <ModalBody py={9}>
              <FormControl
                isInvalid={!!errors}
                display="flex"
                flexDir="column"
                gap={5}
                opacity={isMutatingStudent ? 0.5 : 1}
              >
                <Center>
                  <Box bg="gray.400" borderRadius="50%" pos="relative">
                    {selectedImage ? (
                      <Image
                        boxSize={32}
                        objectFit="cover"
                        borderRadius="50%"
                        src={URL.createObjectURL(selectedImage)}
                      />
                    ) : (
                      <Image
                        boxSize={32}
                        objectFit="cover"
                        borderRadius="50%"
                        src={DEFAULT_STUDENT_AVATAR_URL}
                      />
                    )}
                    <FormLabel
                      htmlFor="#avatar"
                      pos="absolute"
                      right={0}
                      bottom={0}
                    >
                      <AttachmentIcon />
                    </FormLabel>
                    <Input
                      id="#avatar"
                      name="avatar"
                      type="file"
                      isDisabled={isMutatingStudent}
                      hidden
                      onChange={handleImageUpload}
                    />
                    <Controller
                      control={control}
                      name="avatarUrl"
                      render={({ field }) => (
                        <Input id="#avatar-url" {...field} hidden />
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
                        isDisabled={isMutatingStudent}
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
                        isDisabled={isMutatingStudent}
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
                  render={({ field, formState: { errors } }) => (
                    <Box>
                      <FormLabel htmlFor="#phone">Phone</FormLabel>
                      <Input
                        {...field}
                        id="#phone"
                        type="text"
                        variant="filled"
                        isInvalid={!!errors.phone}
                        isDisabled={isMutatingStudent}
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
                    <Input
                      {...field}
                      id="#id"
                      type="text"
                      hidden
                      variant="filled"
                    />
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
                      variant="filled"
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
                colorScheme="gray"
                onClick={onClose}
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
                isDisabled={isMutatingStudent}
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
