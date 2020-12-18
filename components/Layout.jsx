/** @jsx jsx */ /** @jsxRuntime classic */

import { jsx } from "theme-ui";
import React from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <React.Fragment>
    <NavBar />
    <Hero />
    {children}
    <Footer />
  </React.Fragment>
);

export default Layout;
