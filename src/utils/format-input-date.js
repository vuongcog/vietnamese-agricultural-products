export const formatDate = date => {
  if (!date) return '';
  const [year, month, day] = date.split('-');
  return `${day}-${month}-${year}`;
};

export const formatInputDate = inputDate => {
  if (!inputDate) return '';
  const [datePart] = inputDate.split(' ');
  const [year, month, day] = datePart.split('-');
  return `${day}-${month}-${year}`;
};

export const formatDefaultDate = dateTime => {
  if (!dateTime) return '';
  const [date] = dateTime.split(' ');
  const [year, month, day] = date.split('-');
  return `${day}-${month}-${year}`;
};
export const formatDateTest = date => {
  return moment(date).format('YYYY-MM-DD HH:mm:ss');
};
