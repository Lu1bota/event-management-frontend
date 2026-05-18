import { Button, Dialog, Flex, Text } from "@chakra-ui/react";
import { MdOutlineLogout } from "react-icons/md";

interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  isLoading?: boolean;
}

const LogoutModal = ({
  isOpen,
  onClose,
  onConfirm,
  isLoading,
}: LogoutModalProps) => {
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

          <Dialog.Description>
            <Text fontSize="14px" color="#6B7280" mb="24px">
              Are you sure you want to log out? You will need to sign in again
              to access your account.
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
              onClick={onConfirm}
              loading={isLoading}
              _hover={{ backgroundColor: "#DC2626" }}
            >
              Log out
            </Button>
          </Flex>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
};

export default LogoutModal;
