import {  useNavigate} from 'react-router-dom';
//import { useState } from "react";
import s from './Entry.module.scss';
import { useState } from 'react';
import { useLoginMutation, useGetTokenMutation} from "../../services/music";
import addTokenInStorage from '../../services/storage';


function Entry() {
    const navigate = useNavigate();
    const [login, setLogin] = useState("");
    const [useLogin, {isLoading} ] = useLoginMutation();        
    const [token] =useGetTokenMutation();
    const [message, setMessage] = useState('');

    const buttonClickReg = () => {
        navigate('/reg', {replace: true});
    }

    const onLoginChange = (evt) => {
        setLogin(evt.target.value);
    };

    const buttonClickEntry = (event) => {  

        event.preventDefault();        

       /* const dataForm = {
            email: "Natalie@skypro.ru",
            password: "natalie123123",   
            id: 984,
            username: "Natalie",       
          };*/
      
      //  console.log(resLogin);
      
      const formLogin= document.getElementById('login').value;
      const formPassword = document.getElementById('password').value;
 
      if (formLogin !== '' && formPassword !== '') {     
        const dataForm = {
            email: formLogin,
            password: formPassword,       
        };     
        useLogin(dataForm).then((user) => {  
          //  console.log(user);
            token(dataForm).then((data) => {
            //console.log(data);

             if (data.error?.status) {
                switch (data.error.status) { 
                    case 400, 401:               
                        setMessage('Неверный логин или пароль!');
                        break;
                    case 500:               
                        setMessage('Сервер сломался');
                        break;  
                }
            }  
            if (data.data?.access) {
                addTokenInStorage (data.data.access, data.data.refresh, user.data.id, user.data.username);
                navigate('/');    
            } 

        
            //console.log(message);
            });  
        } ) 
}
        
       
      
}   

    return (
        <div className={s.main_entry}>
       <div className={s.entry}>
       <div className={s.logo}>
            <img className={s.logo__image} src="img/logo_b.png" alt="logo" />                    
        </div>
            <form id="formLogIn" className={s.entry}>
                    <input type="text" className={s.login} placeholder='Логин' onChange={onLoginChange} value = {login} id='login' />
                    <input type="text" className={s.pasword} placeholder='Пароль' id='password' />
                    {<p className={s.error}>{message}</p>}
                    <button className={s.button_entry} onClick={buttonClickEntry}  disabled={isLoading}>Войти</button>  
                    <button className={s.button_reg} onClick={buttonClickReg}>Зарегистрироваться</button>
            </form>
       </div>
        </div>
    );
}

export default Entry;