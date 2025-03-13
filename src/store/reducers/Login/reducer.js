import { SAVE_LOGIN_INFO, SAVE_PREFERED_NAME } from "./constants";

const initialState = {
  loginDetails: { username: "", password: "" },
  preferedName: "",
};
export default function saveLoginReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_LOGIN_INFO:
      console.log("Nik", state);
      return { ...state, loginDetails: action.data };
    case SAVE_PREFERED_NAME:
      console.log("Siri", state);
      return { ...state, preferedName: action.data };

    default:
      return initialState;
  }
}
