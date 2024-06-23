export const increateQuantiy = (setNumber, max) => {
  setNumber((preNumber) => {
    if (preNumber < max) {
      return ++preNumber;
    }
  });
};
export const decreateQuantiry = (setNumber) => {
  setNumber((preNumber) => {
    if (preNumber > 0) {
      return --preNumber;
    }
  });
};
