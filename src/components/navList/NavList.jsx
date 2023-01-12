import brand from '../../assets/brand.png';
import { FaShoppingBag } from "react-icons/fa";

function NavList() {
    return (

        <nav class="navbar">

            <img src={brand} alt="brand-logo" class="brand"></img>

            <ul class="nav-item-container">
                <li class="nav-item" >
                    <a href="/" class="nav-link" >Mac</a>
                </li>
                <li class="nav-item">
                    <a href="/" class="nav-link" >iPad</a>
                </li>
                <li class="nav-item">
                    <a href="/" class="nav-link" >iPhone</a>
                </li>
                <li class="nav-item">
                    <a href="/" class="nav-link" >Watch</a>
                </li>
            </ul>

            <span class="cart nav-item"><FaShoppingBag />  5</span>

        </nav>
    )
}

export default NavList;