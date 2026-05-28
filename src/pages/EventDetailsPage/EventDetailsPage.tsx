import { Box, Container, Flex, Spinner } from "@chakra-ui/react";
import { Navigate, useParams } from "react-router-dom";
import { useEventById } from "../../queries";
import { styles } from "./styles";
import {
  BackLink,
  EventDetails,
  Header,
  RegistrationCard,
} from "../../components";
import { useUserStore } from "../../store/users";

const EventDetailsPage = () => {
  const userId = useUserStore((state) => state.id);

  const { eventId } = useParams<{ eventId: string }>();
  const { data, isLoading, isError } = useEventById(eventId ?? "");

  if (isLoading) {
    return (
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Spinner size="xl" />
      </Flex>
    );
  }

  if (isError || !data) return <Navigate to="/" replace />;

  return (
    <Flex direction="column" minH="100vh">
      <Header />

      <Container {...styles.container}>
        <Box {...styles.box}>
          <BackLink />

          <Flex gap={"20px"}>
            <EventDetails event={data} />

            <RegistrationCard
              participantCount={data.participantCount}
              capacity={data.capacity ?? 0}
              isCreator={userId === data.organizerId}
              eventId={data.id}
            />
          </Flex>
        </Box>
      </Container>
    </Flex>
  );
};

export default EventDetailsPage;
