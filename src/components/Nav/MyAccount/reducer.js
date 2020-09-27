export const myAccountSubmenuInitState = {
  isSubmenuSettingsOpen: false,
  isSubmenuHelpOpen: false,
};

const myAccountSubmenuReducer = (state, action) => {
  switch (action.type) {
    case "settings_open":
      return {
        ...state,
        isSubmenuHelpOpen: false,
        isSubmenuSettingsOpen: true,
      };
    case "settings_close":
      return {
        ...state,
        isSubmenuHelpOpen: false,
        isSubmenuSettingsOpen: false,
      };
    case "help_open":
      return {
        ...state,
        isSubmenuHelpOpen: true,
        isSubmenuSettingsOpen: false,
      };
    case "help_close":
      return {
        ...state,
        isSubmenuHelpOpen: false,
        isSubmenuSettingsOpen: false,
      };
    default:
      return state;
  }
};

export default myAccountSubmenuReducer;
