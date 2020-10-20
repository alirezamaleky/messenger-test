export const TOGGLE_THEME = "TOGGLE_THEME";

export enum ThemeType {
  DARK = "DARK",
  LIGHT = "LIGHT",
}

export type ThemeStateType = {
  theme: ThemeType;
};

export type ToggleThemeActionType = {
  type: typeof TOGGLE_THEME;
};

export type ThemeActionTypes = ToggleThemeActionType;
