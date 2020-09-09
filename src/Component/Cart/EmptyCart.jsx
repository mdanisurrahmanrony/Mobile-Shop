import React from "react";
import Title from "../Title";

const EmptyCart = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-10 mx-auto text-center">
                    <Title name="your cart" title="is empty" />
                </div>
            </div>
        </div>
    );
};

export default EmptyCart;
