import { Link, useNavigate, useLocation } from "react-router-dom";
import cx from "classnames";

import checkListIcon from "/images/check_list.png";
import challengeIcon from "/images/icon_challenge.png";
import infoIcon from "/images/icon_info.png";
import logoIcon from "/images/logo.png";

import "./header.scss";
import "./navbar.scss";
import Navbar from "./Navbar";

const listNav = [
  {
    icon: checkListIcon,
    name: "自分の記録",
    href: "/record",
  },
  {
    icon: challengeIcon,
    name: "チャレンジ",
    href: "#",
  },
  {
    icon: infoIcon,
    name: "お知らせ",
    href: "#",
  },
];

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="navigation">
      <img
        className="logo"
        src={logoIcon}
        alt="logo"
        onClick={() => navigate("/")}
      />
      <div className={"navigation-menu"}>
        <ul className="header-ul">
          {listNav.map((nav) => (
            <li
              key={nav.name}
              className={cx(
                "header-li",
                location.pathname === nav.href && "active"
              )}
            >
              <img src={nav.icon} alt={nav.name} />
              <Link to={nav.href}>{nav.name}</Link>
            </li>
          ))}
        </ul>
        <Navbar />
      </div>
    </nav>
  );
}
