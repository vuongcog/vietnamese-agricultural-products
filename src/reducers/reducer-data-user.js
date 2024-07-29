import {
  CHANGE_PASSWORD_ERROR,
  CHANGE_PASSWORD_SUCCESS,
  CHANGED_PASSWORD,
  CHANGING_PASSWORD,
  FETCHED_DATA_USER,
  FETCHING_DATA_USER,
  SET_DATA_USER,
} from '../actions/action-infor-user';
export const initialState = {
  isFetchDataUser: false,
  dataUser: [],
  isChangePassword: false,
  isChangePasswordSuccess: false,
  isChangePasswordError: false,
};
const handlerFetchDataUser = state => ({ ...state, isFetchDataUser: true });
const handlerSetDataUser = (state, action) => ({
  ...state,
  dataUser: action.payload,
});
const handlerFetchedDataUser = state => ({ ...state, isFetchDataUser: false });

// 111 handler đổi mật khẩu
const handlerChangingPassword = state => ({ ...state, isChangePassword: true });
const handlerChangedPassword = state => ({ ...state, isChangePassword: false });
const handlerChangePasswordSuccess = state => ({
  ...state,
  isChangePasswordSuccess: true,
});
const handlerChangedPasswrodError = state => ({
  ...state,
  isChangePasswordError: true,
});

const mapperHandle = {
  // 111 action data user
  [FETCHING_DATA_USER]: handlerFetchDataUser,
  [SET_DATA_USER]: handlerSetDataUser,
  [FETCHED_DATA_USER]: handlerFetchedDataUser,

  [CHANGING_PASSWORD]: handlerChangingPassword,
  [CHANGED_PASSWORD]: handlerChangedPassword,
  [CHANGE_PASSWORD_SUCCESS]: handlerChangePasswordSuccess,
  [CHANGE_PASSWORD_ERROR]: handlerChangedPasswrodError,
};

export const reducerDataUser = (state = initialState, action) => {
  const handle = mapperHandle[action.type];
  return handle ? handle(state, action) : state;
};
