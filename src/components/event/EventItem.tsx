import { Box, Button, List, Text } from "@chakra-ui/react";
import type { IEvent } from "../../types";
import { useMemo, type FC } from "react";
import { CiCalendar, CiClock2 } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { RxPeople } from "react-icons/rx";
import { styles } from "./styles";
import { useJoinEvent, useLeaveEvent } from "../../queries";
import { useUserStore } from "../../store/users";
import { useQueryClient } from "@tanstack/react-query";

interface EventItemProps {
  event: IEvent;
}

interface eventDetailsTypes {
  id: string;
  icon: React.ReactNode;
  content: string;
}

const formatEventDate = (dateTime: Date | string): string => {
  return new Date(dateTime).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const formatEventTime = (dateTime: Date | string): string => {
  return new Date(dateTime).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
};

const EventItem: FC<EventItemProps> = (props) => {
  const {
    id,
    title,
    description,
    dateTime,
    location,
    capacity,
    participantCount,
  } = props.event;
  const queryClient = useQueryClient();

  const participations = useUserStore((state) => state.participations);

  const { mutateAsync: mutateJoin, isPending: isPendingJoin } = useJoinEvent();
  const { mutateAsync: mutateLeave, isPending: isPendingLeave } =
    useLeaveEvent();

  const isJoined = useMemo(() => {
    return participations?.some((p) => p.eventId === id) ?? false;
  }, [id, participations]);

  const handleJoin = async () => {
    await mutateJoin(id);
    queryClient.invalidateQueries({ queryKey: ["userInfo"] });
  };

  const handleLeave = async () => {
    await mutateLeave(id);
    queryClient.invalidateQueries({ queryKey: ["userInfo"] });
  };

  const eventDetails: eventDetailsTypes[] = [
    {
      id: `${id}-date`,
      icon: <CiCalendar color="#6B7280" size={"16px"} />,
      content: formatEventDate(dateTime),
    },
    {
      id: `${id}-time`,
      icon: <CiClock2 color="#6B7280" size={"16px"} />,
      content: formatEventTime(dateTime),
    },
    {
      id: `${id}-location`,
      icon: <IoLocationOutline color="#6B7280" size={"16px"} />,
      content: location,
    },
    {
      id: `${id}-participants`,
      icon: <RxPeople color="#6B7280" size={"16px"} />,
      content: `${participantCount} / ${capacity || 0} participants`,
    },
  ];

  return (
    <Box as={"ul"} {...styles.event}>
      <Box as={"h2"} {...styles.eventTitle}>
        {title}
      </Box>

      <Text {...styles.eventDescription}>{description}</Text>

      <List.Root {...styles.eventListDetails}>
        {eventDetails.map((detail) => (
          <List.Item key={detail.id} {...styles.listItemDetails}>
            {detail.icon}

            <Text>{detail.content}</Text>
          </List.Item>
        ))}
      </List.Root>

      <Box {...styles.line} />

      {isJoined ? (
        <Button
          loading={isPendingLeave}
          onClick={handleLeave}
          {...styles.button}
          backgroundColor="#DC2626"
          _hover={{ backgroundColor: "#B91C1C" }}
        >
          Leave Event
        </Button>
      ) : (
        <Button loading={isPendingJoin} onClick={handleJoin} {...styles.button}>
          Join Event
        </Button>
      )}
    </Box>
  );
};

export default EventItem;
