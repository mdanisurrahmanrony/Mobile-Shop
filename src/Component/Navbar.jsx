import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { ButtonContainer } from "./Button";

const Navbar = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navabr-expand-sm px-sm-5">
                <Link to="/">
                    <img src={logo} alt="" className="navbar-brnad" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            Product
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <FontAwesomeIcon icon={faCartPlus} />
                        </span>
                        My Cart
                    </ButtonContainer>
                </Link>
            </nav>
        </React.Fragment>
    );
};

export default Navbar;
