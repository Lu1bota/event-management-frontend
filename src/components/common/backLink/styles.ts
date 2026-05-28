import type { ButtonProps } from "@chakra-ui/react";

export const styles = {
  backLink: {
    color: "#6B7280",
    fontSize: "13px",
    fontWeight: "400",
    padding: "6px 10px",
    borderRadius: "8px",
    textDecoration: "none",
    backgroundColor: "transparent",
    margin: "16px 0",
    transition: "background-color 150ms ease",

    _hover: {
      backgroundColor: "#F3F4F6",
      color: "#0D0D0D",
    },
    _focus: { outline: "none", boxShadow: "none" },
  } as ButtonProps,
};
