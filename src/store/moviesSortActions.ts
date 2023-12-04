import { SET_SELECTED_BUTTON } from '../interfaces/interface';

export const setButtonSelection = (selectedButton: string) => ({
  type: SET_SELECTED_BUTTON,
  payload: selectedButton,
});