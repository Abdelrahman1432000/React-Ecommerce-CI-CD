import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddCart from "../store/Actions/AddCart";
import RemoveCart from "../store/Actions/RemoveCart";

const MyCart = () => {


    const myCart = useSelector(state => state.cart.cartProduct);

    const [subTotal, setSubTotal] = useState(0)
    const [tax, setTax] = useState(0)
    const [myStateCart, setMyStateCart] = useState(myCart)


    const dispatch = useDispatch()

    const deleteFromCart = (product) => {
      dispatch(RemoveCart(product))
      setMyStateCart([
        ...myCart
      ])
    }


    useEffect(() => {
        let sub = 0;
        myStateCart.forEach(cart => {
            sub += (cart.quantity * cart.product.price)
        });
        setSubTotal(sub)
        setTax(Math.round(sub * 0.1))
    },[myStateCart])


    return (
    <section className="py-5">
    <h2 className="h5 text-uppercase mb-4">Shopping cart</h2>
    <div className="row">
      <div className="col-lg-8 mb-4 mb-lg-0">
        <div className="table-responsive mb-4">
          {
            myStateCart.length > 0 ? (   <table className="table">
            <thead className="bg-light">
              <tr>
                <th className="border-0" scope="col"> <strong className="text-small text-uppercase">Product</strong></th>
                <th className="border-0" scope="col"> <strong className="text-small text-uppercase">Price</strong></th>
                <th className="border-0" scope="col"> <strong className="text-small text-uppercase">Quantity</strong></th>
                <th className="border-0" scope="col"> <strong className="text-small text-uppercase">Total</strong></th>
                <th className="border-0" scope="col"> </th>
              </tr>
            </thead>
            <tbody>
            {
                myStateCart.map(cart => {
                    return (
                        <tr key={cart.product.id}>
                          <th className="pl-0 border-0" scope="row">
                            <div className="media align-items-center"><a className="reset-anchor d-block animsition-link" href="detail.html">
                              <img src={cart.product.thumbnail} alt={cart.product.title} width="70"/></a>
                              <div className="media-body ml-3"><strong className="h6">
                                <Link className="reset-anchor animsition-link" to={`/productDetails/${cart.product.id}`} >
                                    {cart.product.title}</Link></strong> Details </div>
                            </div>
                          </th>
                          <td className="align-middle border-0">
                            <p className="mb-0 small">${cart.product.price}</p>
                          </td>
                          <td className="align-middle border-0">
                            <div className="border d-flex align-items-center justify-content-between px-3"><span className="small text-uppercase text-gray headings-font-family">Quantity</span>
                            <div className="quantity">
                                <input className="form-control form-control-sm border-0 shadow-0 p-0" type="text" value={cart.quantity}/>
                            </div>
                            </div>
                          </td>
                          <td className="align-middle border-0">
                            <p className="mb-0 small">${cart.quantity * cart.product.price}</p>
                          </td>
                          <td className="align-middle border-0">
                            <span className="reset-anchor" onClick={() => deleteFromCart(cart.product)}><i className="fas fa-trash-alt small text-muted"></i></span>
                            </td>
                        </tr>)
                })
            }
            </tbody>
          </table>) : (
                <h2 className="h5 text-uppercase mb-4">Not Found Any Products in Shopping cart</h2>

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
      <div className="col-lg-4">
        <div className="card border-0 rounded-0 p-lg-4 bg-light">
          <div className="card-body">
            <h5 className="text-uppercase mb-4">Cart total</h5>
            <ul className="list-unstyled mb-0">
              <li className="d-flex align-items-center justify-content-between"><strong className="text-uppercase small font-weight-bold">Subtotal</strong><span className="text-muted small">${subTotal}</span></li>

              <li className="d-flex align-items-center justify-content-between"><strong className="text-uppercase small font-weight-bold">Tax (10%)</strong><span className="text-muted small">${tax}</span></li>
              <li className="border-bottom my-2"></li>
              <li className="d-flex align-items-center justify-content-between mb-4"><strong className="text-uppercase small font-weight-bold">Total</strong><span>${subTotal  + tax}</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>);
}

export default MyCart;