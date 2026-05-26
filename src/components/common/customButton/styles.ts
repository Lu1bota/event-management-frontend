import type { ButtonProps } from "@chakra-ui/react";

export const styles = {
  buttonJoin: {
    width: "100%",
    backgroundColor: "#16A34A",
    color: "#ffffff",
    padding: "10px 0",
    maxWidth: "100%",
    borderRadius: "8px",
    marginTop: "auto",
    transition: "background 150ms ease",
    _hover: {
      backgroundColor: "#15803D",
    },
  } as ButtonProps,

  buttonEdit: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    backgroundColor: "#3B82F6",
    color: "#ffffff",
    padding: "10px 0",
    maxWidth: "100%",
    borderRadius: "8px",
    transition: "background 150ms ease",
    _hover: {
      backgroundColor: "#2563EB",
    },
  } as ButtonProps,

  buttonDelete: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    backgroundColor: "#EF4444",
    color: "#ffffff",
    padding: "10px 0",
    maxWidth: "100%",
    borderRadius: "8px",
    transition: "background 150ms ease",
    _hover: {
      backgroundColor: "#DC2626",
    },
  } as ButtonProps,
};
