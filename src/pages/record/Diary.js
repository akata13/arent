import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { faker } from "@faker-js/faker";

import "./index.scss";

const listItem = [
  {
    text: faker.random.words(50),
    date: dayjs().format("YYYY.MM.DD"),
    hour: dayjs().format("HH:m"),
  },
  {
    text: faker.random.words(50),
    date: dayjs().format("YYYY.MM.DD"),
    hour: dayjs().format("HH:m"),
  },
  {
    text: faker.random.words(50),
    date: dayjs().format("YYYY.MM.DD"),
    hour: dayjs().format("HH:m"),
  },
  {
    text: faker.random.words(50),
    date: dayjs().format("YYYY.MM.DD"),
    hour: dayjs().format("HH:m"),
  },
  {
    text: faker.random.words(50),
    date: dayjs().format("YYYY.MM.DD"),
    hour: dayjs().format("HH:m"),
  },
  {
    text: faker.random.words(50),
    date: dayjs().format("YYYY.MM.DD"),
    hour: dayjs().format("HH:m"),
  },
  {
    text: faker.random.words(50),
    date: dayjs().format("YYYY.MM.DD"),
    hour: dayjs().format("HH:m"),
  },
  {
    text: faker.random.words(50),
    date: dayjs().format("YYYY.MM.DD"),
    hour: dayjs().format("HH:m"),
  },
];

function Diary() {
  const [hasMore, setHasMore] = useState(true);
  const [listDisplay, setListDisplay] = useState(listItem);

  const handleClick = () => {
    if (listDisplay.length < 20) {
      setListDisplay(listDisplay.concat(listItem));
    } else {
      setHasMore(false);
    }
  };

  return (
    <>
      <p className="block-title">MY DIARY</p>
      <div className="diary-container">
        {listDisplay.map((item, index) => (
          <div className="diary-holder" key={`record ${index}`}>
            <p>{item.date}</p>
            <p>{item.hour}</p>
            <p className="ellipsis content">{item.text}</p>
          </div>
        ))}
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

export default Diary;
