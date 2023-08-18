export type DateRepresentation = string | Date;

const pad = (value: number) => value < 10 ? `0${value}` : value.toString();

/** E.g. `2008-04-02` */
export const formatIsoDate = (representation: DateRepresentation) => {
  const date = new Date(representation);
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
};

/** E.g. `02/04/2008` */
export const formatDate = (representation: DateRepresentation) => {
  const date = new Date(representation);
  return `${pad(date.getDate())}/${pad(date.getMonth() + 1)}/${date.getFullYear()}`;
};

/** E.g. `2 April 2008` */
export const formatDateLong = (representation: DateRepresentation) => {
  const date = new Date(representation);
  return `${date.getDate()} ${date.toLocaleDateString('default', { month: 'long' })} ${date.getFullYear()}`;
};

/** E.g. `2008-04-02T08:16:32.064 -> 2008-04-02T00:00:00.000` */
export const getFromDate = (representation: DateRepresentation) => {
  const date = new Date(representation);
  date.setHours(0, 0, 0, 0);
  return date;
};

/** E.g. `2008-04-02T08:16:32.064 -> 2008-04-02T23:59:59.999` */
export const getToDate = (representation: DateRepresentation) => {
  const date = new Date(representation);
  date.setHours(23, 59, 59, 999);
  return date;
};
