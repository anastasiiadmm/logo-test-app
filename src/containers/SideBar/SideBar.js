import React from 'react';
import "assets/scss/_content.scss";
import menu_dots from "assets/images/menu_dots.png";

const SideBar = ({children}) => {
  return (
    <div className="content">
      <div className="content__menu">
        <img className="content__menu-dots" src={menu_dots} alt="menu_dots" />
      </div>
      {children}
    </div>
  );
};

export default SideBar;