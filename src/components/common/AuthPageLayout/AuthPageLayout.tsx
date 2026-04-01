import { Box, Center } from "@chakra-ui/react";
import type { FC, ReactNode } from "react";

interface AuthPageLayoutProps {
  children: ReactNode;
}

const AuthPageLayout: FC<AuthPageLayoutProps> = ({ children }) => {
  return (
    <Center minH="100vh" w="full" bg="white" px={4} py={10}>
      <Box
        w="full"
        maxW="md"
        rounded="xl"
        borderWidth="1px"
        borderColor="gray.200"
        bg="white"
        px={{ base: 6, md: 10 }}
        py={{ base: 8, md: 10 }}
        shadow="md"
      >
        {children}
      </Box>
    </Center>
  );
};

export default AuthPageLayout;
