import {
  ADDED_DATA,
  ADDING_DATA,
  ADD_DATA,
  FETCHED_DATA,
  FETCH_DATA,
  REFRESH,
  SENDED_EMAIL,
  SENDING_EMAIL,
  SEND_EMAIL_ERROR,
  SEND_EMAIL_SUCCSESS,
  SEND_RESET_EMAIL_STATUS,
  SET_ERROR,
  SET_ITEMS,
  UPDATE_SLICE,
} from "./constants";
const intiState = {
  loading: true,
  isFetching: false,
  items: [],
  refresh: false,
  error: null,
  errorTimestamp: null,
  isAddingData: false,
  // * state giành cho send mail
  isSendEmail: false,
  sendMailSuccsess: false,
  sendMailError: null,
};

const fetchingData = (state) => {
  return {
    ...state,
    isFetching: true,
  };
};
const fetchedData = (state) => ({
  ...state,
  isFetching: false,
});
const addingData = (state) => ({ ...state, isAddingData: true });
const addedData = (state) => ({ ...state, isAddingData: false });
const setItems = (state, action) => ({ ...state, items: action.payload });
const setError = (state, action) => {
  return { ...state, error: action.payload, errorTimestamp: Date.now() };
};

const addData = (state) => {
  return {
    ...state,
  };
};
// * các handler giành cho send mail
const sendingEmail = (state) => {
  return {
    ...state,
    isSendEmail: true,
  };
};

const sendedEmail = (state) => {
  return { ...state, isSendEmail: false };
};

const handlerSendMailSuccess = (state) => {
  return { ...state, sendMailSuccsess: true };
};
const handlerSendMailError = (state, action) => {
  return { ...state, sendMailError: action.payload };
};

const handlerResetEmailStatus = (state) => {
  return { ...state, sendMailSuccsess: false, sendMailError: null };
};
const refresh = (state) => {
  return {
    ...state,
    refresh: !state.refresh,
  };
};

const updateSlice = (state) => {
  return { ...state };
};
const handlers = {
  [FETCH_DATA]: fetchingData,
  [FETCHED_DATA]: fetchedData,
  [ADD_DATA]: addData,
  [ADDING_DATA]: addingData,
  [ADDED_DATA]: addedData,
  [SET_ITEMS]: setItems,
  [UPDATE_SLICE]: updateSlice,
  [REFRESH]: refresh,
  [SET_ERROR]: setError,
  // * action giành cho send mail
  [SENDING_EMAIL]: sendingEmail,
  [SENDED_EMAIL]: sendedEmail,
  [SEND_EMAIL_ERROR]: handlerSendMailError,
  [SEND_EMAIL_SUCCSESS]: handlerSendMailSuccess,
  [SEND_RESET_EMAIL_STATUS]: handlerResetEmailStatus,
};
export const reducerList = (state = intiState, action) => {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
};
