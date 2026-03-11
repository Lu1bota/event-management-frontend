export interface GetUserInfoRes {
  id: string | null;
  name: string | null;
  email: string | null;
}

export interface UserState extends GetUserInfoRes {
  setUser: (user: GetUserInfoRes) => void;
  clearUser: () => void;
}
