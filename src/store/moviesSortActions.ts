import { ActionTypes, SET_SELECTED_BUTTON } from '../interfaces/interface';

export const setButtonSelection = (selectedButton: string): ActionTypes => ({
  type: SET_SELECTED_BUTTON,
  payload: selectedButton,
});