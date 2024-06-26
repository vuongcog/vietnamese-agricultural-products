// import { call, put, takeLatest } from "redux-saga/effects";
// import {
//   ADDED_DATA,
//   ADDING_DATA,
//   ADD_DATA,
//   REFRESH,
//   SENDED_EMAIL,
//   SENDING_EMAIL,
//   SEND_EMAIL,
//   SEND_EMAIL_ERROR,
//   SEND_EMAIL_SUCCSESS,
//   SET_ERROR,
//   UPDATE_DATA,
// } from "./constants";
// import Http from "../../../../utils/http/http";
// import { parseObjectJson } from "../../../../utils/pareJson";
// import { toast } from "react-toastify";

// function* workerTest(action) {
//   try {
//     yield put({ type: ADDING_DATA });
//     const { payload } = action;
//     const http = new Http(payload.endpoint);
//     yield call(http.create, payload);
//     yield put({ type: ADDED_DATA });
//     yield put({ type: REFRESH });
//   } catch (err) {
//     yield put({ type: ADDED_DATA });

//     const parseData = parseObjectJson(err.response.data);
//     const errors = _.get(parseData, "error", {});

//     for (let key in errors) {
//       if (errors[key].length > 0) {
//         errors[key].forEach((errMsg) => toast.error(errMsg));
//       }
//     }

//     yield put({ type: SET_ERROR, payload: errors });
//   }
// }

// function* handlerUpdate(action) {
//   try {
//     yield put({ type: ADDING_DATA });
//     const { payload } = action;
//     const http = new Http(payload.endpoint);
//     delete payload.endpoint;
//     yield call(http.update, payload);
//     yield put({ type: ADDED_DATA });
//     yield put({ type: REFRESH });
//   } catch (err) {
//     yield put({ type: ADDED_DATA });

//     const parseData = parseObjectJson(err.response.data);
//     const errors = _.get(parseData, "error", {});

//     for (let key in errors) {
//       if (errors[key].length > 0) {
//         errors[key].forEach((errMsg) => toast.error(errMsg));
//       }
//     }

//     yield put({ type: SET_ERROR, payload: errors });
//   }
// }

// function* handlerSendMail(action) {
//   try {
//     yield put({ type: SENDING_EMAIL });
//     const { payload } = action;
//     const http = new Http(payload.endpoint);
//     delete payload.endpoint;
//     yield call(http.update, payload);
//     yield put({ type: SENDED_EMAIL });
//     yield put({ type: SEND_EMAIL_SUCCSESS });
//   } catch (err) {
//     yield put({ type: SENDED_EMAIL });
//     yield put({ type: SEND_EMAIL_ERROR, payload: "Send mail error" });
//   }
// }

function* warcherSagaProducrtList() {
  yield console.log("hello");
  //   yield takeLatest(UPDATE_DATA, handlerUpdate);
  //   yield takeLatest(SEND_EMAIL, handlerSendMail);
}

export default warcherSagaProducrtList;
