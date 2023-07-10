import s from '../app/App.module.scss';
import {  useNavigate} from 'react-router-dom';

function Exit() {
localStorage.clear();
const navigate = useNavigate();


const buttonClickEntry = () => {  

    navigate('/entry');
}


    return (
        <div className={s.container}>
            <main className={s.main}>  
                <div>
                    Почему Вы ушли? Нам очень жаль...
                    <button className={s.button_entry} onClick={buttonClickEntry}>Вернуться</button> 
                </div>  
            
            </main>
        </div>
    );
}

export default Exit;