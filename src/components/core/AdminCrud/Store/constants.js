export const FETCH_DATA = "CRUD_FETCH_DATA";
export const ADD_DATA = "CRUD_ADD_DATA";
export const FETCHED_DATA = "CURD_FETCHED_DATA";
export const UPDATE_DATA = "CURD_UPDATE_DATA";

export const SET_ITEMS = "CRUD_SET_ITEMS";
export const UPDATE_SLICE = "CRUD_UPDATE_SLICE";
export const REFRESH = "CRUD_REFRESH";
export const SET_ERROR = "CRUD_ERROR";
export const ADDING_DATA = "ADDING_DATA";
export const ADDED_DATA = "ADDED_DATA";

// * action cho gửi mail
export const SENDING_EMAIL = "SENDING_EMAIL";
export const SENDED_EMAIL = "SENDED_EMAIL";
export const SEND_EMAIL = "SEND_EMAIL";
export const SEND_EMAIL_SUCCSESS = "SEND_EMAIL_SUCCSESS";
export const SEND_EMAIL_ERROR = "SEND_EMAIL_ERROR";
export const SEND_RESET_EMAIL_STATUS = "SEND_RESET_EMAIL_STATUS";

export const resetEmailStatus = () => ({
  type: SEND_RESET_EMAIL_STATUS,
});
