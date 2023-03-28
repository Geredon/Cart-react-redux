import HandleCounter from "./handleCounter/handleCounter";
import Carts from "./cart/carts";
import {useSelector} from "react-redux";
import Counter from "./counter/counter";
import HandleButtons from "./buttons/buttons";

const Items = () => {

    const item = useSelector(state => state.getCurrent)

    return (
        <div className="container text-center ">
            {item.map(i => {
                return (
                    <div className="row" key={i.id}>
                        <div className="col text-start">
                            <span>{i.card}</span>
                        </div>
                        <div className="col">
                            <Counter count={i.count}/>
                        </div>
                        <div className="col text-end">
                            <HandleCounter count={i.count} id={i.id}/>
                            <Carts id={i.id}/>
                        </div>
                    </div>
                )
            })}
            <div className=" container text-end">
                <HandleButtons/>
            </div>
        </div>
    )
}

export default Items;