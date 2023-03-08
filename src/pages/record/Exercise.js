import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { faker } from "@faker-js/faker";

import "./index.scss";

const listItem = [
  {
    time: faker.datatype.number({ min: 0, max: 60 }),
    name: "家事全般（立位・軽い）",
    cal: faker.datatype.number({ min: 10, max: 500 }),
  },
  {
    time: faker.datatype.number({ min: 0, max: 60 }),
    name: "家事全般（立位・軽い）",
    cal: faker.datatype.number({ min: 10, max: 500 }),
  },
  {
    time: faker.datatype.number({ min: 0, max: 60 }),
    name: "家事全般（立位・軽い）",
    cal: faker.datatype.number({ min: 10, max: 500 }),
  },
  {
    time: faker.datatype.number({ min: 0, max: 60 }),
    name: "家事全般（立位・軽い）",
    cal: faker.datatype.number({ min: 10, max: 500 }),
  },
  {
    time: faker.datatype.number({ min: 0, max: 60 }),
    name: "家事全般（立位・軽い）",
    cal: faker.datatype.number({ min: 10, max: 500 }),
  },
  {
    time: faker.datatype.number({ min: 0, max: 60 }),
    name: "家事全般（立位・軽い）",
    cal: faker.datatype.number({ min: 10, max: 500 }),
  },
  {
    time: faker.datatype.number({ min: 0, max: 60 }),
    name: "家事全般（立位・軽い）",
    cal: faker.datatype.number({ min: 10, max: 500 }),
  },
  {
    time: faker.datatype.number({ min: 0, max: 60 }),
    name: "家事全般（立位・軽い）",
    cal: faker.datatype.number({ min: 10, max: 500 }),
  },
  {
    time: faker.datatype.number({ min: 0, max: 60 }),
    name: "家事全般（立位・軽い）",
    cal: faker.datatype.number({ min: 10, max: 500 }),
  },
  {
    time: faker.datatype.number({ min: 0, max: 60 }),
    name: "家事全般（立位・軽い）",
    cal: faker.datatype.number({ min: 10, max: 500 }),
  },
  {
    time: faker.datatype.number({ min: 0, max: 60 }),
    name: "家事全般（立位・軽い）",
    cal: faker.datatype.number({ min: 10, max: 500 }),
  },
  {
    time: faker.datatype.number({ min: 0, max: 60 }),
    name: "家事全般（立位・軽い）",
    cal: faker.datatype.number({ min: 10, max: 500 }),
  },
];

function Exercise() {
  return (
    <div className="chart record">
      <div className="chart-header">
        <div className="name">MY EXERCISE</div>
        <div className="title">{dayjs().format("YYYY.MM.DD")}</div>
      </div>
      <div className="record-container">
        {listItem.map((item, index) => (
          <div className="record-holder" key={`record ${index}`}>
            <div className="info-holder">
              <p className="name">{item.name}</p>
              <p className="cal">{item.cal}kcal</p>
            </div>
            <div className="min">{item.time} min</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Exercise;
