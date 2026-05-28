import { Box, Flex, Progress, Text } from "@chakra-ui/react";
import { useMemo, useState, type FC } from "react";
import { styles } from "./styles";
import { ConfirmModal, CustomButton } from "../common";
import { useDeleteEvent, useJoinEvent, useLeaveEvent } from "../../queries";
import { useUserStore } from "../../store/users";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

interface RegistrationCardProps {
  eventId: string;
  participantCount: number;
  capacity: number;
  isCreator?: boolean;
}

const RegistrationCard: FC<RegistrationCardProps> = (props) => {
  const { participantCount, capacity, eventId, isCreator = false } = props;

  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const participations = useUserStore((state) => state.participations);

  const { mutateAsync: mutateJoin, isPending: isPendingJoin } = useJoinEvent();
  const { mutateAsync: mutateLeave, isPending: isPendingLeave } =
    useLeaveEvent();
  const { mutateAsync: mutateDelete, isPending: isPendingDelete } =
    useDeleteEvent();

  const isJoined = useMemo(() => {
    return participations?.some((p) => p.eventId === eventId) ?? false;
  }, [eventId, participations]);

  const handleJoin = async () => {
    await mutateJoin(eventId);
    queryClient.invalidateQueries({ queryKey: ["userInfo"] });
    queryClient.invalidateQueries({ queryKey: ["event", eventId] });
  };

  const handleLeave = async () => {
    await mutateLeave(eventId);
    queryClient.invalidateQueries({ queryKey: ["userInfo"] });
    queryClient.invalidateQueries({ queryKey: ["event", eventId] });
  };

  const handleDelete = async (eventId: string) => {
    await mutateDelete(eventId);
    queryClient.invalidateQueries({ queryKey: ["events"] });

    queryClient.invalidateQueries({ queryKey: ["userInfo"] });

    queryClient.removeQueries({ queryKey: ["event", eventId] });

    navigate("/", { replace: true });
  };

  const progressPercent =
    capacity > 0 ? (participantCount / capacity) * 100 : 0;

  return (
    <Box {...styles.box}>
      <Box as={"h3"} {...styles.title}>
        Registration
      </Box>

      <Flex {...styles.containerLabel}>
        <Text {...styles.field}>Spots filled</Text>
        <Text {...styles.count}>
          {participantCount} / {capacity}
        </Text>
      </Flex>

      <Progress.Root
        value={progressPercent}
        colorPalette="green"
        size="sm"
        mb={6}
      >
        <Progress.Track bg="gray.100" borderRadius="full">
          <Progress.Range borderRadius="full" />
        </Progress.Track>
      </Progress.Root>

      <Flex flexDir={"column"} gap={"10px"}>
        <CustomButton
          variant="join"
          isJoined={isJoined}
          isPendingLeave={isPendingLeave}
          handleLeave={handleLeave}
          isPendingJoin={isPendingJoin}
          handleJoin={handleJoin}
        />

        {isCreator && (
          <>
            <CustomButton
              variant="edit"
              handleEdit={() => navigate(`/update/${eventId}`)}
            />

            <CustomButton
              variant="delete"
              handleOpenModal={setIsConfirmModalOpen}
            />
          </>
        )}
      </Flex>

      <ConfirmModal
        btnText="Delete"
        description="Are you sure you want to delete this event? This action cannot be undone."
        isOpen={isConfirmModalOpen}
        onClose={() => setIsConfirmModalOpen(false)}
        onConfirm={() => {
          handleDelete(eventId);
        }}
        isLoading={isPendingDelete}
      />
    </Box>
  );
};

export default RegistrationCard;
