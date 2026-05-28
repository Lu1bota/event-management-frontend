import type { LinkProps } from "@chakra-ui/react";

export const styles = {
  color: "#FFFFFF",
  backgroundColor: "#3B82F6",
  fontSize: "14px",
  fontWeight: "500",
  padding: "8px 16px",
  borderRadius: "8px",
  textDecoration: "none",
  transition: "background-color 150ms ease",

  _hover: {
    backgroundColor: "#2563EB",
  },
  _focus: { outline: "none", boxShadow: "none" },
} as LinkProps;
