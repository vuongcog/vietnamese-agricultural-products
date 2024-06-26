import { toast } from "react-toastify";
import * as XLSX from "xlsx";

export const exportToExcel = (data, fileName) => {
  try {
    if (!Array.isArray(data)) {
      console.error("Data is not an array");
      return;
    }

    const worksheet = XLSX.utils.json_to_sheet(data);

    const maxLengths = {};
    data.forEach((row) => {
      Object.keys(row).forEach((key) => {
        const length = row[key] ? row[key].toString().length : 10;
        maxLengths[key] = maxLengths[key] >= length ? maxLengths[key] : length;
      });
    });

    worksheet["!cols"] = Object.keys(maxLengths).map((key) => ({
      wch: maxLengths[key],
    }));

    const range = XLSX.utils.decode_range(worksheet["!ref"]);
    for (let R = range.s.r; R <= range.e.r; ++R) {
      for (let C = range.s.c; C <= range.e.c; ++C) {
        const cell_address = { c: C, r: R };
        const cell_ref = XLSX.utils.encode_cell(cell_address);
        if (!worksheet[cell_ref]) continue;
        worksheet[cell_ref].s = {
          font: {
            name: "Arial",
            sz: 12,
            bold: R === 0 ? true : false,
            color: { rgb: "000000" },
          },
          alignment: {
            vertical: "center",
            horizontal: "center",
          },
          fill: {
            fgColor: { rgb: R === 0 ? "FFFF00" : "FFFFFF" },
          },
          border: {
            top: { style: "thin", color: { rgb: "000000" } },
            bottom: { style: "thin", color: { rgb: "000000" } },
            left: { style: "thin", color: { rgb: "000000" } },
            right: { style: "thin", color: { rgb: "000000" } },
          },
        };
      }
    }

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
    toast.success("Excel file created successfully!", {
      toastId: "successToast",
      containerId: "export-excel",
      autoClose: 1000,
    });
  } catch (error) {
    toast.error("Failed to export data to Excel: " + error.message, {
      toastId: "errorToast",
      containerId: "export-excel",
      autoClose: 1000,
    });
  }
};
