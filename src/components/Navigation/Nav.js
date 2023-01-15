import React, { useEffect, useState } from "react";
import classes from "./Nav.module.css";

const Nav = () => {
  const [showHandle, setShowHandle] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowHandle(true);
      } else {
        setShowHandle(false);
      }
      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, []);

  return (
    <div className={`${classes["nav"]} ${showHandle && classes["nav__black"]}`}>
      <img
        className={classes["nav__logo"]}
        alt="Netflix Logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png?20190206123158"
      />
      <img
        className={classes["nav__avatar"]}
        alt="Netflix Avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
      />
    </div>
  );
};

export default Nav;
