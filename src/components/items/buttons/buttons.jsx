import {icon} from "./icons";
import {useDispatch} from "react-redux";
import {clearItem, userLogout} from "../../../store/actions/actionCreaters";


const HandleButtons = () => {
    const dispatch = useDispatch()

    const refreshItem = () => {
        dispatch(userLogout())
    }

    const clearItems = () => {
        dispatch(clearItem([]))
    }

    return (
    <>
        <button type="button" className="btn btn-primary m-2" onClick={clearItems}>Очистить</button>
        <button type="button"  className="btn btn-primary" onClick={refreshItem}>{icon} Refresh</button>
    </>
)
}

export default HandleButtons