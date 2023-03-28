import {combineReducers, createStore} from "redux";
import {getCurrent} from "./reducers/reducer";


const appReducer = combineReducers({
    getCurrent,
})

const rootReducer = (state, action) => {
    if (action.type === 'USER_LOGOUT') {
        return appReducer(undefined, action)
    }
    return appReducer(state, action)
}

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())