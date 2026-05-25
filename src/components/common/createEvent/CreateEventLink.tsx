import { Flex, Link as ChakraLink, Text } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import { styles } from "./styles";

const CreateEventLink = () => {
  return (
    <ChakraLink asChild {...styles}>
      <RouterLink to="/create">
        <Flex align="center" gap="6px">
          <FaPlus size="12px" color="#FFFFFF" />
          <Text>Create Event</Text>
        </Flex>
      </RouterLink>
    </ChakraLink>
  );
};

export default CreateEventLink;
