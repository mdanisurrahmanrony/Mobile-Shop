import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Component/Navbar";
import Details from "./Component/Details";
import Cart from "./Component/Cart/Cart";
import NotFound from "./Component/NotFound";
import { Route, Switch } from "react-router-dom";
import ProductList from "./Component/ProductList";
import Modal from "./Component/Modal";

function App() {
    return (
        <React.Fragment>
            <Navbar />
            <Switch>
                <Route exact path="/" component={ProductList} />
                <Route path="/cart" component={Cart} />
                <Route path="/details" component={Details} />
                <Route component={NotFound} />
            </Switch>
            <Modal />
        </React.Fragment>
    );
}

export default App;
