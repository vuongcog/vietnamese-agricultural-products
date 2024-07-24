import {
  FETCHING_DATA_USER,
  FETCHED_DATA_USER,
  SET_INFO_USER,
} from '../constants/action';
const initialState = {
  inforUser: {},
  isFetching: false,
};
const handlerFetchingDataUser = state => ({ ...state, isFetching: true });
const handlerFetchedDataUser = state => ({ ...state, isFetching: false });
const handlerSetInforUser = (state, action) => ({
  ...state,
  inforUser: action.payload,
});

const mapperHandle = {
  [FETCHING_DATA_USER]: handlerFetchingDataUser,
  [FETCHED_DATA_USER]: handlerFetchedDataUser,
  [SET_INFO_USER]: handlerSetInforUser,
};
export const reducerDataUser = (state = initialState, action) => {
  const handle = mapperHandle[action.type];
  return handle ? handle(state, action) : state;
};
