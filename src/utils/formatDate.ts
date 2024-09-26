import dayjs from "dayjs";

export const format = (date: string | undefined, format: string) => {
  return dayjs(date).format(format);
};

export const formatDate = (date: string | undefined) => {
  return format(date, "D MMM YYYY, h:mm A");
};

export const formatTimeline = (date: string | undefined) => {
  return format(date, "D MMM YYYY");
};
