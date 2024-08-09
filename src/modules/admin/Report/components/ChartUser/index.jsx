import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import styles from './styles.module.scss';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  LinearScale,
  CategoryScale,
  RadialLinearScale,
  PointElement,
  LineElement,
  BarElement,
  DoughnutController,
  PieController,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import classNames from 'classnames';
import { calculatePercentage } from '../../../../../utils/calculate-percentages ';
import { Button, Select } from '@chakra-ui/react';
import { exportToExcel } from '../../../../../utils/export-excel';

// Đăng ký các thành phần của Chart.js và plugin datalabels
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title,
  LinearScale,
  CategoryScale,
  RadialLinearScale,
  PointElement,
  LineElement,
  BarElement,
  DoughnutController,
  PieController,
  ChartDataLabels
);

const UserDistributionChart = ({ users, onChangeSeletedUser }) => {
  if (_.isEmpty(users)) {
    return null;
  }
  const data = {
    labels: ['Admin', 'Quản lý', 'Nhân viên', 'Khách hàng'],
    datasets: [
      {
        data: [users.admin, users.managers, users.staff, users.customers],
        backgroundColor: ['#FFD700', '#ADFF2F', '#ec2805', '#17aae3'],
        hoverBackgroundColor: ['#FFC700', '#9FFF30', '#FF5247', '#76CEEB'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    cutout: '50%', // Tạo khoảng trống ở giữa
    plugins: {
      legend: {
        position: 'top',
        labels: {
          boxWidth: 20,
          padding: 15,
          font: {
            size: 12,
            // family: 'Arial, sans-serif',
            // weight: '',
          },
          color: '#333',
        },
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw} người`;
          },
        },
      },
      datalabels: {
        color: '#fff',
        anchor: 'center',
        align: 'center',
        offset: 0,
        borderWidth: 0,
        borderColor: '#fff',
        borderRadius: 3,
        // backgroundColor: context => {
        //   return context.dataset.backgroundColor[context.dataIndex];
        // },
        font: {
          weight: 'bold',
          size: 14,
        },
        formatter: (value, context) =>
          `${calculatePercentage(value, users.total_users)}%`,
      },
    },
  };
  return (
    <div className="flex items-center gap-3">
      <div className="w-[30%]">
        <h2 style={{ textAlign: 'center' }}>Thống kê người dùng</h2>
        <Doughnut data={data} options={options} />
      </div>
      <div className={styles[`container-infor`]}>
        <Select defaultValue={'yearly'} onChange={onChangeSeletedUser}>
          <option value={'daily'}>Trong ngày</option>
          <option value={'weekly'}>Trong tuần</option>
          <option value={'monthly'}>Trong tháng</option>
          <option value={'yearly'}>Trong năm</option>
        </Select>
        <Button onClick={() => [exportToExcel(users)]}>Xuất báo cáo</Button>
        <div className={styles[`container-box`]}>
          <div className={classNames(styles.box, 'bg-slate-600')}></div>
          <span>Tổng người dùng - {users.total_users}</span>
        </div>
        <div className={styles[`container-box`]}>
          <div className={classNames(styles.box, 'bg-[#FFD700]')}></div>
          <span>Admin - {users.admin}</span>
        </div>
        <div className={styles[`container-box`]}>
          <div className={classNames(styles.box, 'bg-[#ADFF2F]')}></div>
          <span>Quản lý - {users.managers}</span>
        </div>
        <div className={styles[`container-box`]}>
          <div className={classNames(styles.box, 'bg-[#ec2805]')}></div>
          <span>Nhân viên - {users.staff}</span>
        </div>
        <div className={styles[`container-box`]}>
          <div className={classNames(styles.box, 'bg-[#17aae3]')}></div>
          <span>Khách hàng - {users.customers}</span>
        </div>
      </div>
    </div>
  );
};

export default UserDistributionChart;
