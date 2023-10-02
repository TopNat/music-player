import NavMenu from "./../NavMenu";
import { useState } from "react";
import s from './NavBar.module.scss';
import { useThemeContext } from "../../ThemeContext";


const NavBar = () => {
    const {theme} = useThemeContext();
  const [visibleMenu, setVisibleMenu] = useState(null);

  const toggleVisibleMenu = (menu) => {  
      setVisibleMenu(visibleMenu === menu ? null : menu);
  };

    return (
            <nav className={`${s.main__nav} ${s.nav}`}  style={{backgroundColor: `${theme.background}`, color: `${theme.color}`}}>
                <div className={`${s.nav__logo} ${s.logo}`}>
                    {theme.name === 'light' ? (
                        <img className={s.logo__image} src="img/logo_b.png" alt="logo" /> 
                        ) : (
                        <img className={s.logo__image} src="img/logo.png" alt="logo" />                
                        ) }                  
                    
                </div>
              
                <div className={`${s.nav__burger} ${s.burger}`}  onClick={() => toggleVisibleMenu("menu")}>
                    <span className={s.burger__line}></span>
                    <span className={s.burger__line}></span>
                    <span className={s.burger__line}></span>
                 </div>                   
                    {visibleMenu && <NavMenu />}  
            
            </nav>        
    );
}

export default NavBar;