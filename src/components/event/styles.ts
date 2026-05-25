import type {
  BoxProps,
  ButtonProps,
  ListItemProps,
  ListRootProps,
  TextProps,
} from "@chakra-ui/react";

export const styles = {
  event: {
    display: "flex",
    flexDirection: "column",
    minHeight: "280px",
    maxWidth: "360px",
    padding: "20px",
    borderRadius: "12px",
    border: "0.5px solid #E5E7EB",
    backgroundColor: "#ffffff",
    cursor: "pointer",
    transition: "all 150ms ease",
    _hover: {
      "& h2": {
        color: "#4F46E5",
      },
    },
  } as BoxProps,

  eventTitle: {
    fontSize: "16px",
    fontWeight: "500",
    color: "#111827",
    marginBottom: "6px",
    transition: "all 150ms ease",
  } as BoxProps,

  eventDescription: {
    color: "#6B7280",
    fontSize: "13px",
    lineHeight: "1.5",
    marginBottom: "14px",
  } as TextProps,

  eventListDetails: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    marginBottom: "8px",
  } as ListRootProps,

  listItemDetails: {
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    gap: "5px",
    color: "#6B7280",
    fontSize: "12px",
  } as ListItemProps,

  button: {
    backgroundColor: "#16A34A",
    color: "#ffffff",
    padding: "10px 0",
    maxWidth: "100%",
    borderRadius: "8px",
    marginTop: "auto",
  } as ButtonProps,

  line: {
    maxWidth: "100%",
    height: "1px",
    backgroundColor: "#E5E7EB",
  } as BoxProps,
};
