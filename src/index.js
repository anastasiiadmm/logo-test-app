import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import App from 'App';
import translationEN from "locales/translationEN.json";
import translationRU from "locales/translationRU.json";
import 'assets/scss/_index.scss';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEN },
    ru: { translation: translationRU }
  },
  lng: "ru",
  fallbackLng: "ru",
  interpolation: { escapeValue: false }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
