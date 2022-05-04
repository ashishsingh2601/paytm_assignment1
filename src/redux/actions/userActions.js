import { ActionTypes } from "../constants/action-types"

export const setFetchedUsers = (users) => {
    return {
        type: 'SET_FETCHED_USERS',
        payload: users,
    }
}

export const setSelectedUser = (user) => {
    return {
        type: 'SET_SELECTED_USER',
        payload: user,
    }
}