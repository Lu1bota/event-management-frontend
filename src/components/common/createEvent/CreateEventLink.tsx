import { Flex, Link as ChakraLink, Text } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { Link as RouterLink, type LinkProps } from "react-router-dom";
import { styles } from "./styles";

const CreateEventLink = () => {
  return (
    <ChakraLink
      as={RouterLink}
      {...({ to: "/create" } as unknown as LinkProps)}
      _hover={styles._hover}
      {...styles}
    >
      <Flex align="center" gap={"6px"}>
        <FaPlus color="#FFFFFF" />
        <Text>Create Event</Text>
      </Flex>
    </ChakraLink>
  );
};

export default CreateEventLink;
