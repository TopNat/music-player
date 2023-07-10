import { useThemeContext } from '../../ThemeContext';
import s from './PlaylistItem.module.scss';

const PlaylistItem = (props) => {
    const { theme } = useThemeContext();

    return (
        <div className={s.playlist__item}>
        <div className={`${s.playlist__track} ${s.track}`}>                        
            <div className={s.track__title}>
                <div className={s['track__title-image']}>
                    <svg className={s['track__title-svg']} alt="music">
                        <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                </div>
                <div className={s['track__title-text']}>
                    <a className={theme.name === 'dark' ? `${s['track__title-link']}` : `${s['track__title-link_dark']}`} href="http://">{props.track} <span className={s['track__title-span']}></span></a>
                </div>
            </div>
            <div className={s.track__author}>
                <a className={theme.name === 'dark' ? `${s['track__author-link']}` : `${s['track__author-link_dark']}`} href="http://">{props.author}</a>
            </div>
            <div className={s.track__album}>
                <a className={s['track__album-link']} href="http://">{props.album}</a>
            </div>
            <div className={s.track__time}>
                <svg className={s['track__time-svg']} alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className={s['track__time-text']}>{props.time}</span>
            </div>
        </div>
    </div>

    );
};


export default PlaylistItem;