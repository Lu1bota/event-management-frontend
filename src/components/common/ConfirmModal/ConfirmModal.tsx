import { Button, Dialog, Flex, Text } from "@chakra-ui/react";
import { MdOutlineLogout } from "react-icons/md";

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (eventId?: string) => void;
  isLoading?: boolean;
  btnText: string;
  description: string;
}

const ConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  isLoading,
  btnText,
  description,
}: ConfirmModalProps) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={({ open }) => !open && onClose()}>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content
          maxW="400px"
          borderRadius="12px"
          p="24px"
          mx="auto"
          my="auto"
        >
          {btnText === "Log out" && (
            <>
              <Flex
                w="48px"
                h="48px"
                borderRadius="10px"
                backgroundColor="#FEE2E2"
                align="center"
                justify="center"
                mb="16px"
              >
                <MdOutlineLogout size="22px" color="#EF4444" />
              </Flex>

              <Dialog.Title
                fontSize="18px"
                fontWeight="600"
                color="#111827"
                mb="8px"
              >
                Log out
              </Dialog.Title>
            </>
          )}

          <Dialog.Description>
            <Text fontSize="14px" color="#6B7280" mb="24px">
              {description}
            </Text>
          </Dialog.Description>

          <Flex gap="12px">
            <Button
              flex="1"
              variant="outline"
              borderColor="#E5E7EB"
              color="#374151"
              borderRadius="8px"
              onClick={onClose}
              _hover={{ backgroundColor: "#F9FAFB" }}
            >
              Cancel
            </Button>
            <Button
              flex="1"
              backgroundColor="#EF4444"
              color="white"
              borderRadius="8px"
              onClick={() => {
                if (onConfirm) onConfirm();
              }}
              loading={isLoading}
              _hover={{ backgroundColor: "#DC2626" }}
            >
              {btnText}
            </Button>
          </Flex>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
};

export default ConfirmModal;
