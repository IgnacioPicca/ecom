import { FaShoppingBag } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaTabletAlt } from "react-icons/fa";
import { GrApple } from "react-icons/gr";
import { BsSmartwatch } from "react-icons/bs";
import { MdDesktopMac } from "react-icons/md";
import { Link } from "react-router-dom";
import { cartContext } from "../../storage/CartContext";
import React, { useContext } from "react"

import "./navlist.css";




function NavList() {

    const { cart } = useContext(cartContext);
    const cartCant = cart.reduce((total, item) => total + item.cant, 0);

    return (

        <nav className="navbar">

            <ul className="nav-item-container">


                <span className="nav-item"><Link to="/" className="nav-link"><GrApple /></Link ></span>

                <li className="nav-item"  >
                    <Link to="/category/Computers" className="nav-link" ><MdDesktopMac /> Mac</Link >
                </li>
                <li className="nav-item">
                    <Link to="/category/iPad" className="nav-link" > <FaTabletAlt /> iPad </ Link>
                </li>
                <li className="nav-item">
                    <Link to="/category/iPhone" className="nav-link" > <FaMobileAlt /> iPhone</ Link>
                </li>
                <li className="nav-item">
                    <Link to="/category/iWatch" className="nav-link" > <BsSmartwatch /> Watch</ Link>
                </li >
            </ul >

            <span className="cart nav-item">
                <Link to="/cart">
                    <FaShoppingBag /> {cartCant}
                </Link>
            </span>

        </nav >
    )
}

export default NavList;