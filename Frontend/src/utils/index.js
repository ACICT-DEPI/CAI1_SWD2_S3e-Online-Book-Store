export const parseingDate = (dateString) => {
  const parsedDate = new Date(dateString);
  const year = parsedDate.getUTCFullYear();
  const month = parsedDate.getUTCMonth() + 1;
  const day = parsedDate.getUTCDate();
  return `${day}-${month}-${year}`;
};
