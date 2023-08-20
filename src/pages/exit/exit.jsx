import { useDispatch } from 'react-redux';
import s from '../app/App.module.scss';
import {  useNavigate} from 'react-router-dom';
import { addIdTrack, addPlayListMusic } from '../../store/playListSlice';

function Exit() {
    const dispatch = useDispatch ();
    localStorage.clear();
    /*localStorage.removeItem('access');
    localStorage*/

    dispatch(addPlayListMusic({playList: []}));
    dispatch(addIdTrack({idTrack: '', pathTrack: ''}));

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