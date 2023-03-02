import {gameActionTypes} from "../actionType/actionType";

const initialState = {
    saveState: null,
    updateState: null,
    deleteState: null,
    getAllState: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case gameActionTypes.SAVE_ACTION:
            return {
                ...state,
                saveState: action.value,
            };

        case gameActionTypes.UPDATE_ACTION:
            return {
                ...state,
                updateState: action.value,
            };

        case gameActionTypes.DELETE_ACTION:
            return {
                ...state,
                deleteState: action.value,
            };

        case gameActionTypes.GET_ALL_ACTION:
            return {
                ...state,
                getAllState: action.value,
            };


        case gameActionTypes.RESET_ACTION:
            return {
                saveState: null,
                updateState: null,
                deleteState: null,
            };

        default:
            return state
    }
};

export default authReducer
