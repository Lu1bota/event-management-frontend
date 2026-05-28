import type { IEvent } from "./events";

export interface Participation {
  userId: string;
  eventId: string;
  joinedAt: Date;
  event: IEvent;
}
