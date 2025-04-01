import React from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { Outlet } from "react-router-dom";
import FloatingPopUp from "../FloatingPopUp";

const UserLayout = () => {
  return (
    <>
      {/* Header */}
      <Header />
      {/* Main Content */}
      <main>
        <Outlet />
        <FloatingPopUp />
      </main>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default UserLayout;
