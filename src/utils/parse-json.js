export const parseStringJson = (data) => {
  try {
    return JSON.stringify(data);
  } catch (error) {
    return data;
  }
};

export const parseObjectJson = (data) => {
  try {
    return JSON.parse(data);
  } catch (e) {
    return data;
  }
};
