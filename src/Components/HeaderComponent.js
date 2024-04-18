import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HeaderComponent = () => {

    const isAuth = useSelector(state => state.users.isAuth);
    const user = useSelector(state => state.users.user);
    const cartLength = useSelector(state => state.cart.cartProduct.length);
    const wishListLength = useSelector(state => state.wishList.wishList.length);

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
                    <Link className="nav-link" to='/shop'>Shop</Link>
                </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                {
                    isAuth ? (<>
                    <li className="nav-item">
                        <Link className="nav-link" to='/cart'> <i className="fas fa-dolly-flatbed mr-1 text-gray"></i>Cart<small className="text-gray">({cartLength})</small>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/wishlist'> <i className="far fa-heart mr-1"></i><small className="text-gray"> ({wishListLength})</small></Link>
                    </li>
                    <span> welcome, <b>{user.userName}</b> </span>
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