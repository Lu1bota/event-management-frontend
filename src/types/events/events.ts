export type Visibility = "Public" | "Private";

export interface Event {
  id: string;
  title: string;
  description: string;
  dateTime: Date;
  location: string;
  capacity?: number | null;
  visibility?: Visibility;
  organizerId: string;
  participantCount: number;
}

export interface EventRequest {
  title: string;
  description: string;
  dateTime: Date;
  location: string;
  capacity?: number;
  visibility?: Visibility;
}
