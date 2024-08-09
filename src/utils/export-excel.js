import { nanoid } from 'nanoid';
import React from 'react';
import * as XLSX from 'xlsx';
import { transformNumber } from './parse-number';

export const exportToExcel = data => {
  const totalUsers = data.total_users;
  const users = [
    { type: 'Tổng', count: data.total_users },
    { type: 'Admin', count: data.admin },
    { type: 'Managers', count: data.managers },
    { type: 'Staff', count: data.staff },
    { type: 'Customers', count: data.customers },
  ];

  const worksheetData = users.map(user => ({
    ['Vai trò']: user.type,
    ['Số lượng']: user.count,
    ['Tỉ lệ']: ((user.count / totalUsers) * 100).toFixed(2) + '%',
  }));

  const worksheet = XLSX.utils.json_to_sheet(worksheetData);

  worksheet['!cols'] = [{ wch: 20 }, { wch: 15 }, { wch: 10 }];
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Users Report');
  XLSX.writeFile(workbook, `user_report${nanoid()}.xlsx`);
};
export const exportToExcelProduct = data => {
  const totalQuantity = data.product_revenue.reduce(
    (cal, item) => cal + item.quantity,
    0
  );

  let products = data.product_revenue.map(item => ({
    name: item.product_name,
    quantity: item.quantity,
    revenue: item.revenue,
  }));
  products = [
    { name: 'Tổng quát', quantity: totalQuantity, revenue: data.total_revenue },
    ...products,
  ];
  const workSheetData = products.map(item => ({
    'Tên sản phẩm': item.name,
    'Doanh thu': transformNumber(item.revenue),
    'Số lượng': item.quantity,
    'Tỉ lệ doanh thu':
      ((item.revenue / data.total_revenue) * 100).toFixed(2) + '%',
    'Tỉ lệ sản phẩm': ((item.quantity / totalQuantity) * 100).toFixed(2) + '%',
  }));
  const worksheet = XLSX.utils.json_to_sheet(workSheetData);
  worksheet['!cols'] = [
    { wch: 20 },
    { wch: 15 },
    { wch: 10 },
    { wch: 20 },
    { wch: 20 },
  ];
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Users Report');
  XLSX.writeFile(workbook, `product_report${nanoid()}.xlsx`);
};
