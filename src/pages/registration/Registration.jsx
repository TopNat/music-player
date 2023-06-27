import s from './Registration.module.scss';

function Registration() {
    return (
        <div className={s.main_entry}>
       <div className={s.entry}>
       <div className={s.logo}>
                    <img className={s.logo__image} src="img/logo_b.png" alt="logo" />                    
        </div>
        <input type="text" className={s.login} placeholder='Логин'/>
            <input type="text" className={s.pasword} placeholder='Пароль'/>
            <input type="text" className={s.pasword} placeholder='Повторить пароль'/>                    
            <button className={s.button_reg}>Зарегистрироваться</button>
       </div>
        </div>
    );
}

export default Registration;