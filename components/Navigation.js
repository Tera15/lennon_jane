/** @jsx jsx */ /** @jsxRuntime classic */
import { jsx, Styled } from "theme-ui";
import Link from "next/link";

const Navigation = () => (
  <ul
    sx={{
      variant: "containers.nav_ul",
      fontSize: 4,
    }}
  >
    <li sx={{ px: 2 }}>
      <Link href="/">
        <Styled.a>Home</Styled.a>
      </Link>
    </li>
    <li sx={{ px: 2 }}>
      <Link href="/Shop">
        <Styled.a>Shop</Styled.a>
      </Link>
    </li>
    <li sx={{ px: 2 }}>
      <Link href="/About">
        <Styled.a>About</Styled.a>
      </Link>
    </li>
    <li sx={{ px: 2 }}>
      <Link href="/Charities">
        <Styled.a>Charities</Styled.a>
      </Link>
    </li>
  </ul>
);

export default Navigation;
