import { SET_POPUP_USER, SetPopupUserActionType, TOGGLE_ASIDE_STATUS, TOGGLE_THEME, ToggleAsideStatusActionType, ToggleThemeActionType } from "./types";

export const toggleTheme = (): ToggleThemeActionType => ({
  type: TOGGLE_THEME,
});

export const toggleAsideStatus = (payload?: ToggleAsideStatusActionType["payload"]): ToggleAsideStatusActionType => ({
  type: TOGGLE_ASIDE_STATUS,
  payload: payload,
});

export const setPopupUser = (payload?: SetPopupUserActionType["payload"]): SetPopupUserActionType => ({
  type: SET_POPUP_USER,
  payload: payload,
});
