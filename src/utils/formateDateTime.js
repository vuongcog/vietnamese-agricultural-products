import moment from "moment/moment";

function formatDateTime(dateTimeString) {
  // Định dạng cụ thể của chuỗi ngày tháng để Moment.js hiểu đúng
  return moment(dateTimeString, "YYYY-MM-DDTHH:mm:ss:SSSSSSSZ").format(
    "DD/MM/YYYY HH:mm:ss"
  );
}

export default formatDateTime;
