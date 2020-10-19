import { createMuiTheme, CssBaseline, Theme, ThemeProvider } from "@material-ui/core";
import { enUS, faIR } from "@material-ui/core/locale";
import React, { FC, memo, ReactChild } from "react";
import { shallowEqual } from "../libs/shallowEqual";
import dark from "./dark";
import light from "./light";

export enum ThemeType {
  DARK = "DARK",
  LIGHT = "LIGHT",
}

type Props = {
  theme: ThemeType;
  children: ReactChild;
};

type DirectionsType = "rtl" | "ltr";

export const direction: DirectionsType = (localStorage.getItem("direction") as DirectionsType) || "rtl";

const themes = {
  DARK: dark,
  LIGHT: light,
};

const themeGenerator: (theme: ThemeType) => Theme = (theme: ThemeType) => {
  document.querySelector("html")?.setAttribute("data-theme", theme);
  document.querySelector("body")?.setAttribute("dir", direction);
  return createMuiTheme(
    {
      direction: direction,
      typography: {
        fontFamily: "var(--primary-font)",
      },
      shape: {
        borderRadius: 10,
      },
      ...themes[theme],
    },
    direction === "rtl" ? faIR : enUS
  );
};

const MaterialTheme: FC<Props> = (props) => {
  return (
    <ThemeProvider theme={themeGenerator(props.theme)}>
      <CssBaseline />
      <>{props.children}</>
    </ThemeProvider>
  );
};

export default memo(MaterialTheme, shallowEqual);
