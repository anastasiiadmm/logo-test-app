import React from 'react';
import "assets/scss/_content.scss";
import menu_dots from "assets/images/menu_dots.png";

const SideBar = ({children}) => {
  return (
    <div className="content">
      <div className="content__menu_list">
        <div className="content__menu">
          <img className="content__menu-dots" src={menu_dots} alt="menu_dots"/>
          <ul className="content__submenu">
            <li><a href="#">Проекты</a></li>
            <li><a href="#">О компании</a></li>
            <li><a href="#">Контакты</a></li>
          </ul>
        </div>
      </div>
      {children}
    </div>
  );
};

export default SideBar;