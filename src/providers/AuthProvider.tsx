import { useEffect, type FC } from "react";
import type React from "react";
import { useUserStore } from "../store/users";
import { useFetchUserInfo } from "../queries";
import { Flex, Spinner } from "@chakra-ui/react";

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const { setUser, clearUser } = useUserStore();
  const { data, isError, isSuccess, isPending } = useFetchUserInfo();

  useEffect(() => {
    if (isSuccess && data) setUser(data);
  }, [isSuccess, data]);

  useEffect(() => {
    if (isError) clearUser();
  }, [isError]);

  if (isPending)
    return (
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Spinner size="xl" />
      </Flex>
    );

  return <>{children}</>;
};

export default AuthProvider;
