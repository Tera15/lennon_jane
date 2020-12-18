import { roboto } from "@theme-ui/presets";

const theme = {
  ...roboto,
  containers: {
    shopPage: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
      gap: "2.5rem",
      margin: "2rem",
    },
    productPage: {},
    nav: {
      width: "100vw",
      textAlign: "center",
      backgroundColor: "main",
      color: "muted",
      textTransform: "uppercase",
      p: 2,
    },
    nav_ul: {
      display: "flex",
      justifyContent: "center",
      color: "white",
      fontWeight: "300",
      listStyle: "none",
      p: 0,
    },
    hero: {
      height: "25vh",
      bg: "altBackground",
    },
    blurb: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
    },
    collections: {
      marginY: 50,
      padding: "5rem",
      display: "inline-block",
      flexDirection: "column",
    },
    instagramWidget: {
      display: "grid",
      p: 100,
      my: 100,
      gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
    },
    footer: {
      height: "25vh",
      width: "100vw",
      bg: "secondary",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  colors: {
    ...roboto.colors,
    main: "#C1AA9B",
    secondary: "#BA694C",
    background: "#fff",
    altBackground: "#F2EFEB",
  },
  styles: {
    ...roboto.styles,
    a: {
      color: "muted",
      fontWeight: "300",
      letterSpacing: "2px",
      cursor: "pointer",
    },
  },
};
export default theme;
