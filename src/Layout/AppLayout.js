import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import BottomFooter from "./BottomFooter";
import TopNav from "./TopNav";

const AppLayout = () => {
  return (
    <Fragment>
      <TopNav />
      <Outlet />
      <BottomFooter/>
    </Fragment>
  );
};

export default AppLayout;
