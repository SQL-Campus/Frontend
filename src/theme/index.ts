import { PaletteOptions, createTheme, css } from "@mui/material/styles";

export type AllowedTheme = NonNullable<PaletteOptions["mode"]>;

export const DEFAULT_THEME: AllowedTheme = "dark";

export const lightTheme = createTheme({
  palette: {
    primary: { main: "#373E40" },
    secondary: { main: "#B8D6BE" },
    error: { main: "#f44336" },
    warning: { main: "#ffa726" },
    info: { main: "#29b6f6" },
    success: { main: "#66bb6a" },
    background: { default: "#66BFA0" },
    mode: "light",
  },
});

export const darkTheme = createTheme({
  palette: {
    primary: { main: "#488286" },
    secondary: { main: "#305252" },
    error: { main: "#f44336" },
    warning: { main: "#ffa726" },
    info: { main: "#29b6f6" },
    success: { main: "#66bb6a" },
    background: { default: "#373E40" },
    mode: "dark",

  },
});

export const globalStyles = css`
  :root {
    body {
      background-color: #66BFA0;
      color: #373E40;
    }
  }

  [data-theme="dark"] {
    body {
      background-color: #373E40;
      color: #66BFA0;
    }
  }
`;
