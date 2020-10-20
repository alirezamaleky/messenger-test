import { colors } from "@material-ui/core";
import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";
import "./light.scss";

const light: ThemeOptions = {
  palette: {
    type: "light",
    primary: {
      light: colors.indigo["300"],
      main: colors.indigo["500"],
      dark: colors.indigo["700"],
      contrastText: "#ffffff",
    },
    secondary: {
      light: colors.pink["300"],
      main: colors.pink["500"],
      dark: colors.pink["700"],
      contrastText: "#ffffff",
    },
  },
};

export default light;
