import s from './NavMenu.module.scss';
import { NavLink } from "react-router-dom";

const NavMenu = () => {   

    return (
    <div className={`${s.nav__menu} ${s.menu}`}>
        <ul className={s.menu__list}>            
            <li className={s.menu__item}><NavLink to="/" className={s.menu__link}>Главное</NavLink></li>
            <li className={s.menu__item}><NavLink to="/playlist/5" className={s.menu__link}>Мой плейлист</NavLink></li>
            {
                localStorage.getItem('user') ? 
                <li className={s.menu__item}><NavLink to="/exit" className={s.menu__link}>Выйти</NavLink></li>
                :
                <li className={s.menu__item}><NavLink to="/entry" className={s.menu__link}>Войти</NavLink></li>
            }
        </ul>
    </div>
    );
};


export default NavMenu;