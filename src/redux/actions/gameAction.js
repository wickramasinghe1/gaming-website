import {gameActionTypes,} from "../actionType/actionType";


export const saveGameAction = (data) => ({
    type: gameActionTypes.SAVE_ACTION,
    value: data
})

export const updateGameAction = (data) => ({
    type: gameActionTypes.UPDATE_ACTION,
    value: data
})

export const deleteGameAction = (data) => ({
    type: gameActionTypes.DELETE_ACTION,
    value: data
})

export const getAllGameAction = (data) => ({
    type: gameActionTypes.GET_ALL_ACTION,
    value: data
})
export const resetGameAction = (data) => ({
    type: gameActionTypes.GET_ALL_ACTION,
    value: data
})
