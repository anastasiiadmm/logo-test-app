import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import i18n from "i18next";
import logo from "assets/images/logo.png";
import {useTranslation} from "react-i18next";

const LIST = [
  {value: "ru", name: "RU"},
  {value: "en", name: "EN"}
];

const Navigation = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);

  const handleChange = (value, idx) => {
    i18n.changeLanguage(value);
    setActive(idx);
  };

  return (
    <div className="header__menu-navigation">

      <div className="header__menu-list">
        <div><a href="/"><img alt="logo" src={logo}/></a></div>
        <div className="header__menu-items">
          <ul>
            <li><NavLink to="/">{t("navigation.projects")}</NavLink></li>
            <li><NavLink to="/info">{t("navigation.company")}</NavLink></li>
            <li><NavLink to="/contacts">{t("navigation.contacts")}</NavLink></li>
          </ul>
        </div>
      </div>

      <div className="header__contact-list">
        <div style={{display: 'flex', paddingRight: 12}}>
          {LIST.map((item, i) => {
            return <div
              key={i}
              onClick={() => handleChange(item.value, i)}
              className={`header__navigation-links ${active === i ? "active" : ""}`}
              >
              {item.name}
            </div>
          })}
        </div>
        <div className="header__contact-links">
          <a className="header__contact-amount" href="/">Начать проект</a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;