import Brand from '../brand/Brand';
import CartWidget from '../cartWidget/CartWidget';
import NavList from '../navList/NavList'
import "./navbar.css";


function NavBar() {
    return (
        <div class="nav">

            <Brand />

            <NavList />

            <CartWidget />

        </div>
    );
}

export default NavBar;