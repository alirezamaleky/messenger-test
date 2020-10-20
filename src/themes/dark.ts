import { colors } from "@material-ui/core";
import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";
import "./dark.scss";

const dark: ThemeOptions = {
  palette: {
    type: "dark",
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

export default dark;
