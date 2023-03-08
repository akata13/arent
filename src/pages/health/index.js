import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { faker } from "@faker-js/faker";

import item01Img from "/images/column-1.jpg";
import item02Img from "/images/column-2.jpg";
import item03Img from "/images/column-3.jpg";
import item04Img from "/images/column-4.jpg";
import item05Img from "/images/column-5.jpg";
import item06Img from "/images/column-6.jpg";
import item07Img from "/images/column-7.jpg";
import item08Img from "/images/column-8.jpg";

import "./index.scss";

const listFilter = [
  {
    title: "オススメ",
    name: "RECOMMENDED COLUMN",
  },
  {
    title: "ダイエット",
    name: "RECOMMENDED DIET",
  },
  {
    title: "美容",
    name: "RECOMMENDED BEAUTY",
  },
  {
    title: "健康",
    name: "RECOMMENDED HEALTH",
  },
];

let listItem = [
  {
    icon: item01Img,
    name: "オススメ",
    date: dayjs().format("YYYY.MM.DD  HH:mm"),
    tag: "#魚料理  #和食  #DHA",
    content: faker.random.words(20),
  },
  {
    icon: item02Img,
    name: "ダイエット",
    date: dayjs().format("YYYY.MM.DD  HH:mm"),
    tag: "#魚料理  #和食  #DHA",
    content: faker.random.words(20),
  },
  {
    icon: item03Img,
    name: "美容",
    date: dayjs().format("YYYY.MM.DD  HH:mm"),
    tag: "#魚料理  #和食  #DHA",
    content: faker.random.words(20),
  },
  {
    icon: item04Img,
    name: "健康",
    date: dayjs().format("YYYY.MM.DD  HH:mm"),
    tag: "#魚料理  #和食  #DHA",
    content: faker.random.words(20),
  },
  {
    icon: item05Img,
    name: "オススメ",
    date: dayjs().format("YYYY.MM.DD  HH:mm"),
    tag: "#魚料理  #和食  #DHA",
    content: faker.random.words(20),
  },
  {
    icon: item06Img,
    name: "ダイエット",
    date: dayjs().format("YYYY.MM.DD  HH:mm"),
    tag: "#魚料理  #和食  #DHA",
    content: faker.random.words(20),
  },
  {
    icon: item07Img,
    name: "美容",
    date: dayjs().format("YYYY.MM.DD  HH:mm"),
    tag: "#魚料理  #和食  #DHA",
    content: faker.random.words(20),
  },
  {
    icon: item08Img,
    name: "健康",
    date: dayjs().format("YYYY.MM.DD  HH:mm"),
    tag: "#魚料理  #和食  #DHA",
    content: faker.random.words(20),
  },
];

export default function Health() {
  const [selected, setSelected] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [listFiltered, setListFiltered] = useState([]);
  const [listDisplay, setListDisplay] = useState(listItem);

  useEffect(() => {
    const listFilter = listDisplay.filter((item) => item.name === selected);
    setListFiltered(listFilter);
  }, [listDisplay]);

  const handleFilter = (type) => {
    setSelected(type != selected ? type : false);
    const listFilter = listDisplay.filter((item) => item.name === type);
    setListFiltered(listFilter);
  };

  const handleClick = () => {
    if (listDisplay.length < 20) {
      setListDisplay(listDisplay.concat(listItem));
    } else {
      setHasMore(false);
    }
  };

  const renderItem = (items) => {
    return items.map((item, index) => (
      <div key={`${item.name} + ${index}`} className="item-holder">
        <div className="img-container">
          <img src={item.icon} alt={item.name} />
          <div className="info">{item.date}</div>
        </div>
        <div className="content ellipsis">{item.content}</div>
        <div className="tag">{item.tag}</div>
      </div>
    ));
  };

  return (
    <div className="container">
      <div className="health-filter-container">
        {listFilter.map((item) => (
          <div
            key={item.name}
            className="filter-holder"
            onClick={() => handleFilter(item.title)}
          >
            <p>{item.name}</p>
            <span></span>
            <p className="title">{item.title}</p>
          </div>
        ))}
      </div>
      <div className="health-item-container">
        {selected ? renderItem(listFiltered) : renderItem(listDisplay)}
      </div>
      {hasMore && (
        <div className="button-container">
          <button type="button" onClick={handleClick} className="view-more-btn">
            記録をもっと見る
          </button>
        </div>
      )}
    </div>
  );
}
