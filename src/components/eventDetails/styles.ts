import type {
  BoxProps,
  ListItemProps,
  ListRootProps,
  TextProps,
} from "@chakra-ui/react";

export const styles = {
  box: {
    width: "100%",
    maxWidth: "860px",
    height: "100%",
    maxHeight: "175px",
    padding: "24px",
    border: "1px solid #E5E7EB",
    borderRadius: "12px",
    backgroundColor: "#ffffff",
  } as BoxProps,

  title: {
    fontSize: "22px",
    fontWeight: "500",
    color: "#111827",
  } as BoxProps,

  description: {
    fontSize: "14px",
    lineHeight: "1.6",
    color: "#6B7280",
  } as TextProps,

  line: {
    maxWidth: "100%",
    height: "1px",
    backgroundColor: "#E5E7EB",
    margin: "16px 0",
  } as BoxProps,

  list: {
    display: "flex",
    flexDirection: "row",
    gap: "16px",
    flexWrap: "wrap",
  } as ListRootProps,

  listItem: {
    display: "flex",
    flexDirection: "row",
    gap: "6px",
  } as ListItemProps,

  iconBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "8px",
    backgroundColor: "#F3F4F6",
    borderRadius: "12px",
    w: "36px",
    h: "36px",
  } as BoxProps,

  itemName: {
    fontSize: "11px",
    color: "#9CA3AF",
  } as TextProps,

  itemContent: {
    fontSize: "13px",
    fontWeight: "500",
    color: "#111827",
  } as TextProps,
};
