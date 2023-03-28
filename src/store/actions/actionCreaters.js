import {CLEAR_ITEM, DELETE_ITEM, HANDLE_DECREMENT, HANDLE_INCREMENT, USER_LOGOUT} from "./actions";


export function handleIncrement(payload) {
    return{
        type: HANDLE_INCREMENT,
        payload
    }
}
export function handleDecrement(payload) {
    return{
        type: HANDLE_DECREMENT,
        payload
    }
}
export function deleteItem(payload) {
    return{
        type: DELETE_ITEM,
        payload
    }
}
export function userLogout(payload) {
    return{
        type: USER_LOGOUT,
        payload
    }
}
export function clearItem(payload) {
    return{
        type: CLEAR_ITEM,
        payload
    }
}
