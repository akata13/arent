import React, { useEffect, useState } from "react";
import dayjs from "dayjs";

import knifeIcon from "/images/knife.png";
import trashIcon from "/images/trash.png";
import item01Img from "/images/m01.jpg";
import item02Img from "/images/m02.jpg";
import item03Img from "/images/m03.jpg";
import item04Img from "/images/l03.jpg";

const listFilter = [
  {
    icon: knifeIcon,
    name: "Morning",
  },
  {
    icon: knifeIcon,
    name: "Lunch",
  },
  {
    icon: knifeIcon,
    name: "Dinner",
  },
  {
    icon: trashIcon,
    name: "Snack",
  },
];

let listItem = [
  {
    icon: item01Img,
    name: "Morning",
    date: dayjs().format("DD.MM"),
  },
  {
    icon: item02Img,
    name: "Lunch",
    date: dayjs().format("DD.MM"),
  },
  {
    icon: item03Img,
    name: "Dinner",
    date: dayjs().format("DD.MM"),
  },
  {
    icon: item04Img,
    name: "Snack",
    date: dayjs().format("DD.MM"),
  },
  {
    icon: item01Img,
    name: "Morning",
    date: dayjs().format("DD.MM"),
  },
  {
    icon: item02Img,
    name: "Lunch",
    date: dayjs().format("DD.MM"),
  },
  {
    icon: item03Img,
    name: "Dinner",
    date: dayjs().format("DD.MM"),
  },
  {
    icon: item04Img,
    name: "Snack",
    date: dayjs().format("DD.MM"),
  },
];

function Filter() {
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
        <img src={item.icon} alt={item.name} />
        <div className="info">
          {item.date} {item.name}
        </div>
      </div>
    ));
  };

  return (
    <>
      <div className="filter-container">
        {listFilter.map((item) => (
          <div
            key={item.name}
            className="filter-holder"
            onClick={() => handleFilter(item.name)}
          >
            <img src={item.icon} alt={item.name} /> <p>{item.name}</p>
          </div>
        ))}
      </div>
      <div className="item-container">
        {selected ? renderItem(listFiltered) : renderItem(listDisplay)}
      </div>
      {hasMore && (
        <div className="button-container">
          <button type="button" onClick={handleClick} className="view-more-btn">
            記録をもっと見る
          </button>
        </div>
      )}
    </>
  );
}

export default Filter;
