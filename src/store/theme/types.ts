export const TOGGLE_THEME = "TOGGLE_THEME";
export const TOGGLE_ASIDE_STATUS = "TOGGLE_ASIDE_STATUS";

export enum ThemeType {
  DARK = "DARK",
  LIGHT = "LIGHT",
}

export type AsideStatusType = boolean;

export type ThemeStateType = {
  theme: ThemeType;
  asideStatus: AsideStatusType;
};

export type ToggleThemeActionType = {
  type: typeof TOGGLE_THEME;
};

export type ToggleAsideStatusActionType = {
  type: typeof TOGGLE_ASIDE_STATUS;
  payload?: AsideStatusType;
};

export type ThemeActionTypes = ToggleThemeActionType | ToggleAsideStatusActionType;
