import React from 'react';
import logo from "assets/images/logo.png";

const Navigation = () => {
  return (
    <div className="header__menu-navigation">

      <div className="header__menu-list">
        <div><a href="/"><img alt="logo" src={logo}/></a></div>
        <div className="header__menu-items">
          <ul>
            <li><a href="/">Проекты</a></li>
            <li><a href="/">О компании</a></li>
            <li><a href="/">Контакты</a></li>
          </ul>
        </div>
      </div>

      <div className="header__contact-list">
        <div>
          <a className="header__navigation-links" href="/">RU</a>
          <a className="header__navigation-links" href="/">EN</a>
        </div>
        <div className="header__contact-links">
          <a className="header__contact-amount" href="/">Начать проект</a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;