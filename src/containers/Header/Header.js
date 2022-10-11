import React from 'react';
import Navigation from "containers/Header/Navigation/Navigation";
import MobileNavigation from "containers/Header/MobileNavigation/MobileNavigation";
import 'assets/scss/_header.scss';

const Header = () => {
  return (
    <div className="header">
      <Navigation />
      <MobileNavigation />
    </div>
  );
};

export default Header;