
const initialState = {
    moviesSearchList: [],
  };
  
  const moviesSearchReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case 'UPDATE_MOVIES_SEARCH_LIST':
        console.log('MOVIES ADDED TO SEARCH', action.payload)
        return {
          ...state,
          moviesSearchList: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default moviesSearchReducer;