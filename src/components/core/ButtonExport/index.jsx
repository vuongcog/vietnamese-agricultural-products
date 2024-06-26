import React from "react";
import { exportToExcel } from "../../../utils/export-excel";

const ButtonExport = ({ data, fileName }) => {
  const handleExport = () => {
    exportToExcel(data, fileName);
  };
  return <button onClick={handleExport}>Export Excel</button>;
};

export default ButtonExport;
