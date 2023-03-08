import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./navbar.scss";

const listExpanded = [
  {
    name: "自分の記録",
    href: "/record",
  },
  {
    name: "体重グラフ",
    href: "#",
  },
  {
    name: "目標",
    href: "#",
  },
  {
    name: "選択中のコース",
    href: "#",
  },
  {
    name: "コラム一覧",
    href: "/health",
  },
  {
    name: "設定",
    href: "#",
  },
];

export default function Navbar() {
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      inputRef.current.checked = false;
    };
  });

  return (
    <div className="offcanvas-menu">
      <input ref={inputRef} type="checkbox" id="toogle-menu" />
      <label htmlFor="toogle-menu">
        <span></span>
      </label>

      <nav>
        <ul>
          {listExpanded.map((nav) => (
            <li key={nav.name} onClick={() => navigate(nav.href)}>
              <a>{nav.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
