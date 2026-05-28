import { Container, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { BackLink, EventForm, Header } from "../../components";
import { useCreateEvent } from "../../queries";
import type { EventRequest } from "../../types";
import { useEventDraftStore } from "../../store";

const CreateEventPage = () => {
  const navigate = useNavigate();
  const { mutate: createEvent, isPending } = useCreateEvent();

  const { draft, setField, clearDraft } = useEventDraftStore();

  const handleSubmit = (data: EventRequest) => {
    createEvent(data, {
      onSuccess: () => {
        clearDraft();
        navigate("/");
      },
    });
  };

  const handleCancel = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <Flex direction="column" minH="100vh" bg="#F9FAFB">
      <Header />

      <Container>
        <BackLink />

        <EventForm
          mode="create"
          initialData={draft}
          onChange={setField}
          onSubmit={handleSubmit}
          isLoading={isPending}
          onCancel={handleCancel}
        />
      </Container>
    </Flex>
  );
};

export default CreateEventPage;
