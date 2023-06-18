import s from './BarVolumeBlock.module.scss';

const BarVolumeBlock = () => {
    return (
        <div className={s.volume__content}>
            <div className={s.volume__image}>
               <svg className={s.volume__svg} alt="volume">
                    <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                </svg>
            </div>
            <div className={`${s.volume__progress} ${s._btn}`}>
                <input className={`{s['volume__progress-line']} {s._btn}`} type="range" name="range" />
            </div>                    
        </div>
    );
};

export default BarVolumeBlock;