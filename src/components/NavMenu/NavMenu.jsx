import { useThemeContext } from '../../ThemeContext';
import { AccessCheck } from '../../services/storage';
import s from './NavMenu.module.scss';
import { NavLink } from "react-router-dom";

const NavMenu = () => {   

const { theme, toggleTheme } = useThemeContext();
    return (
    <div className={`${s.nav__menu} ${s.menu}`} >
        <ul className={s.menu__list}>            
            <li className={s.menu__item}>
                <NavLink to="/" className={theme.name === 'dark' ? `${s.menu__link}` : `${s.menu__link_dark}`}
                >Главное</NavLink></li>
            <li className={s.menu__item}><NavLink to="/favorite" className={theme.name === 'dark' ? `${s.menu__link}` : `${s.menu__link_dark}`}>Мой плейлист</NavLink></li>
            {
                AccessCheck() ? 
                <li className={s.menu__item}><NavLink to="/exit" className={theme.name === 'dark' ? `${s.menu__link}` : `${s.menu__link_dark}`}>Выйти</NavLink></li>
                :
                <li className={s.menu__item}><NavLink to="/entry" className={theme.name === 'dark' ? `${s.menu__link}` : `${s.menu__link_dark}`}>Войти</NavLink></li>
            }
        </ul>
        <div>
            {theme.name === 'light' ?
            <svg  alt="sun" className={s['menu__btn-sun']} onClick={toggleTheme}>
                <use xlinkHref="img/icon/sprite.svg#icon-sun"></use>
            </svg> 
            :
            <svg  alt="moon"  className={s['menu__btn-moon']} onClick={toggleTheme}>
                <use xlinkHref="img/icon/sprite.svg#icon-moon"></use>
            </svg> 
}
        </div> 
    </div>
    );
};


export default NavMenu;