import { ThemeActionTypes, ThemeStateType, ThemeType, TOGGLE_ASIDE_STATUS, TOGGLE_THEME } from "./types";

const initialState: ThemeStateType = {
  theme: ThemeType.LIGHT,
  asideStatus: false,
};

export const themeReducer = (state = initialState, action: ThemeActionTypes): ThemeStateType => {
  switch (action.type) {
    case TOGGLE_THEME: {
      return {
        ...state,
        theme: state.theme === ThemeType.LIGHT ? ThemeType.DARK : ThemeType.LIGHT,
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
