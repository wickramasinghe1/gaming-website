import {authActionTypes} from "../actionType/actionType";

const initialState = {
    loginState: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case authActionTypes.LOGIN_ACTION:
            return {
                ...state,
                loginState: action.value,
            };

        default:
            return state
    }
};

export default authReducer
