import { ActionTypes } from "../constants/action-types"

const initialState = {
    users: [],
    user: [],
}

export const userReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ActionTypes.SET_FETCHED_USERS:
            return {
                ...state,
                users: payload,
            }
        case ActionTypes.SET_SELECTED_USER:
            return {
                ...state,
                user: payload,
            }
        default:
            return state
    }
}