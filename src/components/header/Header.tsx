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
import { Link as RouterLink, type LinkProps } from "react-router-dom";
import CreateEventLink from "../common/createEvent/CreateEventLink";
import { useUserStore } from "../../store/users/useUserStore";
import { MdOutlineLogout } from "react-icons/md";

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

  return (
    <Box as="header" {...styles.header}>
      <Container {...styles.headerContainer}>
        <Box as={"nav"}>
          <List.Root variant="plain" {...styles.navigationList}>
            {navigationItems.map((item, index) => (
              <List.Item key={index} {...styles.navigationItem}>
                <ChakraLink
                  as={RouterLink}
                  {...({ to: `${item.href}` } as unknown as LinkProps)}
                  {...styles.navigationLink}
                >
                  <Flex align="center" gap={"6px"}>
                    {item.icon}
                    <Text>{item.name}</Text>
                  </Flex>
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

          <IconButton aria-label="Logout" variant={"ghost"}>
            <MdOutlineLogout size={"16px"} color="#4B5563" />
          </IconButton>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
