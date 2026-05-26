import type { BoxProps, FlexProps, TextProps } from "@chakra-ui/react";

export const styles = {
  box: {
    width: "100%",
    maxWidth: "320px",
    padding: "24px",
    border: "1px solid #E5E7EB",
    borderRadius: "12px",
    backgroundColor: "#ffffff",
  } as BoxProps,

  containerLabel: {
    justifyContent: "space-between",
    alignItems: "center",
    mb: "2",
  } as FlexProps,

  title: {
    fontSize: "13px",
    fontWeight: "500",
    color: "#111827",
  } as BoxProps,

  field: {
    fontSize: "12px",
    fontWeight: "500",
    color: "#6B7280",
  } as TextProps,

  count: {
    fontSize: "12px",
    fontWeight: "500",
    color: "#111827",
  } as TextProps,
};
