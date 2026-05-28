import type { AxiosError } from "axios";

interface ServerMessage {
  message?: string;
}

export type AxiosErrorRes = AxiosError<ServerMessage>;
