import {authActionTypes,} from "../actionType/actionType";


export const loginAction = (data) => ({
    type: authActionTypes.LOGIN_ACTION,
    value: data
})
