// ** Redux Imports
import { combineReducers } from 'redux';

import authReducer from "./authReducer";
import gameReducer from "./gameReducer";

const rootReducer = combineReducers({
    authState: authReducer,
    gameState: gameReducer,

})

export default rootReducer
