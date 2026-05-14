import type {
  BoxProps,
  ContainerProps,
  FlexProps,
  LinkProps,
  ListItemProps,
  ListRootProps,
  TextProps,
} from "@chakra-ui/react";

export const styles = {
  header: {
    borderBottom: "1px solid #E5E7EB",
    backgroundColor: "#ffffff",
  } as BoxProps,

  headerContainer: {
    height: "56px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "16px",
  } as ContainerProps,

  navigationList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  } as ListRootProps,

  navigationItem: {
    fontSize: "14px",
    fontWeight: "400",
    color: "#4B5563",
  } as ListItemProps,

  navigationLink: {
    color: "#4B5563",
    fontSize: "14px",
    fontWeight: "400",
    padding: "6px 10px",
    borderRadius: "8px",
    textDecoration: "none",
    transition: "background-color 150ms ease",

    _hover: {
      backgroundColor: "#F3F4F6",
      color: "#0D0D0D",
    },
    _focus: { outline: "none", boxShadow: "none" },
  } as LinkProps,

  avatarContainer: {
    position: "absolute",

    _before: {
      content: "",
      width: "1px",
      height: "50%",
      color: "#E5E7EB",
      top: "50%",
      left: "-50%",
    },
  } as FlexProps,

  username: {
    fontSize: "14px",
    fontWeight: "500",
    color: "#4B5563",
    whiteSpace: "nowrap",
  } as TextProps,
};
