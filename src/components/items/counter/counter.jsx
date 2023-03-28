import {useSelector} from "react-redux";


const Counter = ({count}) => {
    const item = useSelector(state => state.getCurrent)

    const formatCount = (count) => {
        return count === 0 ? "Empty" : count
    }

    const getBageClasses = (count) => {
        let classes = "badge m-2 "
        classes += count === 0 ? "bg-warning" : "bg-primary"
        return classes
    }
    return (
        <div className="container">
            <span className={getBageClasses(count)}>{formatCount(count)}</span>
        </div>
    )
}

export default Counter;