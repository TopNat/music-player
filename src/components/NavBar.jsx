import Burger from "./Burger";
import NavMenu from "./NavMenu";

const NavBar = () => {
    return (
            <nav className="main__nav nav">
                <div className="nav__logo logo">
                    <img className="logo__image" src="img/logo.png" alt="logo" />
                </div>
                <Burger />
                <NavMenu />
            </nav>        
    );
}




export default NavBar;