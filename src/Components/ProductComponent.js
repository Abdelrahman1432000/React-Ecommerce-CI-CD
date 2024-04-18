import { useDispatch,useSelector } from "react-redux";
import AddCart from "../store/Actions/AddCart";
import { useNavigate } from "react-router";
import AddWishList from "../store/Actions/AddWishList";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductComponent = ({product,index}) => {

    const [wishListState,setWishListState] = useState([])

    const isAuth = useSelector(state => state.users.isAuth);
    const wishList = useSelector(state => state.wishList.wishList);

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const addToCart = (product) => {
        if(isAuth){
            dispatch(AddCart(product,1))
        }else{
            navigate('/login')
        }
    }

    const addToWishList = (product) => {
        if(isAuth){
            let index = wishListState.findIndex(item => item.id === product.id);
            if(index !== -1){
                wishListState.splice(index,1)
                setWishListState([
                    ...wishListState
                ])
            }else{
                setWishListState([
                    ...wishListState,
                    product
                ])
            }
            dispatch(AddWishList(product))
        }else{
            navigate('/login')
        }

    }

    useEffect(()=>{
        setWishListState(wishList)
    },[wishList])

    return (
            <div className="col-xl-3 col-lg-4 col-sm-6" key={product.id}>
                <div className="product text-center">
                  <div className="position-relative mb-3">
                    <div className="badge text-white badge-"></div>
                    <Link className="d-block" to={`/productDetails/${product.id}`}>
                    <img className="img-fluid w-100" width="100" height="100" src={product.thumbnail} alt={product.title}/></Link>
                    <div className="product-overlay">
                      <ul className="mb-0 list-inline">
                        <li className="list-inline-item m-0 p-0">
                            <button className="btn btn-sm btn-outline-dark" onClick={() => addToWishList(product)}>
                            {
                                wishListState.some(item => item.id === product.id) ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>
                            }
                            </button>
                        </li>
                        <li className="list-inline-item m-0 p-0">
                            <button className="btn btn-sm btn-dark"
                            onClick={() => addToCart(product)}>Add to cart</button>
                            </li>
                        <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href={`#${product.category}_${index}`} data-toggle="modal"><i className="fas fa-expand"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <h6> <a className="reset-anchor" href="detail.html">{product.title}</a></h6>
                  <p className="small text-muted">{product.price} $</p>
                </div>
              </div>
    );
}

export default ProductComponent;