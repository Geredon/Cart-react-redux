import Cart from "./cart/cart";

const NavBar = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand text-reset fs-2"  href="#">Navbar</a>
                    <Cart/>
                </div>
            </nav>
        </div>
    )
}
export default NavBar;
