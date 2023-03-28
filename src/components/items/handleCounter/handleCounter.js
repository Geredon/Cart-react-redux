import {useDispatch, useSelector} from "react-redux";
import {handleDecrement, handleIncrement} from "../../../store/actions/actionCreaters";


const HandleCounter = ({count,id}) => {
    const item = useSelector(state => state.getCurrent)

    const dispatch = useDispatch()

    const setIncrement = (id) => {
        const plus = item.map(i => i.id === id ? {...i, count: i.count + 1}  : i)
        dispatch(handleIncrement(plus))
    }
    const setDecrement = (id) => {
        const minus = item.map(i => i.id === id ? {...i, count: i.count - 1}  : i)
        dispatch(handleDecrement(minus))
    }
    return (
        <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-primary btn-sm " onClick={() => setIncrement(id)}>+</button>
            <button type="button" className="btn btn-primary btn-sm " onClick={() => setDecrement(id)}>-</button>
        </div>
    )
}

export default HandleCounter;