import { createMuiTheme, CssBaseline, Theme, ThemeProvider } from "@material-ui/core";
import { enUS, faIR } from "@material-ui/core/locale";
import React, { FC, memo, PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { shallowEqual } from "../libs/shallowEqual";
import { ReducersType } from "../store";
import { ThemeType } from "../store/theme/types";
import dark from "./dark";
import light from "./light";

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

const MaterialTheme: FC<PropsWithChildren<{}>> = (props) => {
  const theme = useSelector<ReducersType, ThemeType>((state) => state.theme.theme, shallowEqual);

  return (
    <ThemeProvider theme={themeGenerator(theme)}>
      <CssBaseline />
      <>{props.children}</>
    </ThemeProvider>
  );
};

export default memo(MaterialTheme, shallowEqual);
