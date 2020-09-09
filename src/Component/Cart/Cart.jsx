import React from "react";
import Title from "../Title";
import CartColumn from "./CartColumn";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../Context";
import CartList from "./CartList";
import CartTotal from "./CartTotal";

const Cart = () => {
    return (
        <ProductConsumer>
            {value => {
                const { cart } = value;
                if (cart.length === 0) {
                    return (
                        <React.Fragment>
                            <EmptyCart />
                        </React.Fragment>
                    );
                } else {
                    return (
                        <React.Fragment>
                            <div className="my-5">
                                <Title name="your" title="cart" />
                            </div>
                            <CartColumn />
                            <CartList value={value} />
                            <CartTotal value={value} />
                        </React.Fragment>
                    );
                }
            }}
        </ProductConsumer>
    );
};

export default Cart;
