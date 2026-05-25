import type { BoxProps, TextProps } from "@chakra-ui/react";

export const styles = {
  eventsList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "16px",
    justifyItems: { base: "center", md: "stretch" },
    alignItems: { base: "start", md: "stretch" },
  } as BoxProps,

  title: {
    marginTop: "40px",
    fontSize: "30px",
    fontWeight: "700",
    lineHeight: "1.2",
    marginBottom: "8px",
    color: "#111827",
  } as BoxProps,

  subTitle: {
    fontSize: "15px",
    fontWeight: "400",
    lineHeight: "1.5",
    marginBottom: "32px",
    color: "#6B7280",
  } as TextProps,
};
