import { FaShoppingBag } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaTabletAlt } from "react-icons/fa";
import { GrApple } from "react-icons/gr";
import { BsSmartwatch } from "react-icons/bs";
import { MdDesktopMac } from "react-icons/md";
import "./navlist.css";


function NavList() {
    return (

        <nav class="navbar">

            <ul class="nav-item-container">

                <span class="nav-item"><GrApple /> </span>

                <li class="nav-item" >
                    <a href="/" class="nav-link" > <MdDesktopMac /> Mac</a>
                </li>
                <li class="nav-item">
                    <a href="/" class="nav-link" > <FaTabletAlt /> iPad </a>
                </li>
                <li class="nav-item">
                    <a href="/" class="nav-link" > <FaMobileAlt /> iPhone</a>
                </li>
                <li class="nav-item">
                    <a href="/" class="nav-link" > <BsSmartwatch /> Watch</a>
                </li>
            </ul>

            <span class="cart nav-item"><FaShoppingBag /> </span>

        </nav>
    )
}

export default NavList;