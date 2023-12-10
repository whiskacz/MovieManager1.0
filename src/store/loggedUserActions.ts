import { LoggedUserAction } from "../interfaces/interface";

export const setUserName = (username: string): LoggedUserAction => ({
  type: 'SET_USER_NAME',
  payload: { username },
});