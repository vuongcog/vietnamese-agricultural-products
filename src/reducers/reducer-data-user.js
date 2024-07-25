import {
  FETCHED_DATA_USER,
  FETCHING_DATA_USER,
  SET_DATA_USER,
} from '../actions/action-infor-user';

export const initialState = {
  isFetchDataUser: false,
  dataUser: [],
};
const handlerFetchDataUser = state => ({ ...state, isFetchDataUser: true });
const handlerSetDataUser = (state, action) => ({
  ...state,
  dataUser: action.payload,
});
const handlerFetchedDataUser = state => ({ ...state, isFetchDataUser: false });

const mapperHandle = {
  // 111 action data user
  [FETCHING_DATA_USER]: handlerFetchDataUser,
  [SET_DATA_USER]: handlerSetDataUser,
  [FETCHED_DATA_USER]: handlerFetchedDataUser,
};

export const reducerDataUser = (state = initialState, action) => {
  const handle = mapperHandle[action.type];
  return handle ? handle(state, action) : state;
};
