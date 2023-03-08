import React, { useRef, useState } from "react";
import dayjs from "dayjs";
import cx from "classnames";

import LineChart from "src/components/chart/LineChart";
import item01Img from "/images/MyRecommend-1.jpg";
import item02Img from "/images/MyRecommend-2.jpg";
import item03Img from "/images/MyRecommend-3.jpg";
import "./index.scss";
import Exercise from "./Exercise";
import Diary from "./Diary";

const listFilter = [
  {
    name: "日",
  },
  {
    name: "週",
  },
  {
    name: "月",
  },
  {
    name: "年",
  },
];

export default function Record() {
  const [selected, setSelected] = useState("年");
  const chartRef = useRef(null);
  const exerciseRef = useRef(null);
  const diaryRef = useRef(null);

  const listNav = [
    {
      name: "body record",
      title: "自分のカラダの記録",
      id: "record",
      image: item01Img,
      ref: chartRef,
    },
    {
      name: "my exercise",
      title: "自分の運動の記録",
      id: "exercise",
      image: item02Img,
      ref: exerciseRef,
    },
    {
      name: "my diary",
      title: "自分の日記",
      id: "diary",
      image: item03Img,
      ref: diaryRef,
    },
  ];

  const renderNavBlock = () => {
    return (
      <div className="nav-container">
        {listNav.map((item) => (
          <div
            className="nav-holder"
            key={item.name}
            onClick={() => scrollTo(item.ref)}
          >
            <div
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
                mixBlendMode: "luminosity",
                opacity: 0.25,
                position: "absolute",
              }}
            ></div>
            <div className="content">
              <p>{item.name}</p>
              <div className="title">{item.title}</div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const scrollTo = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="container">
      {renderNavBlock()}

      <div ref={chartRef} className="chart">
        <div className="chart-header">
          <div className="name">BODY RECORD</div>
          <div className="title">{dayjs().format("YYYY.MM.DD")}</div>
        </div>
        <LineChart filter={selected} />
        <div className="chart-filter">
          {listFilter.map((item) => (
            <div
              key={item.name}
              onClick={() => setSelected(item.name)}
              className={cx("filter-item", selected === item.name && "active")}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
      <div ref={exerciseRef}>
        <Exercise />
      </div>
      <div ref={diaryRef}>
        <Diary />
      </div>
    </div>
  );
}
