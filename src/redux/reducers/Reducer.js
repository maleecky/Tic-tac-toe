import {
  SAVE_TOGGLE,
  DIFFICULTY_LEVEL_TOGGLE,
  THEME_TOGGLE,
  PLAYER_MODE,
} from "../actions/GlobalActions";

export const saveToggleReducer = (state = false, action) => {
  switch (action.type) {
    case SAVE_TOGGLE: {
      return !state;
    }
    default: {
      return state;
    }
  }
};

export const difficultLevelToggle = (state = true, action) => {
  switch (action.type) {
    case DIFFICULTY_LEVEL_TOGGLE: {
      return !state;
    }
    default: {
      return state;
    }
  }
};

export const themeToggle = (state = true, action) => {
  switch (action.type) {
    case THEME_TOGGLE: {
      return !state;
    }
    default: {
      return state;
    }
  }
};

export const playerMode = (state = true, action) => {
  switch (action.type) {
    case PLAYER_MODE: {
      return (state = action.payLoad.val);
    }
    default: {
      return state;
    }
  }
};
