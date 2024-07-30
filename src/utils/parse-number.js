export const transformNumber = value => {
  const parsedValue = parseFloat(value);
  if (Number.isInteger(parsedValue) || value.endsWith('.000')) {
    return parsedValue.toString();
  } else {
    return value;
  }
};
