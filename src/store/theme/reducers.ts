import { ThemeActionTypes, ThemeStateType, ThemeType, TOGGLE_THEME } from "./types";

const initialState: ThemeStateType = {
  theme: ThemeType.LIGHT,
};

export const themeReducer = (state = initialState, action: ThemeActionTypes): ThemeStateType => {
  switch (action.type) {
    case TOGGLE_THEME: {
      return {
        ...state,
        theme: state.theme === ThemeType.LIGHT ? ThemeType.DARK : ThemeType.LIGHT,
      };
    }
    default: {
      return state;
    }
  }
};
