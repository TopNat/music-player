/* eslint-disable no-undef */
import styles from './Bar.module.scss';
import BarVolumeBlock from "./../BarVolumeBlock";


const Bar = () => {
    return (
<div className={styles.bar}>
    <div className={styles.bar__content}>
        <div className={styles['bar__player-progress']}></div>
        <div className={styles['bar__player-block']}>
            <div className={`${styles.bar__player} ${styles.player}`}  >
                <div className={styles.player__controls}>
                    <div className={styles['player__btn-prev']}>
                        <svg className={styles['player__btn-prev-svg']} alt="prev">
                            <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                        </svg>                    
                    </div>
                    <div className={styles['player__btn-play _btn']}>
                        <svg className={styles['player__btn-play-svg']} alt="play">
                            <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                        </svg>
                    </div>
                    <div className={styles['player__btn-next']}>
                       
                    </div>
                    <div className={`${styles['player__btn-repeat']} ${styles['_btn-icon']}`}>
                       
                    </div>
                    <div className={`${styles['player__btn-shuffle']} ${styles['_btn-icon']}`}>
                        
                    </div>
                </div>
                
                <div className={`${styles['player__track-play']} ${styles['track-play']}`}>
                    <div className={styles['track-play__contain']}>
                        <div className={styles['track-play__image']}>
                            <svg className={styles['track-play__svg']} alt="music">
                                <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                            </svg>
                        </div>
                            <div className={styles['track-play__author']}>
                            <a className={styles['track-play__author-link']} href="http://">Ты та...</a>
                        </div>
                        <div className={styles['track-play__album']}>
                            <a className={styles['track-play__album-link']} href="http://">Баста</a>
                        </div>
                    </div>

                    <div className={styles['track-play__like-dis']}>
                        <div className={`${styles['track-play__like']} ${styles['_btn-icon']}`}>
                            <svg className={styles['track-play__like-svg']} alt="like">
                                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                            </svg>
                        </div>
                        <div className={`${styles['track-play__dislike']} ${styles['_btn-icon']}`}>
                            <svg className={styles['track-play__dislike-svg']} alt="dislike">
                                <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles['bar__volume-block']} ${styles.volume}`}>
               <BarVolumeBlock />
            </div>
        </div>
    </div>
</div>                 
    );
}


export default Bar;