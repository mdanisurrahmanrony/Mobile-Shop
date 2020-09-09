import React from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../Context";

const ProductList = () => {
    return (
        <React.Fragment>
            <div className="py-5">
                <div className="container">
                    <Title name="our" title="product" />
                    <div className="row">
                        <ProductConsumer>
                            {value =>
                                value.products.map(product => (
                                    <Product
                                        key={product.id}
                                        product={product}
                                    />
                                ))
                            }
                        </ProductConsumer>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
    // <Product />;
};

export default ProductList;
