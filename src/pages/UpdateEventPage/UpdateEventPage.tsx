import { Container, Flex, Spinner } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { format } from "date-fns/format";
import { BackLink, EventForm, Header } from "../../components";
import type { EventRequest } from "../../types";
import { useEventById, useUpdateEvent } from "../../queries";

const UpdateEventPage = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const navigate = useNavigate();

  const { data, isLoading } = useEventById(eventId ?? "");
  const { mutate: updateEvent, isPending } = useUpdateEvent(eventId ?? "");

  if (isLoading || !data) {
    return (
      <Flex
        height="100vh"
        alignItems="center"
        justifyContent="center"
        bg="#F9FAFB"
      >
        <Spinner size="xl" />
      </Flex>
    );
  }

  const initialData = {
    title: data.title,
    description: data.description,
    date: format(new Date(data.dateTime), "yyyy-MM-dd"),
    time: format(new Date(data.dateTime), "HH:mm"),
    location: data.location,
    capacity: data.capacity ? String(data.capacity) : "",
  };

  const handleSubmit = (formData: EventRequest) => {
    updateEvent(formData, {
      onSuccess: () => {
        navigate(`/events/${eventId}`);
      },
    });
  };

  const handleCancel = () => {
    navigate(`/events/${eventId}`);
  };

  return (
    <Flex direction="column" minH="100vh" bg="#F9FAFB">
      <Header />

      <Container>
        <BackLink />

        <EventForm
          mode="update"
          initialData={initialData}
          onSubmit={handleSubmit}
          isLoading={isPending}
          onCancel={handleCancel}
        />
      </Container>
    </Flex>
  );
};

export default UpdateEventPage;
