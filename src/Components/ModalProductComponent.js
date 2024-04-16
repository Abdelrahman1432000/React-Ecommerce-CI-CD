const ModalProductComponent = () => {
    return (
    <div className="modal fade" id="productView" tabIndex="-1" role="dialog" aria-hidden="true">
    <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-body p-0">
          <div className="row align-items-stretch">
            <div className="col-lg-6 p-lg-0"><a className="product-view d-block h-100 bg-cover bg-center" style={{background: "url(img/product-5.jpg)"}} href="img/product-5.jpg" data-lightbox="productview" title="Red digital smartwatch"></a><a className="d-none" href="img/product-5-alt-1.jpg" title="Red digital smartwatch" data-lightbox="productview"></a><a className="d-none" href="img/product-5-alt-2.jpg" title="Red digital smartwatch" data-lightbox="productview"></a></div>
            <div className="col-lg-6">
              <button className="close p-4" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
              <div className="p-5 my-md-4">
                <ul className="list-inline mb-2">
                  <li className="list-inline-item m-0"><i className="fas fa-star small text-warning"></i></li>
                  <li className="list-inline-item m-0"><i className="fas fa-star small text-warning"></i></li>
                  <li className="list-inline-item m-0"><i className="fas fa-star small text-warning"></i></li>
                  <li className="list-inline-item m-0"><i className="fas fa-star small text-warning"></i></li>
                  <li className="list-inline-item m-0"><i className="fas fa-star small text-warning"></i></li>
                </ul>
                <h2 className="h4">Red digital smartwatch</h2>
                <p className="text-muted">$250</p>
                <p className="text-small mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.</p>
                <div className="row align-items-stretch mb-4">
                  <div className="col-sm-7 pr-sm-0">
                    <div className="border d-flex align-items-center justify-content-between py-1 px-3"><span className="small text-uppercase text-gray mr-4 no-select">Quantity</span>
                      <div className="quantity">
                        <button className="dec-btn p-0"><i className="fas fa-caret-left"></i></button>
                        <input className="form-control border-0 shadow-0 p-0" type="text" value="1" />
                        <button className="inc-btn p-0"><i className="fas fa-caret-right"></i></button>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-5 pl-sm-0"><a className="btn btn-dark btn-sm btn-block h-100 d-flex align-items-center justify-content-center px-0" href="cart.html">Add to cart</a></div>
                </div><a className="btn btn-link text-dark p-0" href="#"><i className="far fa-heart mr-2"></i>Add to wish list</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default ModalProductComponent;