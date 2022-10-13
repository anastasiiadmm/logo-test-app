import React from 'react';
import "assets/scss/_content.scss";

const SideBar = ({children}) => {
  return (
    <div className="content">
      <div style={{margin: "0 107px 0 0px"}}>menu</div>
      {children}
    </div>
  );
};

export default SideBar;