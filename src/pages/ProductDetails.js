import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import AddWishList from "../store/Actions/AddWishList";
import AddCart from "../store/Actions/AddCart";

const ProductDetails = () => {
    const {id} = useParams('id')

    const [product, setProduct] = useState({})
    const [wishListState,setWishListState] = useState([])

    const [quantity,setQuantity] = useState(1)



    const isAuth = useSelector(state => state.users.isAuth);
    const wishList = useSelector(state => state.wishList.wishList);

    const dispatch = useDispatch()
    const navigate = useNavigate()


    const getProductById = async (id) => {
        const product = await axios.get(`https://dummyjson.com/products/${id}`)
        console.log(product.data)
        setProduct(product.data)
    }


    const addToWishList = () => {
        if(isAuth){
            let index = wishListState.findIndex(item => item.id === product.id);
            if(index !== -1){
                console.log(index)
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


    const addToCart = () => {
        if(isAuth){
            dispatch(AddCart(product,quantity))
        }else{
            navigate('/login')
        }
    }

    const increaseQuantity = () => {
        if(product.stock !== quantity){
            setQuantity(quantity+1)
        }
    }

    const decreaseQuantity = () => {
        if(quantity !== 1){
            setQuantity(quantity-1)
        }
    }


    useEffect(() => {
        getProductById(id)
    },[])

    useEffect(()=>{
        setWishListState(wishList)
    },[wishList])

    return(
    <section className="py-5">
        <div className="container">
        <div className="row mb-5">
            <div className="col-lg-6">
            <div className="row m-sm-0">
                <div className="col-sm-2 p-sm-0 order-2 order-sm-1 mt-2 mt-sm-0">
                <div className="owl-thumbs d-flex flex-row flex-sm-column" data-slider-id="1">
                    {
                        product.images && product.images.map((img,index) => {
                            return (<div key={index} className="owl-thumb-item flex-fill mb-2 mr-2 mr-sm-0"><img className="w-100" src={img} alt={product.title} /></div>)
                        })
                    }
                </div>
                </div>
                <div className="col-sm-10 order-1 order-sm-2">
                <div className=" product-slider" data-slider-id="1">
                    <Link className="d-block"  href={product.thumbnail} data-lightbox="product" title={product.title}>
                        <img className="img-fluid"  src={product.thumbnail} alt={product.title} />
                    </Link>
                </div>
                </div>
            </div>
            </div>
            <div className="col-lg-6">

                <h1>{product.title}</h1>
                <p className="text-muted lead">${product.price}</p>
                <p className="text-small mb-4">{product.description}</p>

                <div className="row align-items-stretch mb-4">
                    <div className="col-sm-5 pr-sm-0">
                    <div className="border d-flex align-items-center justify-content-between py-1 px-3 bg-white border-white"><span className="small text-uppercase text-gray mr-4 no-select">Quantity</span>
                        <div className="quantity">
                        <button className="dec-btn p-0" onClick={() => decreaseQuantity()}>
                            <i className="fas fa-caret-left"></i>
                        </button>
                        <input className="form-control border-0 shadow-0 p-0" type="text" value={quantity} />
                        <button className="inc-btn p-0" onClick={() => increaseQuantity()}>
                            <i className="fas fa-caret-right"></i>
                        </button>
                        </div>
                    </div>
                    </div>
                    <div className="col-sm-3 pl-sm-0">
                        <button className="btn btn-dark btn-sm btn-block h-100 d-flex align-items-center justify-content-center px-0"
                        onClick={() => addToCart()} >
                            Add to cart
                        </button>
                    </div>
                <button className="btn btn-link text-dark p-0 mb-4"
                onClick={() => addToWishList()}>
                    {
                        wishListState.some(item => item.id === product.id) ? <i className="fas fa-heart"></i> : (
                            <>  <i className="far fa-heart"></i>
                            <span>Add To wish List</span></>
                        )
                    }
                </button>
                <br />
                <ul className="list-unstyled small d-inline-block">
                    <li className="px-3 py-2 mb-1 bg-white"><strong className="text-uppercase">Brand:</strong><span className="ml-2 text-muted">{product.brand}</span></li>
                    <li className="px-3 py-2 mb-1 bg-white text-muted"><strong className="text-uppercase text-dark">Category:</strong><a className="reset-anchor ml-2" href="#">{product.category}</a></li>
                    <li className="px-3 py-2 mb-1 bg-white text-muted"><strong className="text-uppercase text-dark">Stock:</strong><a className="reset-anchor ml-2" href="#">{product.stock}</a></li>
                </ul>
                </div>
            </div>
        </div>
        </div>
    </section>
    );
}

export default ProductDetails;