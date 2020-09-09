import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { modalOpen, closeModal } = value;
                    const { img, title, price } = value.modalProduct;
                    if (!modalOpen) {
                        return null;
                    } else {
                        return (
                            <ModalContainer>
                                <div className="container">
                                    <div className="row">
                                        <div
                                            id="modal"
                                            className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
                                        >
                                            <h5>Item added to the cart</h5>
                                            <img
                                                src={img}
                                                className="img-fluid"
                                                alt=""
                                            />
                                            <h5> {title} </h5>
                                            <h5 className="text-muted">
                                                ${price}
                                            </h5>
                                            <Link to="/">
                                                <ButtonContainer
                                                    onClick={() => closeModal()}
                                                >
                                                    product
                                                </ButtonContainer>
                                            </Link>
                                            <Link to="/cart">
                                                <ButtonContainer
                                                    className="ml-2"
                                                    onClick={() => closeModal()}
                                                >
                                                    cart
                                                </ButtonContainer>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                        );
                    }
                }}
            </ProductConsumer>
        );
    }
}

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    #modal {
        background: var(--mainWhite);
    }
`;

export default Modal;
