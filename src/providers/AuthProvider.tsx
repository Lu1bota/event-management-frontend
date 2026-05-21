import { useEffect, type FC } from "react";
import type React from "react";
import { useUserStore } from "../store/users";
import { useFetchUserInfo } from "../queries";
import { Flex, Spinner } from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const { setUser, clearUser } = useUserStore();
  const { data, isSuccess, isPending, isError } = useFetchUserInfo();
  const queryClient = useQueryClient();

  useEffect(() => {
    const handleForceLogout = () => {
      clearUser();
      queryClient.removeQueries({ queryKey: ["userInfo"] });
    };

    window.addEventListener("auth:logout", handleForceLogout);

    return () => window.removeEventListener("auth:logout", handleForceLogout);
  }, [clearUser, queryClient]);

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
