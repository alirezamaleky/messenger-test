import { STORAGE_THEME } from "../../constants/localStorage";
import { ThemeActionTypes, ThemeStateType, ThemeType, TOGGLE_ASIDE_STATUS, TOGGLE_THEME } from "./types";

const initialState: ThemeStateType = {
  theme: (localStorage.getItem(STORAGE_THEME) as ThemeType) || ThemeType.LIGHT,
  asideStatus: false,
};

export const themeReducer = (state = initialState, action: ThemeActionTypes): ThemeStateType => {
  switch (action.type) {
    case TOGGLE_THEME: {
      const theme = state.theme === ThemeType.LIGHT ? ThemeType.DARK : ThemeType.LIGHT;
      localStorage.setItem(STORAGE_THEME, theme);
      return {
        ...state,
        theme: theme,
      };
    }
    case TOGGLE_ASIDE_STATUS: {
      return {
        ...state,
        asideStatus: action.payload === undefined ? !state.asideStatus : action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
