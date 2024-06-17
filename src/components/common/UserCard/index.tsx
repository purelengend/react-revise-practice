import {
  Card,
  CardBody,
  CardProps,
  Center,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { memo } from "react";

// Types
import { Role } from "@/types";

// Constants
import { DEFAULT_AVATAR_URL } from "@/constants";

export type UserCardProps = CardProps & {
  name: string;
  role: Role;
  avatarUrl?: string;
};
const UserCard = memo(
  ({ name, role, avatarUrl = DEFAULT_AVATAR_URL, ...rest }: UserCardProps) => {
    return (
      <Card {...rest} bg="transparent" variant="unstyled">
        <CardBody as={Center} flexDirection="column">
          <Image
            boxSize={32}
            src={avatarUrl}
            borderRadius="50%"
            objectFit="contain"
          />
          <Heading fontWeight="bold" textAlign="center" mt={5} fontSize="md">
            {name}
          </Heading>

          <Text
            mt={2.5}
            textAlign="center"
            fontWeight="500"
            fontSize="sm"
            color="yellow.200"
          >
            {role}
          </Text>
        </CardBody>
      </Card>
    );
  },
);

export default UserCard;
