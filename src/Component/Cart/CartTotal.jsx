import React from "react";
import { Link } from "react-router-dom";

const CartTotal = ({ value }) => {
    const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-right text-capitalize">
                        <Link to="/">
                            <button
                                className="btn btn-outline-danger px-5 mb-3 text-uppercase"
                                onClick={() => clearCart()}
                            >
                                clear cart
                            </button>
                        </Link>
                        <h5>
                            <span>Sub Total: </span>
                            <strong> {cartSubTotal} </strong>
                        </h5>
                        <h5>
                            <span>Tax: </span>
                            <strong> {cartTax} </strong>
                        </h5>
                        <h5>
                            <span>Total: </span>
                            <strong> {cartTotal} </strong>
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default CartTotal;
