// ! action liên quan tới fetch api cho list shopping
export const FETCHING_DATA = "CRUD_FETCH_DATA";
export const FETCHED_DATA = "CURD_FETCHED_DATA";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILED = "FETCH_DATA_FAILED";
export const FETCH_RESET_STATUS_FETCHING = "FETCH_RESET_STATUS_FETCHING";

// ! action liên quan tới filter

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
