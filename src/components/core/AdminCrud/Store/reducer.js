import {
  ADDED_DATA,
  ADDING_DATA,
  ADD_DATA_FAILED,
  ADD_DATA_SUCCESS,
  ADD_RESET_STATUS,
  DELETED_DATA,
  DELETE_DATA_FAILED,
  DELETE_DATA_SUCCESS,
  DELETE_RESET_STATUS,
  DELETING_DATA,
  FETCHED_DATA,
  FETCH_DATA,
  REFRESH,
  SENDED_EMAIL,
  SENDING_EMAIL,
  SEND_EMAIL_ERROR,
  SEND_EMAIL_SUCCSESS,
  SEND_RESET_EMAIL_STATUS,
  SET_ITEMS,
  UPDATED_DATA,
  UPDATE_FAILED,
  UPDATE_RESET_STATUS,
  UPDATE_SUCCESS,
  UPDATING_DATA,
} from "./constants";
const intiState = {
  // 111 state giành cho các trạng thái global
  loading: true,
  isFetching: false,
  items: [],
  refresh: false,
  // 222 state giành cho create data
  isAddingData: false,
  isAddDataSuccess: false,
  isAddDataFailed: false,

  // 333 state giành cho update data
  isUpdateData: false,
  isUpdatedDataSuccess: false,
  isUpdatedDataFailed: false,

  // 444 state giành cho send mail
  isSendEmail: false,
  sendMailSuccsess: false,
  sendMailError: false,
  // 555 state giành cho delete data
  isDeleteData: false,
  isDeletedDataSuccess: false,
  isDeletedDataFailed: false,
};

// 111 handler giành cho nạp dữ liệu global
const setItems = (state, action) => ({ ...state, items: action.payload });
const fetchingData = (state) => ({
    ...state,
    isFetching: true,
  });
const fetchedData = (state) => ({
  ...state,
  isFetching: false,
});

// 222 handler giành cho create data
const handlerAddingData = (state) => ({ ...state, isAddingData: true });
const handlerAddedData = (state) => ({ ...state, isAddingData: false });
const handlerAddSuccess = (state) => ({
  ...state,
  isAddDataSuccess: true,
});
const handlerAddFailed = (state) => ({
  ...state,
  isUpdatedDataFailed: true,
});
const handlerResetStatusAddData = (state) => ({
  ...state,
  isAddDataSuccess: false,
  isUpdatedDataFailed: false,
});

// 333 handler giành cho update data
const handlerUpdatingData = (state) => ({ ...state, isUpdateData: true });
const handlerUpdatedData = (state) => ({ ...state, isUpdateData: false });
const handlerUpdateSuccess = (state) => ({
  ...state,
  isAddDataSuccess: true,
});
const handlerUpdatedFailed = (state) => ({
  ...state,
  isUpdatedDataFailed: true,
});
const handlerResetStatusUpdateData = (state) => ({
  ...state,
  isUpdatedDataSuccess: false,
  isUpdatedDataFailed: false,
});

// 444 handler giành cho send mail

const handlerSendingEmail = (state) => ({
  ...state,
  isSendEmail: true,
});

const sendedEmail = (state) => ({ ...state, isSendEmail: false });

const handlerSendMailSuccess = (state) => ({ ...state, sendMailSuccsess: true });
const handlerSendMailError = (state) => ({ ...state, sendMailError: true });

const handlerResetEmailStatus = (state) => ({ ...state, sendMailSuccsess: false, sendMailError: false });
const refresh = (state) => ({
    ...state,
    refresh: !state.refresh,
  });

// 555 handler giành cho delete

const handlerDeletingData = (state) => ({ ...state, isDeleteData: true });
const handlerDeleteddData = (state) => ({ ...state, isDeleteData: false });
const handlerDeletedSuccess = (state) => ({
  ...state,
  isDeletedDataSuccess: true,
});
const handlerDeletedFailed = (state) => ({
  ...state,
  isDeletedDataFailed: true,
});
const handlerResetStatusDeleteData = (state) => ({
  ...state,
  isDeletedDataSuccess: false,
  isDeletedDataFailed: false,
});

// 111 mapping handlers
const handlers = {
  // 222 action giành cho fetch data
  [FETCH_DATA]: fetchingData,
  [FETCHED_DATA]: fetchedData,
  [REFRESH]: refresh,
  [SET_ITEMS]: setItems,

  // 333 action giành cho add data
  [ADDING_DATA]: handlerAddingData,
  [ADDED_DATA]: handlerAddedData,
  [ADD_DATA_SUCCESS]: handlerAddSuccess,
  [ADD_DATA_FAILED]: handlerAddFailed,
  [ADD_RESET_STATUS]: handlerResetStatusAddData,

  // 444 action giành cho update data
  [UPDATING_DATA]: handlerUpdatingData,
  [UPDATED_DATA]: handlerUpdatedData,
  [UPDATE_SUCCESS]: handlerUpdateSuccess,
  [UPDATE_FAILED]: handlerUpdatedFailed,
  [UPDATE_RESET_STATUS]: handlerResetStatusUpdateData,

  // 555 action giành cho send mail
  [SENDING_EMAIL]: handlerSendingEmail,
  [SENDED_EMAIL]: sendedEmail,
  [SEND_EMAIL_ERROR]: handlerSendMailError,
  [SEND_EMAIL_SUCCSESS]: handlerSendMailSuccess,
  [SEND_RESET_EMAIL_STATUS]: handlerResetEmailStatus,

  //666 action gainhf cho delete
  [DELETING_DATA]: handlerDeletingData,
  [DELETED_DATA]: handlerDeleteddData,
  [DELETE_DATA_SUCCESS]: handlerDeletedSuccess,
  [DELETE_DATA_FAILED]: handlerDeletedFailed,
  [DELETE_RESET_STATUS]: handlerResetStatusDeleteData,
};
export const reducerList = (state = intiState, action) => {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
};
