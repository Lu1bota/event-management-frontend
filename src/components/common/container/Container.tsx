import { Box } from "@chakra-ui/react";
import type { FC } from "react";
import type React from "react";

interface ContainerProps {
  children: React.ReactNode;
  css?: string;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <Box maxW="1440px" mx="auto" px={4}>
      {children}
    </Box>
  );
};

export default Container;
