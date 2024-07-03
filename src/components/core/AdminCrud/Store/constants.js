export const FETCH_DATA = "CRUD_FETCH_DATA";
export const FETCHED_DATA = "CURD_FETCHED_DATA";
export const SET_ITEMS = "CRUD_SET_ITEMS";
export const REFRESH = "CRUD_REFRESH";

// * action cho update data
export const UPDATE_DATA = "CURD_UPDATE_DATA";
export const UPDATING_DATA = "CURD_UPDATING_DATA";
export const UPDATED_DATA = "CURD_UPDATED_DATA";
export const UPDATE_SUCCESS = "CURD_UPDATE_SUCCESS";
export const UPDATE_FAILED = "CURD_UPDATE_FAILED";
export const UPDATE_RESET_STATUS = "CURD_UPDATE_RESET_STATUS";

// * action cho create data
export const ADD_DATA = "CRUD_ADD_DATA";
export const ADDING_DATA = "CRUD_ADDING_DATA";
export const ADDED_DATA = "CRUD_ADDED_DATA";
export const ADD_DATA_SUCCESS = "CRUD_ADD_DATA_SUCCESS";
export const ADD_DATA_FAILED = "CRUD_ADD_DATA_FAILED";
export const ADD_RESET_STATUS = "CURD_ADD_RESET_STATUS";

// 111 action cho delete data
export const DELETE_DATA = "DELETE_DATA";
export const DELETING_DATA = "DELETING_DATA";
export const DELETED_DATA = "DELETED_DATA";
export const DELETE_DATA_SUCCESS = "DELETE_DATA_SUCCESS";
export const DELETE_DATA_FAILED = "DELETE_DATA_FAILED";
export const DELETE_RESET_STATUS = "DELETE_RESET_STATUS";

// * action cho gửi mail
export const SENDING_EMAIL = "CRUD_SENDING_EMAIL";
export const SENDED_EMAIL = "CRUD_SENDED_EMAIL";
export const SEND_EMAIL = "CRUD_SEND_EMAIL";
export const SEND_EMAIL_SUCCSESS = "CRUD_SEND_EMAIL_SUCCSESS";
export const SEND_EMAIL_ERROR = "CRUD_SEND_EMAIL_ERROR";
export const SEND_RESET_EMAIL_STATUS = "CRUD_SEND_RESET_EMAIL_STATUS";

export const resetEmailStatus = () => ({
  type: SEND_RESET_EMAIL_STATUS,
});
