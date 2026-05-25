import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type {
  AxiosErrorRes,
  EventRequest,
  IEvent,
  Participation,
} from "../../types";
import {
  createEvent,
  deleteEvent,
  getEventById,
  getEvents,
  joinEvent,
  leaveEvent,
  updateEvent,
} from "../../api";
import { toast } from "react-hot-toast/headless";
import { useEffect } from "react";

export const useFetchEvents = () =>
  useQuery<IEvent[], AxiosErrorRes>({
    queryFn: getEvents,
    queryKey: ["events"],
  });

export const useEvents = () => {
  const { data, isError, error, isPending, isSuccess, refetch } =
    useFetchEvents();

  useEffect(() => {
    if (isError) {
      toast.error(error.response?.data.message || error.message);
    }
  }, [isError, error]);

  return { data, isError, error, isPending, isSuccess, refetch };
};

export const useFetchEventById = (eventId: string) =>
  useQuery<IEvent, AxiosErrorRes>({
    queryFn: () => getEventById(eventId),
    queryKey: ["event", eventId],
  });

export const useEventById = (eventId: string) => {
  const { data, isError, error, isPending, isSuccess, refetch } =
    useFetchEventById(eventId);

  useEffect(() => {
    if (isError) toast.error(error.response?.data.message || error.message);
  }, [isError, error]);

  return { data, isError, error, isPending, isSuccess, refetch };
};

export const useCreateEvent = () => {
  const queryClient = useQueryClient();

  return useMutation<IEvent, AxiosErrorRes, EventRequest>({
    mutationFn: (data: EventRequest) => createEvent(data),
    mutationKey: ["createEvent"],
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["events"] }),
    onError: (error) =>
      toast.error(error.response?.data.message || error.message),
  });
};

export const useUpdateEvent = (eventId: string) => {
  const queryClient = useQueryClient();

  return useMutation<IEvent, AxiosErrorRes, EventRequest>({
    mutationFn: (data: EventRequest) => updateEvent(eventId, data),
    mutationKey: ["updateEvent", eventId],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
      queryClient.invalidateQueries({ queryKey: ["event", eventId] });
    },
    onError: (error) =>
      toast.error(error.response?.data.message || error.message),
  });
};

export const useDeleteEvent = () => {
  const queryClient = useQueryClient();

  return useMutation<void, AxiosErrorRes, string>({
    mutationFn: (eventId: string) => deleteEvent(eventId),
    mutationKey: ["deleteEvent"],
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["events"] }),

    onError: (error) =>
      toast.error(error.response?.data.message || error.message),
  });
};

export const useJoinEvent = () => {
  const queryClient = useQueryClient();

  return useMutation<Participation, AxiosErrorRes, string>({
    mutationFn: (eventId: string) => joinEvent(eventId),
    mutationKey: ["joinEvent"],
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["events"] }),
    onError: (error) =>
      toast.error(error.response?.data.message || error.message),
  });
};

export const useLeaveEvent = () => {
  const queryClinet = useQueryClient();

  return useMutation<{ message: string }, AxiosErrorRes, string>({
    mutationFn: (eventId: string) => leaveEvent(eventId),
    mutationKey: ["leaveEvent"],
    onSuccess: () => queryClinet.invalidateQueries({ queryKey: ["events"] }),
    onError: (error) =>
      toast.error(error.response?.data.message || error.message),
  });
};
