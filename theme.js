import { roboto } from "@theme-ui/presets";

const theme = {
  ...roboto,
  headers: {
    head: {
      my: 0,
      fontSize: 8,
      fontWeight: 300,
      letterSpacing: 16,
    },
    sub: {
      fontSize: 7,
      letterSpacing: 4,
      fontWeight: 3,
      my: 2,
    },
    sub_sub: {
      fontSize: 5,
      letterSpacing: 4,
      fontWeight: 3,
      my: 2,
    },
  },
  paragraph: {
    fontSize: 2,
    letterSpacing: 2,
    maxWidth: "65ch",
    my: 4,
    color: "textMain",
  },
  button: {
    backgroundColor: "secondary",
    borderRadius: 0,
  },
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
      p: 4,
      my: 6,
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
    textMain: "#211d1a",
  },
  styles: {
    ...roboto.styles,
    a: {
      color: "muted",
      fontWeight: "300",
      letterSpacing: 4,
      cursor: "pointer",
      fontSize: 2,
      transition: "0.3s ease",
    },
  },
};
export default theme;
