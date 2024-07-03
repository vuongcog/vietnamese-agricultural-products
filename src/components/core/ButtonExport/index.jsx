import React from "react";
import { exportToExcel } from "../../../utils/export-excel";
import PropTypes from "../../../utils/prop-types";

const ButtonExport = ({ data, fileName }) => {
  const handleExport = () => {
    exportToExcel(data, fileName);
  };
  return <button onClick={handleExport}>Export Excel</button>;
};
ButtonExport.propTypes = {
  data: PropTypes.object,
  fileName: PropTypes.string,
};
export default ButtonExport;
