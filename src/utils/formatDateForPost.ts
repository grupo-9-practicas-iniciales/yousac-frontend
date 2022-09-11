import { format, formatDistanceToNow } from "date-fns";

import { es } from "date-fns/locale";

export const getFormatDistanceToNow = (date: number) => {
  const fromNow = formatDistanceToNow(date, { locale: es });

  return fromNow;
};

export const formatDateToWords = (date: number) => {
  return format(date, "d 'de' MMMM yyyy", { locale: es });
};
