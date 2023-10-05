import s from './List.module.scss';
import PlaylistItem from '../PlaylistItem';
import { useDispatch } from 'react-redux';
import { addPlayListMusic } from '../../store/playListSlice';

const List = ({ data }) => {
    const dispatch = useDispatch();

    function setListTrack(event) {
        event.preventDefault();
        dispatch(addPlayListMusic({ playList: data }));
    }

    return (
        <div className={s.centerblock__content}>
            <div className={`${s.content__title} ${s['playlist-title']}`}>
                <div className={`${s['playlist-title__col']} ${s.col01}`}>
                    Трек
                </div>
                <div className={`${s['playlist-title__col']} ${s.col02}`}>
                    ИСПОЛНИТЕЛЬ
                </div>
                <div className={`${s['playlist-title__col']} ${s.col03}`}>
                    АЛЬБОМ
                </div>
                <div className={`${s['playlist-title__col']} ${s.col04}`}>
                    <svg className={s['playlist-title__svg']} alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
                    </svg>
                </div>
            </div>

            <div
                className={`${s.content__playlist} ${s.playlist}`}
                onClick={(event) => setListTrack(event)}
            >
                {data.map((item, index) => (
                    <PlaylistItem
                        track_file={item.track_file}
                        id={item.id}
                        track={item.name}
                        author={item.author}
                        album={item.album}
                        time={(item.duration_in_seconds / 60).toFixed(2)}
                        key={index}
                        stared_user={item.stared_user}
                    />
                ))}
            </div>
        </div>
    );
};

export default List;
