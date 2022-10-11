import React, {useState} from 'react';
import hamburger_menu from "assets/images/hamburger_menu.png";
import logo from "assets/images/logo.png";
import close from "assets/images/close.png";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <img
      className="header__menu-burger"
      alt="menu"
      src={hamburger_menu}
      onClick={() => setOpen(!open)}
    />
  );

  const closeIcon = (
    <img
      className="header__menu-burger"
      alt="menu"
      src={close}
      onClick={() => setOpen(!open)}
    />
  )

  return (
    <div className="header__menu-mobile-navigation">
      <img alt="logo" src={logo} />
      {open ? closeIcon : hamburgerIcon}
      {open && (
        <div className="header__menu-mobile-list">
          <ul>
            <li><a href="/">Проекты</a></li>
            <li><a href="/">О компании</a></li>
            <li><a href="/">Контакты</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileNavigation;