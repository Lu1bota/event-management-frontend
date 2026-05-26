import type { FC } from "react";
import type { IEvent } from "../../types";
import { Box, Flex, List, Text } from "@chakra-ui/react";
import { styles } from "./styles";
import { CiCalendar, CiClock2 } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { RxPeople } from "react-icons/rx";
import { formatEventDate, formatEventTime } from "../../utils";

interface EventDetailsProps {
  event: IEvent;
}

interface eventDetailsTypes {
  id: string;
  name: string;
  icon: React.ReactNode;
  content: string;
}

const EventDetails: FC<EventDetailsProps> = (props) => {
  const {
    id,
    title,
    description,
    dateTime,
    location,
    capacity,
    participantCount,
  } = props.event;

  const eventDetails: eventDetailsTypes[] = [
    {
      id: `${id}-date`,
      name: "Date",
      icon: <CiCalendar size={"18px"} />,
      content: formatEventDate(dateTime),
    },
    {
      id: `${id}-time`,
      name: "Time",
      icon: <CiClock2 size={"18px"} />,
      content: formatEventTime(dateTime),
    },
    {
      id: `${id}-location`,
      name: "Location",
      icon: <IoLocationOutline size={"18px"} />,
      content: location,
    },
    {
      id: `${id}-participants`,
      name: "Participants",
      icon: <RxPeople size={"18px"} />,
      content: `${participantCount} / ${capacity || 0} participants`,
    },
  ];

  return (
    <Box {...styles.box}>
      <Box as={"h2"} {...styles.title}>
        {title}
      </Box>

      <Text {...styles.description}>{description}</Text>

      <Box {...styles.line} />

      <List.Root {...styles.list}>
        {eventDetails.map((event) => (
          <List.Item key={event.id} {...styles.listItem}>
            <Box {...styles.iconBox}>{event.icon}</Box>
            <Flex direction={"column"}>
              <Text {...styles.itemName}>{event.name}</Text>
              <Text {...styles.itemContent}>{event.content}</Text>
            </Flex>
          </List.Item>
        ))}
      </List.Root>
    </Box>
  );
};

export default EventDetails;
