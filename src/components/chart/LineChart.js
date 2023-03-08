import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import dayjs from "dayjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ filter }) => {
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      x: {
        ticks: {
          color: "#FFF",
        },
        grid: {
          color: "#777",
        },
        border: {
          display: false,
        },
      },
    },
  };

  const labels = [];
  let currentMonth = dayjs().month();
  for (let i = 1; i <= 12; i++) {
    if (currentMonth + i > 12) currentMonth -= 12;
    labels.push(`${currentMonth + i}月`);
  }

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: "#FFCC21",
        backgroundColor: "#FFCC21",
      },
      {
        label: "Dataset 2",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: "#8FE9D0",
        backgroundColor: "#8FE9D0",
      },
    ],
  };

  return (
    <div className="chart-holder">
      <Line options={options} data={data} />
    </div>
  );
};

export default LineChart;
