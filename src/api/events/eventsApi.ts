import type { EventRequest, Participation } from "../../types";
import API from "../api";
import { API_ROUTES } from "../apiRoutes";

export const getEvents = async (): Promise<Event[]> =>
  (await API(API_ROUTES.EVENTS.ALL_EVENTS)).data;

export const getEventById = async (eventId: string): Promise<Event> =>
  (await API(API_ROUTES.EVENTS.EVENT_BY_ID(eventId))).data;

export const createEvent = async (eventData: EventRequest): Promise<Event> =>
  (await API.post(API_ROUTES.EVENTS.CREATE_EVENT, eventData)).data;

export const updateEvent = async (
  eventId: string,
  eventData: EventRequest,
): Promise<Event> =>
  (await API.patch(API_ROUTES.EVENTS.UPDATE_EVENT(eventId), eventData)).data;

export const deleteEvent = async (eventId: string): Promise<void> =>
  (await API.delete(API_ROUTES.EVENTS.DELETE_EVENT(eventId))).data;

export const joinEvent = async (eventId: string): Promise<Participation> =>
  (await API.post(API_ROUTES.EVENTS.JOIN_EVENT(eventId))).data;

export const leaveEvent = async (
  eventId: string,
): Promise<{ message: string }> =>
  (await API.post(API_ROUTES.EVENTS.LEAVE_EVENT(eventId))).data;
