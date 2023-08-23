import { useNavigate } from 'react-router-dom';
import { useSignupMutation, useGetTokenMutation } from '../../services/music';
import addTokenInStorage from '../../services/storage';
import s from './Registration.module.scss';

function Registration() {

  /*  const dataForm = {
        email: "Natalie@skypro.ru",
        password: "natalie123123",
        username: "Natalie@skypro.ru",
      };*/


      const navigate = useNavigate();
      const [registration] = useSignupMutation();
      const [token] =useGetTokenMutation();

      function registrationUser() {
        const formLogin= document.getElementById('login').value;
        const formPassword = document.getElementById('password').value;
        if (formLogin !== '' && formPassword !== '') {
            
            const dataForm = {
                email: formLogin,
                password: formPassword,
                username:  formLogin,
            };        
            
            registration(dataForm).then((data) => {
                console.log(data.data);
                token({
                    email: formLogin,
                    password: formPassword,
                }).then((data) => {
                    addTokenInStorage (data.data.access);    
                    navigate('/');  
                });    
                      
            });
      
           
        }

      }


    return (
        <div className={s.main_entry}>
       <div className={s.entry}>
       <div className={s.logo}>
                    <img className={s.logo__image} src="img/logo_b.png" alt="logo" />                    
        </div>
        <input type="text" className={s.login} placeholder='Логин' id='login' />
            <input type="text" className={s.pasword} placeholder='Пароль' id='password' />
            <input type="text" className={s.pasword} placeholder='Повторить пароль' id='password2' />                    
            <button className={s.button_reg} onClick={registrationUser}>Зарегистрироваться</button>
       </div>
        </div>
    );
}

export default Registration;