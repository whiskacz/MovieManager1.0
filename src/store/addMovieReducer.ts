const initialState = {
    showAddMoviePopUp: false,
};

const addMoviePopUpReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_ADD_MOVIE_POPUP':
            return {
                ...state,
                showAddMoviePopUp: action.payload,
            };
        default:
            return state;
    }
};

export default addMoviePopUpReducer;
