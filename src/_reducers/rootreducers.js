//Reducer for button color, button text and video source url
export const rootReducer = (
  state = { buttonText: "Stop", buttonColor: "secondary", source:'' },
  action
) => {
    switch (state.buttonText) {
    case "Start":
      return {
        buttonText: "Stop",
        buttonColor: "secondary",
        source: action.source
      };
    case "Stop":
      return {
        buttonText: "Start",
        buttonColor: "primary",
        source:''
      };
    default:
      return {
        buttonText: "Start",
        buttonColor: "primary",
        source: ''
      };
  }
};

