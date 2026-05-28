import { Box, Container, Text } from "@chakra-ui/react";
import { EventsCalendar, Header } from "../../components";
import { useUserStore } from "../../store/users";
import { styles } from "./styles";

const CalendarPage = () => {
  const participations = useUserStore((state) => state.participations) ?? [];

  return (
    <>
      <Header />

      <Container {...styles.contentContainer}>
        <Box as={"h1"} {...styles.title}>
          My Events
        </Box>
        <Text {...styles.subtitle}>View and manage your event calendar</Text>

        <EventsCalendar participations={participations} />
      </Container>
    </>
  );
};

export default CalendarPage;
