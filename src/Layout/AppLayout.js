import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import BottomFooter from "./BottomFooter";
import TopNav from "./TopNav";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AppLayout = () => {
  return (
    <Fragment>
      <TopNav />
      <ToastContainer />
      <Outlet />
      <BottomFooter/>
    </Fragment>
  );
};

export default AppLayout;
