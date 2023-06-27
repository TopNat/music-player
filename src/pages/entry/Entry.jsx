import {  useNavigate} from 'react-router-dom';
//import { useState } from "react";
import s from './Entry.module.scss';

function Entry() {
    const navigate = useNavigate();

    const buttonClickReg = () => {
        navigate('/reg', {replace: true});
    }

     const buttonClickEntry = () => {  
     
        localStorage.setItem('user', 'Natalie');
        navigate('/');
    }

    return (
        <div className={s.main_entry}>
       <div className={s.entry}>
       <div className={s.logo}>
            <img className={s.logo__image} src="img/logo_b.png" alt="logo" />                    
        </div>
        <input type="text" className={s.login} placeholder='Логин'/>
                    <input type="text" className={s.pasword} placeholder='Пароль'/>
                    <button className={s.button_entry} onClick={buttonClickEntry}>Войти</button>  
                    <button className={s.button_reg} onClick={buttonClickReg}>Зарегистрироваться</button>
       </div>
        </div>
    );
}

export default Entry;