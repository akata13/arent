import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import scrollIcon from "/images/scroll.png";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const AppLayout = React.memo(({ children }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <>
      <Header />
      <div className="layout-container">
        <Outlet />
        {showButton && (
          <img
            src={scrollIcon}
            alt="back-to-top"
            onClick={scrollToTop}
            className="back-to-top"
          />
        )}
      </div>
      <Footer />
    </>
  );
});

export default AppLayout;
