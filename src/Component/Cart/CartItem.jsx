import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const CartItem = ({ item, value }) => {
    const { img, price, id, title, total, count } = item;
    const { increment, decrement, removeItem } = value;
    return (
        <div className="row my-2 align-items-center text-center text-capitalize">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} style={{ width: "5rem" }} alt="" />
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span>Product: </span> {title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span>Price: </span> ${price}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <div className="">
                    <span
                        className="btn btn-primary mx-1"
                        onClick={() => decrement(id)}
                    >
                        -
                    </span>
                    <span disabled className="btn bg-warning mx-1">
                        {count}
                    </span>
                    <span
                        className="btn btn-primary mx-1"
                        onClick={() => increment(id)}
                    >
                        +
                    </span>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={() => removeItem(id)}>
                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                {" "}
                <strong>{total}</strong>{" "}
            </div>
        </div>
    );
};

export default CartItem;
