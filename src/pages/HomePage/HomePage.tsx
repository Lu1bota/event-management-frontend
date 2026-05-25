import { Box, Container, Flex, Spinner, Text } from "@chakra-ui/react";
import { EventItem, Header } from "../../components";
import { useEvents } from "../../queries";
import { styles } from "./styles";

const HomePage = () => {
  const { data, isPending } = useEvents();

  if (isPending) {
    return (
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Spinner size="xl" />
      </Flex>
    );
  }

  return (
    <>
      <Header />

      <Container>
        <Box as={"h1"} {...styles.title}>
          Discover Events
        </Box>

        <Text {...styles.subTitle}>
          Find and join exciting events happening around you
        </Text>

        <Box as={"ul"} {...styles.eventsList}>
          {data &&
            data.map((event) => <EventItem key={event.id} event={event} />)}
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
