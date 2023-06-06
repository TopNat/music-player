import BarVolumeBlock from "./BarVolumeBlock";

const Bar = () => {
    return (
<div className="bar">
    <div className="bar__content">
        <div className="bar__player-progress"></div>
        <div className="bar__player-block">
            <div className="bar__player player">
                <div className="player__controls">
                    <div className="player__btn-prev">
                        <svg className="player__btn-prev-svg" alt="prev">
                            <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                        </svg>                    
                    </div>
                    <div className="player__btn-play _btn">
                        <svg className="player__btn-play-svg" alt="play">
                            <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                        </svg>
                    </div>
                    <div className="player__btn-next">
                       
                    </div>
                    <div className="player__btn-repeat _btn-icon">
                       
                    </div>
                    <div className="player__btn-shuffle _btn-icon">
                        
                    </div>
                </div>
                
                <div className="player__track-play track-play">
                    <div className="track-play__contain">
                        <div className="track-play__image">
                            <svg className="track-play__svg" alt="music">
                                <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                            </svg>
                        </div>
                        <div className="track-play__author">
                            <a className="track-play__author-link" href="http://">Ты та...</a>
                        </div>
                        <div className="track-play__album">
                            <a className="track-play__album-link" href="http://">Баста</a>
                        </div>
                    </div>

                    <div className="track-play__like-dis">
                        <div className="track-play__like _btn-icon">
                            <svg className="track-play__like-svg" alt="like">
                                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                            </svg>
                        </div>
                        <div className="track-play__dislike _btn-icon">
                            <svg className="track-play__dislike-svg" alt="dislike">
                                <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bar__volume-block volume">
               <BarVolumeBlock />
            </div>
        </div>
    </div>
</div>                 
    );
}


export default Bar;