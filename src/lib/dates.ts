import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

export function formatDate(date: Date, format = "MMMM DD, YYYY") {
  return dayjs.utc(date).format(format);
}
