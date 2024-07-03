export const formatDate = (date) => {
  if (!date) return "";
  const [year, month, day] = date.split("-");
  return `${day}-${month}-${year}`;
};

export const formatInputDate = (inputDate) => {
  if (!inputDate) return "";
  const [year, month, day] = inputDate.split("-");
  return `${day}-${month}-${year}`;
};
export const formatDefaultDate = (dateTime) => {
  const [date, time] = dateTime.split(" ");
  const [year, month, day] = date.split("-");
  console.log(`${day}-${month}-${year}`);
  return `${day}-${month}-${year}`;
};
