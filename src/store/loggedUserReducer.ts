import { LoggedUserAction } from "../interfaces/interface";

const initialState = {
    loggedUser: '', 
  };
  
  const userReducer = (state = initialState, action : LoggedUserAction) => {
    switch (action.type) {
      case 'SET_USER_NAME':
        return {
          ...state,
          loggedUser: action.payload.username,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;