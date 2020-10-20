import { TOGGLE_THEME, ToggleThemeActionType } from "./types";

export const toggleTheme = (): ToggleThemeActionType => ({
  type: TOGGLE_THEME,
});
