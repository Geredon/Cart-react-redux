import {
    CLEAR_ITEM,
    DELETE_ITEM,
    HANDLE_DECREMENT,
    HANDLE_INCREMENT,
} from "../actions/actions";


const defaultState = [
    {card: "Ненужная вещь", id:1, key: 1,count:0}, {card: "Ложка", id:2, key: 2,count:3}, {card: "Вилка", id:3, key: 3,count:5}, {card: "Тарелка", id:4, key: 4,count:11}, {card: "Ноутбук", id:5, key: 5,count:99}
]

export const getCurrent = (state = defaultState,action) => {
    switch (action.type) {
        case HANDLE_INCREMENT: {
            return [... action.payload]
        }
        case HANDLE_DECREMENT: {
            return [... action.payload]
        }
        case DELETE_ITEM: {
            return [... action.payload]
        }
        case CLEAR_ITEM: {
            return [...action.payload]
        }

        default: return state;
    }
}
