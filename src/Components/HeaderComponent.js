import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HeaderComponent = () => {

    const isAuth = useSelector(state => state.isAuth);
    return (
    <header className="header bg-white">
        <div className="container px-0 px-lg-3">
        <nav className="navbar navbar-expand-lg navbar-light py-3 px-lg-0"><a className="navbar-brand" href="index.html"><span className="font-weight-bold text-uppercase text-dark">Boutique</span></a>
            <button className="navbar-toggler navbar-toggler-right" type="button"  data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to='/' className="nav-link active">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="shop.html">Shop</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="detail.html">Product detail</a>
                </li>
                <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" id="pagesDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                    <div className="dropdown-menu mt-3" aria-labelledby="pagesDropdown"><a className="dropdown-item border-0 transition-link" href="index.html">Homepage</a><a className="dropdown-item border-0 transition-link" href="shop.html">Category</a><a className="dropdown-item border-0 transition-link" href="detail.html">Product detail</a><a className="dropdown-item border-0 transition-link" href="cart.html">Shopping cart</a><a className="dropdown-item border-0 transition-link" href="checkout.html">Checkout</a></div>
                </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                {
                    isAuth ? (<>
                    <li className="nav-item"><a className="nav-link" href="cart.html"> <i className="fas fa-dolly-flatbed mr-1 text-gray"></i>Cart<small className="text-gray">(2)</small></a></li>
                    <li className="nav-item"><a className="nav-link" href="#"> <i className="far fa-heart mr-1"></i><small className="text-gray"> (0)</small></a></li>
                    </>) : (<li className="nav-item">
                    <Link to='/login' className="nav-link">
                        <i className="fas fa-user-alt mr-1 text-gray"></i>Login
                    </Link>
                </li>)
                }

                </ul>
            </div>
            </nav>
        </div>
        </header>
    );
}

export default HeaderComponent;