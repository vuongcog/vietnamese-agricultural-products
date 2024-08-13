import React from 'react';
import { Bar } from 'react-chartjs-2';
import styles from './styles.module.scss';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import _ from 'lodash';
import { Button, Select } from '@chakra-ui/react';
import classNames from 'classnames';
import { calculatePercentage } from '../../../../../utils/calculate-percentages ';
import { transformNumber } from '../../../../../utils/parse-number';
import {
  exportToExcel,
  exportToExcelProduct,
} from '../../../../../utils/export-excel';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const displayValuePlugin = {
  id: 'displayValuePlugin',
  afterDatasetsDraw(chart) {
    const { ctx, data } = chart;
    chart.data.datasets.forEach((dataset, i) => {
      const meta = chart.getDatasetMeta(i);
      meta.data.forEach((bar, index) => {
        const value = dataset.data[index];
        ctx.save();
        ctx.font = 'bold 11px Arial';
        ctx.fillStyle = '#000';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';
        ctx.fillText(transformNumber(value), bar.x, bar.y - 5);
        ctx.restore();
      });
    });
  },
};

const ChartCategory = ({
  report_product,
  onChangeSelectedProduct,
  categories,
  onChangeSelectedProductCategoryPeriod,
  onChangeSelectedProductCategoryLimit,
  selectedCategory,
}) => {
  if (_.isEmpty(report_product)) return null;
  if (_.isEmpty(categories)) return null;
  const colors = [
    '#36A2EB',
    '#FFCE56',
    '#4BC0C0',
    '#9966FF',
    '#FF9F40',
    '#E74C3C',
    '#3498DB',
    '#F1C40F',
    '#1ABC9C',
    '#8E44AD',
    '#D35400',
    '#C0392B',
    '#2980B9',
    '#F39C12',
    '#16A085',
    '#9B59B6',
    '#E67E22',
    '#ECF0F1',
    '#95A5A6',
    '#D35400',
  ];

  const newDataProduct = report_product.product_revenue.map((item, index) => ({
    label: item.product_name,
    backgroundColor: colors[index],
    borderColor: colors[index],
    borderWidth: 1,
    data: [transformNumber(item.revenue)],
  }));

  const data = {
    labels: ['Sản phẩm'],
    datasets: [
      {
        label: 'Tổng doanh thu',
        data: [transformNumber(report_product.total_revenue)],
        backgroundColor: '#e72f0a',
        borderColor: '#e72f0a',
        borderWidth: 1,
      },
      ...newDataProduct,
    ],
  };

  const options = {
    responsive: true,
    layout: {
      padding: {
        top: 20,
        bottom: 20,
      },
    },
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            size: 13,
            family: 'Arial, sans-serif',
            weight: 'bold',
          },
          color: '#333',
          padding: 20,
        },
      },
      title: {
        display: true,
        text: 'Thống kê doanh thu sản phẩm theo danh mục',
        font: {
          size: 28,
          family: 'Arial, sans-serif',
          weight: 'bold',
        },
        color: '#333',
        padding: {
          top: 10,
          bottom: 30,
        },
      },
      tooltip: {
        bodyFont: {
          size: 16,
          family: 'Arial, sans-serif',
        },
        titleFont: {
          size: 16,
          family: 'Arial, sans-serif',
          weight: 'bold',
        },
        backgroundColor: 'rgba(0,0,0,0.7)',
        titleColor: '#fff',
        bodyColor: '#fff',
      },
    },

    scales: {
      x: {
        ticks: {
          font: {
            size: 16,
            family: 'Arial, sans-serif',
            weight: 'bold',
          },
          color: '#333',
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 12,
            weight: 'bold',
            family: 'Arial, sans-serif',
          },
          color: '#333',
        },
        title: {
          display: true,
          text: 'Doanh thu (VNĐ)',
          font: {
            size: 16,
            family: 'Arial, sans-serif',
            weight: 'bold',
          },
          color: '#333',
        },
      },
    },
  };

  return (
    <div className="flex w-full h-full flex-col gap-3">
      <Bar data={data} options={options} plugins={[displayValuePlugin]} />

      <div className={styles[`container-infor`]}>
        <div className={styles.layout_select}>
          <Button
            onClick={() => {
              exportToExcelProduct(report_product);
            }}
            width={'100%'}
            color={'black'}
            fontWeight={400}
          >
            Xuất báo cáo
          </Button>
          <Select
            defaultValue={'yearly'}
            onChange={e => {
              onChangeSelectedProductCategoryPeriod(e.target.value);
            }}
          >
            <option value={'daily'}>Trong ngày</option>
            <option value={'weekly'}>Trong tuần</option>
            <option value={'monthly'}>Trong tháng</option>
            <option value={'yearly'}>Trong năm</option>
          </Select>

          <Select
            defaultValue={10}
            onChange={e => {
              onChangeSelectedProductCategoryLimit(e.target.value);
            }}
          >
            <option value={1}>Số lượng : 1</option>
            <option value={5}>Số lượng : 5</option>
            <option value={10}>Số lượng : 10</option>
            <option value={15}>Số lượng : 15</option>
            <option value={20}>Số lượng : 20</option>
          </Select>

          <Select
            defaultValue={selectedCategory}
            onChange={e => {
              console.log(e.target.value);
              onChangeSelectedProduct(e.target.value);
            }}
          >
            {categories.map(item => (
              <option key={item.id} value={item.id}>
                {item.category_name}
              </option>
            ))}
          </Select>
        </div>
        <div className={styles.layout}>
          <div className={styles[`container-box`]}>
            <div
              style={{ backgroundColor: '#e72f0a' }}
              className={classNames(styles.box)}
            ></div>
            <span>Tổng doanh thu: 100%</span>
          </div>
          {report_product.product_revenue.map((item, index) => (
            <div key={item.revenue} className={styles[`container-box`]}>
              <div
                style={{ backgroundColor: colors[index] }}
                className={classNames(styles.box)}
              ></div>
              <span>
                {item.product_name}:{' '}
                {calculatePercentage(
                  item.revenue,
                  report_product.total_revenue
                )}
                %
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChartCategory;
