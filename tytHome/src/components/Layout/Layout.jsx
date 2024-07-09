import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { FooterHome } from "../FooterHome/FooterHome";

import "./Layout.css";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <FooterHome />
    </>
  );
};
