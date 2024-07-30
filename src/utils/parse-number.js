import { number } from 'prop-types';

export const transformNumber = value => {
  if (_.isEmpty(value)) return value;
  const parsedValue = parseFloat(value);
  if (value.endsWith('.000')) {
    return parsedValue.toString();
  } else {
    return value;
  }
};
