import { Button } from "@chakra-ui/react";
import type { FC } from "react";
import { styles } from "./styles";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

type Variant = "join" | "edit" | "delete";

interface CustomButtonProps {
  variant: Variant;
  eventId?: string;
  isJoined?: boolean;
  isPendingLeave?: boolean;
  isPendingJoin?: boolean;
  isPendingDelete?: boolean;
  handleLeave?: () => void;
  handleJoin?: () => void;
  handleEdit?: () => void;
  handleDelete?: (eventId: string) => void;
}

const CustomButton: FC<CustomButtonProps> = (props) => {
  const {
    variant,
    eventId,
    isJoined,
    isPendingJoin,
    isPendingLeave,
    isPendingDelete,
    handleJoin,
    handleLeave,
    handleEdit,
    handleDelete,
  } = props;

  if (variant === "join") {
    return (
      <>
        {isJoined ? (
          <Button
            loading={isPendingLeave}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              e.stopPropagation();

              if (handleLeave) handleLeave();
            }}
            {...styles.buttonJoin}
            backgroundColor="#DC2626"
            _hover={{ backgroundColor: "#B91C1C" }}
          >
            Leave Event
          </Button>
        ) : (
          <Button
            loading={isPendingJoin}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              e.stopPropagation();

              if (handleJoin) handleJoin();
            }}
            {...styles.buttonJoin}
          >
            Join Event
          </Button>
        )}
      </>
    );
  }

  if (variant === "edit") {
    return (
      <Button onClick={handleEdit} {...styles.buttonEdit}>
        <FaRegEdit />
        Edit event
      </Button>
    );
  }

  if (variant === "delete") {
    return (
      <Button
        onClick={() => {
          if (handleDelete && eventId) {
            handleDelete(eventId);
          }
        }}
        loading={isPendingDelete}
        {...styles.buttonDelete}
      >
        <RiDeleteBinLine />
        Delete event
      </Button>
    );
  }

  return null;
};

export default CustomButton;
