import { useMemo } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);
dayjs.locale("en");

const useDateFormat = (dateString: Date) => {
  return useMemo(() => {
    const now = dayjs();
    const date = dayjs(dateString);

    const diffInHours = now.diff(date, "hour");
    const diffInDays = now.diff(date, "day");
    const diffInWeeks = now.diff(date, "week");
    const diffInMonths = now.diff(date, "month");

    if (diffInHours < 1) return "just now";
    if (diffInHours === 1) return "an hour ago";
    if (diffInHours < 24) return `${diffInHours} hours ago`;
    if (diffInDays === 1) return "1 day ago";
    if (diffInDays < 7) return `${diffInDays} days ago`;
    if (diffInWeeks === 1) return "1 week ago";
    if (diffInWeeks < 4) return `${diffInWeeks} weeks ago`;
    if (diffInMonths === 1) return "1 month ago";
    if (diffInMonths < 3) return `${diffInMonths} months ago`;

    return date.format("YYYY-MM-DD");
  }, [dateString]);
};

export default useDateFormat;
