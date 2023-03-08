import React from "react";

import "./Footer.scss";

const listFooter = [
  {
    name: "会員登録",
  },
  {
    name: "運営会社",
  },
  {
    name: "利用規約",
  },
  {
    name: "個人情報の取扱について",
  },
  {
    name: "特定商取引法に基づく表記",
  },
  {
    name: "お問い合わせ",
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {listFooter.map((footer) => (
          <span key={footer.name}>{footer.name}</span>
        ))}
      </div>
    </footer>
  );
}
