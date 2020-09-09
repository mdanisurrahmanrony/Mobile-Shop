import React from "react";
import { ProductConsumer } from "../Context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

const Details = () => {
    return (
        <ProductConsumer>
            {value => {
                const {
                    title,
                    id,
                    img,
                    price,
                    company,
                    info,
                    inCart
                } = value.detailProduct;
                return (
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1> {title} </h1>
                            </div>
                            <div className="col-md-6 my-3">
                                <div className="img-detail">
                                    <img
                                        src={img}
                                        alt=""
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                            <div className="col-md-6 my-3">
                                <h2> Model : {title} </h2>
                                <h4 className="text-capitalize">
                                    Made By : {company}
                                </h4>
                                <h4>
                                    <strong>Price : ${price}</strong>
                                </h4>
                                <p className="font-weight-bold mb-0 mt-3 text-capitalize">
                                    Some Info About Product
                                </p>
                                <p className="text-muted text-justify">
                                    {info}
                                </p>
                                <Link to="/">
                                    <ButtonContainer>
                                        Back To Product
                                    </ButtonContainer>
                                </Link>

                                <ButtonContainer
                                    cart
                                    disabled={inCart ? true : false}
                                    className="ml-2"
                                    onClick={() => {
                                        value.openModal(id);
                                        value.addToCart(id);
                                    }}
                                >
                                    {inCart ? "inCart" : "add to cart"}
                                </ButtonContainer>
                            </div>
                        </div>
                    </div>
                );
            }}
        </ProductConsumer>
    );
};

export default Details;
