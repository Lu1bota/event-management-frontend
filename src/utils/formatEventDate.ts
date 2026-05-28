export const formatEventDate = (dateTime: Date | string): string => {
  return new Date(dateTime).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};
