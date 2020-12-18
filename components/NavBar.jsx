/** @jsx jsx */ /** @jsxRuntime classic */
import { useEffect, useState } from "react";
import { commerce } from "../src/lib/commerce";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import { jsx } from "theme-ui";
import Navigation from "./Navigation";
import ShoppingBag from "../components/ShoppingBag";
import Image from "next/image";
const NavBar = () => {
  return (
    <nav sx={{ variant: "containers.nav" }}>
      <h1 sx={{ m: 0, fontSize: 7, fontWeight: 300, letterSpacing: "4px" }}>
        Lennon Jane
      </h1>
      <div sx={{ display: "flex", justifyContent: "center" }}>
        <Navigation />
        <ShoppingBag x={22} y={1} />
      </div>
    </nav>
  );
};

export default NavBar;
