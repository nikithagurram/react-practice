import { SAVE_LOGIN_INFO, SAVE_PREFERED_NAME } from "./constants";

export const saveLoginAction = (data) => {
  return {
    type: SAVE_LOGIN_INFO,
    data,
  };
};
export const savePreferedName = (data) => {
  return {
    type: SAVE_PREFERED_NAME,
    data,
  };
};
