export const parseStringJson = (data) => {
  return JSON.stringify(data);
};

export const parseObjectJson = (data) => {
  try {
    return JSON.parse(data);
  } catch (e) {
    return data;
  }
};
