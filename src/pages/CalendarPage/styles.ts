import type {
  BoxProps,
  ContainerProps,
  FlexProps,
  TextProps,
} from "@chakra-ui/react";

export const styles = {
  pageWrapper: {
    direction: "column",
    height: "100vh",
    overflow: "hidden",
  } as FlexProps,

  contentContainer: {
    direction: "column",
    flex: 1,
    px: "24px",
    maxW: "1440px",
    mx: "auto",
    w: "100%",
  } as ContainerProps,

  title: {
    fontSize: "30px",
    fontWeight: "700",
    color: "#111827",
    lineHeight: "1.2",
    mb: "8px",
    mt: "40px",
  } as BoxProps,

  subtitle: {
    fontSize: "15px",
    fontWeight: "400",
    color: "#6B7280",
    lineHeight: "1.5",
    mb: "32px",
  } as TextProps,

  calendarWrapper: {
    flex: 1,
    minH: "0",
    pb: "24px",
  } as BoxProps,
};
