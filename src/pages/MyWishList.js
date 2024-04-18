import { useDispatch, useSelector } from "react-redux";
import {  useState } from "react";
import { Link } from "react-router-dom";
import removeWishList from "../store/Actions/RemoveWishList";

const MyWishList = () => {

    const myWishList = useSelector(state => state.wishList.wishList);
    const [myStateWishList, setMyStateWishList] = useState(myWishList)

    const dispatch = useDispatch()

    const deleteFromWishList = (product) => {
        dispatch(removeWishList(product))
        setMyStateWishList([
            ...myWishList
        ])
    }
    return (
        <section className="py-5">
        <h2 className="h5 text-uppercase mb-4">Wish List</h2>
        <div className="row">
          <div className="col-lg-12 mb-4 mb-lg-0">
            <div className="table-responsive mb-4">
                {
                    myStateWishList.length > 0 ? (
                        <table className="table">
                        <thead className="bg-light">
                          <tr>
                            <th className="border-0" scope="col"> <strong className="text-small text-uppercase">Product</strong></th>
                            <th className="border-0" scope="col"> <strong className="text-small text-uppercase">Price</strong></th>
                            <th className="border-0" scope="col"> <strong className="text-small text-uppercase">brand</strong></th>
                            <th className="border-0" scope="col"> <strong className="text-small text-uppercase">category</strong></th>
                            <th className="border-0" scope="col"> </th>
                          </tr>
                        </thead>
                        <tbody>
                        {

                             myStateWishList.map(wishlist => {
                                return (
                                    <tr key={wishlist.id}>
                                      <th className="pl-0 border-0" scope="row">
                                        <div className="media align-items-center"><a className="reset-anchor d-block animsition-link" href="detail.html">
                                          <img src={wishlist.thumbnail} alt={wishlist.title} width="70"/></a>
                                          <div className="media-body ml-3"><strong className="h6">
                                            <Link className="reset-anchor animsition-link" to={`/productDetails/${wishlist.id}`} >
                                                {wishlist.title}</Link></strong> Details </div>
                                        </div>
                                      </th>
                                      <td className="align-middle border-0">
                                        <p className="mb-0 small">${wishlist.price}</p>
                                      </td>

                                      <td className="align-middle border-0">
                                        <p className="mb-0 small">{wishlist.brand}</p>
                                      </td>

                                      <td className="align-middle border-0">
                                        <p className="mb-0 small">{wishlist.category}</p>
                                      </td>
                                      <td className="align-middle border-0">
                                        <span className="reset-anchor" onClick={() => deleteFromWishList(wishlist)}><i className="fas fa-trash-alt small text-muted"></i></span>
                                        </td>
                                    </tr>)
                            })
                        }
                        </tbody>
                      </table>
                    ) : (
                        <h2 className="h5 text-uppercase mb-4">Not Found Any Products Here</h2>
                    )
                }

            </div>
            <div className="bg-light px-4 py-3">
              <div className="row align-items-center text-center">
                <div className="col-md-6 mb-3 mb-md-0 text-md-left"><a className="btn btn-link p-0 text-dark btn-sm" href="shop.html"><i className="fas fa-long-arrow-alt-left mr-2"> </i>Continue shopping</a></div>
                <div className="col-md-6 text-md-right"><a className="btn btn-outline-dark btn-sm" href="checkout.html">Procceed to checkout<i className="fas fa-long-arrow-alt-right ml-2"></i></a></div>
              </div>
            </div>
          </div>

        </div>
      </section>
    );
}

export default MyWishList;