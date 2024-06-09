const FETCH_DATA = "FETCH_DATA";
const intiState = {
  loading: true,
  isFetching: false,
  data: [],
};

const fetchingData = (state, action) => ({
  ...state,
  loading: true,
  isFeching: true,
  data: [],
});

const handlers = {
  [FETCH_DATA]: fetchingData,
};
export const reducerList = (state = intiState, action) => {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
};
