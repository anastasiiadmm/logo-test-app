import React from 'react';
import "assets/scss/_content.scss";

const SideBar = ({children}) => {
  return (
    <div className="content">
      <div className="content__menu">menu</div>
      {children}
    </div>
  );
};

export default SideBar;