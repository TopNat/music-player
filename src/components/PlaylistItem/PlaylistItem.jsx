import { useDispatch } from 'react-redux';
import { useThemeContext } from '../../ThemeContext';
import { addIdTrack } from '../../store/playListSlice';
import s from './PlaylistItem.module.scss';
import {
    useLikeTrackMutation,
    useRefreshTokenMutation,
    useDislikeTrackMutation,
} from '../../services/music';
import { useLocation, useNavigate } from 'react-router-dom';

const PlaylistItem = (props) => {
    const { theme } = useThemeContext();
    const dispatch = useDispatch();
    const [setLike] = useLikeTrackMutation();
    const [disLike] = useDislikeTrackMutation();
    const [refresh] = useRefreshTokenMutation();
    let isFavorite = false;
    const location = useLocation();
    const navigate = useNavigate();

    const idUser = localStorage.getItem('id');
    let userLikes = props.stared_user;
    if (props.stared_user) {
        userLikes = userLikes.map((item) => item.id);

        isFavorite = userLikes.includes(Number(idUser));
    }
    if (location.pathname === '/favorite') {
        isFavorite = true;
    }

    function setIdTreck(event, idTrack, trackFile) {
        event.preventDefault();
        dispatch(addIdTrack({ idTrack: idTrack, pathTrack: trackFile }));
    }

    const idTrack = props.id;

    function like() {
        const refToken = localStorage.getItem('refresh');

        refresh(refToken).then((data) => {
            const newToken = data.data.access;
            localStorage.setItem('access', newToken);
            setLike({ id: idTrack, access: newToken });
        });
    }

    function dislike() {
        const refToken = localStorage.getItem('refresh');

        refresh(refToken).then((data) => {
            if (data.data?.access) {
                const newToken = data.data.access;
                localStorage.setItem('access', newToken);

                disLike({ id: idTrack, access: newToken });
            } else {
                localStorage.clear();
                navigate('/entry');
            }
        });
    }

    return (
        <div className={s.playlist__item}>
            <div className={`${s.playlist__track} ${s.track}`}>
                <div className={s.track__title}>
                    <div className={s['track__title-image']}>
                        <svg className={s['track__title-svg']} alt="music">
                            <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                    </div>
                    <div
                        className={s['track__title-text']}
                        onClick={(event) =>
                            setIdTreck(event, props.id, props.track_file)
                        }
                    >
                        <a
                            className={
                                theme.name === 'dark'
                                    ? `${s['track__title-link']}`
                                    : `${s['track__title-link_dark']}`
                            }
                            href="http://"
                        >
                            {props.track}{' '}
                            <span className={s['track__title-span']}></span>
                        </a>
                    </div>
                </div>
                <div className={s.track__author}>
                    <a
                        className={
                            theme.name === 'dark'
                                ? `${s['track__author-link']}`
                                : `${s['track__author-link_dark']}`
                        }
                        href="http://"
                    >
                        {props.author}
                    </a>
                </div>
                <div className={s.track__album}>
                    <a className={s['track__album-link']} href="http://">
                        {props.album}
                    </a>
                </div>
                <div className={s.track__time}>
                    {isFavorite ? (
                        <svg
                            className={s['track__time-svg']}
                            alt="time"
                            onClick={dislike}
                        >
                            <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                        </svg>
                    ) : (
                        <svg
                            className={s['track__time-svg']}
                            alt="time"
                            onClick={like}
                        >
                            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                        </svg>
                    )}

                    <span className={s['track__time-text']}>{props.time}</span>
                </div>
            </div>
        </div>
    );
};

export default PlaylistItem;
