import dayjs from "dayjs";

import LineChart from "src/components/chart/LineChart";
import "./index.scss";
import Filter from "./Filter";

export default function Home() {
  const percentage = Math.floor(Math.random() * 100) + 1;

  const renderDateBlock = () => {
    return (
      <div className="red-block">
        <div className="date-container">
          <div className="single-chart">
            <svg viewBox="0 0 36 36" className="circular-chart">
              <path
                className="circle-bg"
                d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="circle"
                strokeDasharray={`${percentage}, 100`}
                d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text x="14" y="20.35" className="date">
                {dayjs().format("MM/YY")}
              </text>
              <text x="21" y="20.35" className="percentage">
                {percentage}%
              </text>
            </svg>
          </div>
        </div>
        <div className="chart-container">
          <LineChart />
        </div>
      </div>
    );
  };

  return (
    <>
      {renderDateBlock()}
      <Filter />
    </>
  );
}
