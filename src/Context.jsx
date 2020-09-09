import React, { createContext, Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = createContext();

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: [],
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    };

    componentDidMount() {
        this.setProducts();
    }

    setProducts = () => {
        let tempProduct = [];
        storeProducts.map(item => {
            const singleItem = { ...item };
            tempProduct = [...tempProduct, singleItem];
        });
        this.setState(() => {
            return { products: tempProduct };
        });
    };

    getItem = id => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    };

    handleDetail = id => {
        const productDetail = this.getItem(id);
        this.setState(() => {
            return { detailProduct: productDetail };
        });
    };
    addToCart = id => {
        const tempProduct = [...this.state.products];
        const index = tempProduct.indexOf(this.getItem(id));
        const product = tempProduct[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(
            () => {
                return {
                    products: tempProduct,
                    cart: [...this.state.cart, product]
                };
            },
            () => {
                this.addTotals();
            }
        );
    };

    closeModal = () => {
        this.setState(() => {
            return { modalOpen: false };
        });
    };

    openModal = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return { modalProduct: product, modalOpen: true };
        });
    };

    increment = id => {
        let tempCart = [...this.state.cart];
        const selected = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selected);
        const product = tempCart[index];
        product.count = product.count + 1;
        product.total = product.count * product.price;

        this.setState(
            () => {
                return {
                    cart: [...tempCart]
                };
            },
            () => {
                this.addTotals();
            }
        );
    };

    decrement = id => {
        let tempCart = [...this.state.cart];
        const selected = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selected);
        const product = tempCart[index];
        product.count = product.count - 1;
        if (product.count === 0) {
            this.removeItem(id);
        } else {
            product.total = product.count * product.price;
            this.setState(
                () => {
                    return {
                        cart: [...tempCart]
                    };
                },
                () => {
                    this.addTotals();
                }
            );
        }
    };

    removeItem = id => {
        let tempProduct = [...this.state.products];
        let tempCart = [...this.state.cart];

        tempCart = tempCart.filter(item => item.id !== id);

        const index = tempProduct.indexOf(this.getItem(id));
        const removedItem = tempProduct[index];
        removedItem.count = 0;
        removedItem.total = 0;
        removedItem.inCart = false;
        this.setState(
            () => {
                return {
                    cart: [...tempCart],
                    products: [...tempProduct]
                };
            },
            () => {
                this.addTotals();
            }
        );
    };

    clearCart = id => {
        const cart = [];
        this.setState(
            () => {
                return {
                    cart: cart
                };
            },
            () => {
                this.setProducts();
                this.addTotals();
            }
        );
    };

    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total));
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total
            };
        });
    };

    render() {
        return (
            <ProductContext.Provider
                value={{
                    ...this.state,
                    handleDetail: this.handleDetail,
                    addToCart: this.addToCart,
                    openModal: this.openModal,
                    closeModal: this.closeModal,
                    increment: this.increment,
                    decrement: this.decrement,
                    removeItem: this.removeItem,
                    clearCart: this.clearCart
                }}
            >
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
