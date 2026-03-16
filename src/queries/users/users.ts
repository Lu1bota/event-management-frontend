import { useQuery } from "@tanstack/react-query";
import { getMe } from "../../api";
import type { AxiosErrorRes, User } from "../../types";
import { useEffect } from "react";
import toast from "react-hot-toast";

export const useFetchUserInfo = () =>
  useQuery<User, AxiosErrorRes>({
    queryFn: getMe,
    queryKey: ["userInfo"],
  });

export const useGetMe = () => {
  const { data, isError, isSuccess, error, isPending, refetch } =
    useFetchUserInfo();

  useEffect(() => {
    if (isError) {
      toast.error(error.response?.data.message || error.message);
    }
  }, [isError, error]);

  return { data, isError, error, isSuccess, isPending, refetch };
};
