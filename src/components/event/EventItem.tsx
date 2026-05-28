import { Box, List, Text } from "@chakra-ui/react";
import type { IEvent } from "../../types";
import { useMemo, type FC } from "react";
import { CiCalendar, CiClock2 } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { RxPeople } from "react-icons/rx";
import { styles } from "./styles";
import { useJoinEvent, useLeaveEvent } from "../../queries";
import { useUserStore } from "../../store/users";
import { useQueryClient } from "@tanstack/react-query";
import { CustomButton } from "../common";
import { formatEventDate, formatEventTime } from "../../utils";
import { useNavigate } from "react-router-dom";

interface EventItemProps {
  event: IEvent;
}

interface EventDetailsTypes {
  id: string;
  icon: React.ReactNode;
  content: string;
}

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
  const navigate = useNavigate();

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

  const handleNavigate = () => navigate(`/events/${id}`);

  const eventDetails: EventDetailsTypes[] = [
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
    <Box as={"li"} {...styles.event} onClick={handleNavigate}>
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

      <CustomButton
        variant="join"
        isJoined={isJoined}
        isPendingLeave={isPendingLeave}
        handleLeave={handleLeave}
        isPendingJoin={isPendingJoin}
        handleJoin={handleJoin}
      />
    </Box>
  );
};

export default EventItem;
