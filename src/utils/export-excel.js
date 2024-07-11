import { toast } from 'react-toastify';
import axios from 'axios';
import ExcelJS from 'exceljs';
import Cookies from 'js-cookie';

export const exportToExcel = async (data, fileName) => {
  try {
    if (!Array.isArray(data)) {
      console.error('Data is not an array');
      return;
    }

    const token = Cookies.get('accsessToken');

    const loadImage = async url => {
      try {
        const response = await axios.get(url, {
          responseType: 'arraybuffer',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const imageData = Buffer.from(response.data, 'binary');
        console.log(imageData);
        return imageData;
      } catch (error) {
        console.warn(`Failed to load image from ${url}`, error);
        return null;
      }
    };

    const imageCache = {};

    const imagePromises = [];
    const rowsWithImageUrls = data.map(row => {
      const rowWithImages = { ...row };
      for (const key in row) {
        if (typeof row[key] === 'string' && row[key].startsWith('http://')) {
          if (!imageCache[row[key]]) {
            const promise = loadImage(row[key]).then(imageData => {
              imageCache[row[key]] = imageData;
              rowWithImages[key] = imageData || row[key];
            });
            imagePromises.push(promise);
          } else {
            rowWithImages[key] = imageCache[row[key]];
          }
        }
      }
      return rowWithImages;
    });

    await Promise.all(imagePromises);

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Sheet1');

    rowsWithImageUrls.forEach(row => {
      const rowValues = [];
      Object.keys(row).forEach((key, colIndex) => {
        rowValues[colIndex + 1] = row[key];
      });
      worksheet.addRow(rowValues);
    });

    await Promise.all(
      rowsWithImageUrls.map(async (row, rowIndex) => {
        for (const key in row) {
          if (imageCache[row[key]]) {
            const imageId = workbook.addImage({
              buffer: imageCache[row[key]],
              extension: 'jpeg',
            });
            worksheet.addImage(imageId, {
              tl: { col: Object.keys(row).indexOf(key), row: rowIndex + 1 },
              ext: { width: 100, height: 100 },
            });
          }
        }
      })
    );

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: 'application/octet-stream' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${fileName}.xlsx`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast.success('Excel file created successfully!', {
      autoClose: 500,
      position: 'top-center',
    });
  } catch (error) {
    console.error('Error:', error);
    toast.error('Failed to export data to Excel: ' + error.message, {
      autoClose: 500,
      position: 'top-center',
    });
  }
};
