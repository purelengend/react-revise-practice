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
import { useState } from "react";

// Components
import { AttachmentIcon, DefaultAvatarIcon } from "../common/Icons";
import { uploadImage } from "@/services/upload";

export type StudentFormModalProps = {
  isOpen: boolean;
  onClose: () => void;
};
const StudentFormModal = ({ isOpen, onClose }: StudentFormModalProps) => {
  const [selectedImage, setSelectedImage] = useState<File>();
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
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
        <ModalBody py={9}>
          <FormControl display="flex" flexDir="column" gap={5}>
            <Center>
              <Box bg="gray.400" borderRadius="50%" p={5} pos="relative">
                {selectedImage ? (
                  <Image
                    boxSize={32}
                    objectFit="cover"
                    borderRadius="50%"
                    src={URL.createObjectURL(selectedImage)}
                  />
                ) : (
                  <DefaultAvatarIcon boxSize={32} />
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
                  hidden
                  onChange={async (e) => {
                    if (e.target.files) {
                      const imageFile = e.target.files[0];

                      const imageFormData = new FormData();

                      imageFormData.append("image", imageFile);

                      const imageUrl = await uploadImage(imageFormData);

                      if (imageUrl) setSelectedImage(imageFile);
                    }
                  }}
                />
              </Box>
            </Center>
            <Box>
              <FormLabel htmlFor="#name">Name</FormLabel>
              <Input id="#name" name="name" type="text" variant="filled" />
              <FormErrorMessage>Email is required.</FormErrorMessage>
            </Box>
            <Box>
              <FormLabel htmlFor="#email">Email</FormLabel>
              <Input id="#email" name="email" type="email" variant="filled" />
            </Box>
            <Box>
              <FormLabel htmlFor="#phone">Phone</FormLabel>
              <Input id="#phone" name="phone" type="tel" variant="filled" />
            </Box>
          </FormControl>
        </ModalBody>

        <ModalFooter display="flex" gap={5}>
          <Button w={30} px={7.5} py={4} colorScheme="gray" onClick={onClose}>
            Cancel
          </Button>
          <Button
            w={30}
            px={7.5}
            py={4}
            bg="yellow.200"
            _hover={{
              bg: "orange.400",
            }}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default StudentFormModal;
