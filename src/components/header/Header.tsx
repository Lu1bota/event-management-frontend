import {
  Box,
  Flex,
  Link as ChakraLink,
  List,
  Text,
  Container,
  Avatar,
  IconButton,
} from "@chakra-ui/react";
import { styles } from "./styles";
import { IoIosList } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import { Link as RouterLink } from "react-router-dom";
import { useUserStore } from "../../store/users/useUserStore";
import { MdOutlineLogout } from "react-icons/md";
import { useLogout } from "../../queries";
import { useState } from "react";
import { CreateEventLink, LogoutModal } from "../common";

interface Navigation {
  name: string;
  icon: React.ReactNode;
  href: string;
}

const navigationItems: Navigation[] = [
  { name: "Events", icon: <IoIosList size={"16px"} />, href: "/" },
  { name: "My Events", icon: <CiCalendar size={"16px"} />, href: "/calendar" },
];

const Header = () => {
  const userName = useUserStore((prev) => prev.name);
  const { mutateAsync, isPending } = useLogout();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleLogout = async () => {
    await mutateAsync();
    setIsLogoutModalOpen(false);
  };

  return (
    <>
      <Box as="header" {...styles.header}>
        <Container {...styles.headerContainer}>
          <Box as={"nav"}>
            <List.Root variant="plain" {...styles.navigationList}>
              {navigationItems.map((item, index) => (
                <List.Item key={index} {...styles.navigationItem}>
                  <ChakraLink asChild {...styles.navigationLink}>
                    <RouterLink to={item.href}>
                      <Flex align="center" gap="6px">
                        {item.icon}
                        <Text>{item.name}</Text>
                      </Flex>
                    </RouterLink>
                  </ChakraLink>
                </List.Item>
              ))}

              <List.Item>
                <CreateEventLink />
              </List.Item>
            </List.Root>
          </Box>

          <Box width="1px" height="50%" backgroundColor="#E5E7EB" />

          <Flex gap={"12px"} position={"relative"}>
            <Flex align={"center"} gap="8px">
              <Avatar.Root colorPalette={"blue"} size={"xs"}>
                <Avatar.Fallback />
              </Avatar.Root>

              <Text {...styles.username}>{userName || "User"}</Text>
            </Flex>

            <IconButton
              aria-label="Logout"
              variant={"ghost"}
              onClick={() => setIsLogoutModalOpen(true)}
            >
              <MdOutlineLogout size={"16px"} color="#4B5563" />
            </IconButton>
          </Flex>
        </Container>
      </Box>

      <LogoutModal
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        onConfirm={handleLogout}
        isLoading={isPending}
      />
    </>
  );
};

export default Header;
