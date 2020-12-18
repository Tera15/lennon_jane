/** @jsx jsx */ /** @jsxRuntime classic */

import { jsx } from "theme-ui";
import BrandLogo from "./BrandLogo";
import Navigation from "./Navigation";

const Footer = () => {
  return (
    <footer sx={{ variant: "containers.footer" }}>
      <div sx={{ width: "100%" }}></div>
      <nav sx={{ variant: "containers.nav", bg: "secondary" }}>
        <Navigation />
      </nav>
    </footer>
  );
};

export default Footer;
