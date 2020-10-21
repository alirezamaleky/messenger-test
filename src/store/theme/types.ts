import { UserProps } from "../../components/modules/user";

export const TOGGLE_THEME = "TOGGLE_THEME";
export const TOGGLE_ASIDE_STATUS = "TOGGLE_ASIDE_STATUS";
export const SET_POPUP_USER = "SET_POPUP_USER";

export enum ThemeType {
  DARK = "DARK",
  LIGHT = "LIGHT",
}

export type AsideStatusType = boolean;

export type PopupUserType = UserProps | undefined;

export type ThemeStateType = {
  theme: ThemeType;
  asideStatus: AsideStatusType;
  popupUser: PopupUserType;
};

export type ToggleThemeActionType = {
  type: typeof TOGGLE_THEME;
};

export type ToggleAsideStatusActionType = {
  type: typeof TOGGLE_ASIDE_STATUS;
  payload?: AsideStatusType;
};

export type SetPopupUserActionType = {
  type: typeof SET_POPUP_USER;
  payload?: PopupUserType;
};

export type ThemeActionTypes = ToggleThemeActionType | ToggleAsideStatusActionType | SetPopupUserActionType;
