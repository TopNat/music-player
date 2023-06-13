import NavMenu from "./NavMenu";
import { useState } from "react";


const NavBar = () => {

  const [visibleMenu, setVisibleMenu] = useState(null);

  const toggleVisibleMenu = (menu) => {  
      setVisibleMenu(visibleMenu === menu ? null : menu);
  };

    return (
            <nav className="main__nav nav">
                <div className="nav__logo logo">
                    <img className="logo__image" src="img/logo.png" alt="logo" />
                </div>
                <div className="nav__burger burger"  onClick={() => toggleVisibleMenu("menu")}>
                    <span className="burger__line"></span>
                    <span className="burger__line"></span>
                    <span className="burger__line"></span>
                 </div>                  
                    {visibleMenu && <NavMenu />}                
            </nav>        
    );
}




export default NavBar;