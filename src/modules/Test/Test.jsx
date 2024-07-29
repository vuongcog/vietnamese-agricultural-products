import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart,
  LineController,
  LinearScale,
  PointElement,
  LineElement,
  CategoryScale,
} from 'chart.js';

Chart.register(
  LineController,
  LinearScale,
  PointElement,
  LineElement,
  CategoryScale
);

const lineChartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Sales',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
  ],
};

const ChartComponent = () => (
  <div>
    <h2>Line Chart Example</h2>
    <Line data={lineChartData} />
  </div>
);

export default ChartComponent;
