import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "containers/Header/Header";
import Contacts from "containers/Contacts/Contacts";
import Footer from "containers/Footer/Footer";
import SideBar from "containers/SideBar/SideBar";
import AboutCompany from "containers/AboutCompany/AboutCompany";
import Projects from "containers/Projects/Projects";
import "assets/scss/_content.scss";

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <SideBar>
        <div className="main-content">
          <div className="main-content__info">
            <Routes>
              <Route path="/" element={<Projects />} />
              <Route path="/info" element={<AboutCompany />} />
              <Route path="/contacts" element={<Contacts />} />
            </Routes>
          </div>
        </div>
      </SideBar>
      <Footer/>
    </div>
  )
}

export default App;
