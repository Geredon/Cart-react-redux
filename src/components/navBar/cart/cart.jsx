import {useSelector} from "react-redux";

const Cart = () => {
    const item = useSelector(state => state.getCurrent.length)

    return (
        <button type="button" className="btn btn-light position-relative">
            Корзина
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                     {item}
                <span className="visually-hidden">непрочитанные сообщения</span>
          </span>
        </button>
    )
}

export default Cart;