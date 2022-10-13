import React from 'react';
import {useTranslation} from "react-i18next";
import {Breadcrumbs, Link} from "@mui/material";

const BreadcrumbComponent = ({homeLink = "", textLink = ""}) => {
  const {t} = useTranslation();

  return (
    <Breadcrumbs separator="-">
      {homeLink ? (
        <Link href="/" color="inherit" style={{textDecoration: "none"}}>{homeLink}</Link>
      ) : null}
      {textLink ? (
        <Breadcrumbs>
          <Link style={{textDecoration: "none"}}>{textLink}</Link>
        </Breadcrumbs>
      ) : null}
    </Breadcrumbs>
  );
};

export default BreadcrumbComponent;