import { TOGGLE_ASIDE_STATUS, TOGGLE_THEME, ToggleAsideStatusActionType, ToggleThemeActionType } from "./types";

export const toggleTheme = (): ToggleThemeActionType => ({
  type: TOGGLE_THEME,
});

export const toggleAsideStatus = (payload?: ToggleAsideStatusActionType["payload"]): ToggleAsideStatusActionType => {
  return {
    type: TOGGLE_ASIDE_STATUS,
    payload: payload,
  };
};
