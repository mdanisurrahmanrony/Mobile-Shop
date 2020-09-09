import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { ProductConsumer } from "../Context";

const Product = props => {
    const { img, id, title, price, inCart } = props.product;
    return (
        <ProductWrapper className="col-md-3 my-3">
            <div className="card">
                <ProductConsumer>
                    {Value => (
                        <div
                            className="img-container p-5"
                            onClick={() => Value.handleDetail(id)}
                        >
                            <Link to="/details">
                                <img
                                    src={img}
                                    alt="product"
                                    className="card-img-top"
                                />
                            </Link>
                            <button
                                className="cart-btn"
                                disabled={inCart ? true : false}
                                onClick={() => {
                                    Value.openModal(id);
                                    Value.addToCart(id);
                                }}
                            >
                                {inCart ? (
                                    <p
                                        className="text-capotalize pb-0 mb-0"
                                        disabled
                                    >
                                        in cart
                                    </p>
                                ) : (
                                    <FontAwesomeIcon
                                        icon={faCartPlus}
                                    ></FontAwesomeIcon>
                                )}
                            </button>
                        </div>
                    )}
                </ProductConsumer>
                <div className="card-footer d-flex justify-content-between">
                    <p className="align-self-center mb-0"> {title} </p>
                    <h5 className="font-italic mb-0">
                        <span>$</span> {price}
                    </h5>
                </div>
            </div>
        </ProductWrapper>
    );
};

const ProductWrapper = styled.div`
    .card {
        border-color: transparent;
        transition: all 1s linear;
    }
    .card-footer {
        background: transparent;
        transition: all 1s linear;
        border-top: transparent;
    }
    &:hover {
        .card {
            box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
        }
        .card-footer {
            background: rgba(247, 247, 247);
        }
    }

    .img-container {
        position: relative;
        overflow: hidden;
    }
    .card-img-top {
        transition: all 0.5s linear;
    }
    &:hover {
        .card-img-top {
            transform: scale(1.2);
        }
    }
    .cart-btn {
        position: absolute;
        bottom: 0;
        right: 0;
        border: transparent;
        font-size: 1.4rem;
        padding: 0.2rem 0.4rem;
        background: orange;
        color: white;
        border-radius: 0.5rem 0 0 0;
        transform: translate(100%, 100%);
        transition: all 0.5s linear;
    }

    .img-container: hover .cart-btn {
        transform: translate(0, 0);
    }
    .cart-btn:hover {
        color: black;
    }
`;

export default Product;
