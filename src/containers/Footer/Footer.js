import React from 'react';
import logo from "assets/images/logo-white.png";
import telegram from "assets/images/telegram.svg";
import whatsapp from "assets/images/whatsapp.svg";
import 'assets/scss/_footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__inner-wrapper">
        <div className="footer__main-info">
          <div className="footer__logo"><a href="/"><img alt="logo" src={logo}/></a></div>
          <div className="footer__main-inner-info">
            <div className="footer__info">
              <h3>Услуги</h3>
              <ul>
                <li><a href="/">Support and development</a></li>
                <li><a href="/">UI/UX and product design</a></li>
                <li><a href="/">
                  Progressive Web
                  <p>
                    Applications (PWA)
                  </p>
                </a></li>
              </ul>
            </div>
            <div className="footer__info">
              <h3>Компания</h3>
              <ul>
                <li><a href="/">О компании</a></li>
                <li><a href="/">Проекты</a></li>
                <li><a href="/">Контакты</a></li>
              </ul>
            </div>
            <div className="footer__info">
              <h3>Контакты</h3>
              <ul>
                <li><a href="/" className="footer__download">Скачать презентацию</a></li>
                <li><a href="/" style={{ fontSize:20 }}>+7 (499) 999-99-99</a></li>
                <li><a href="/">info@site.com</a></li>
              </ul>
            </div>
            <div className="footer__contacts">
              <a href="/"><img alt="telegram" src={telegram}/></a>
              <a href="/"><img alt="whatsapp" src={whatsapp}/></a>
            </div>
          </div>
        </div>
        <div className="footer__bottom-info">
          <p>© Company 2022. All rights reserved.</p>
          <p>Политика конфиденциальночти</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;