import React from "react";
import { Outlet } from "react-router-dom";
import DashboardNav from "../components/shared/DashboardNav";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";

const DashboardLayout = () => {
  return (
    <div>
      <Header></Header>
      <DashboardNav></DashboardNav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
