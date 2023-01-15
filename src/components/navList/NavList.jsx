import { FaShoppingBag } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaTabletAlt } from "react-icons/fa";
import { GrApple } from "react-icons/gr";
import { BsSmartwatch } from "react-icons/bs";
import { MdDesktopMac } from "react-icons/md";
import "./navlist.css";
import { Link } from "react-router-dom";


function NavList() {
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

            <span className="cart nav-item"><FaShoppingBag /> </span>

        </nav >
    )
}

export default NavList;