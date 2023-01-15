import React from "react";
import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={classes["nav"]}>
      <img
        className={classes["nav__logo"]}
        alt="Netflix Logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png?20190206123158"
      />
    </div>
  );
};

export default Nav;
