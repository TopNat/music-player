const BarVolumeBlock = () => {
    return (
        <div className="volume__content">
            <div className="volume__image">
               <svg className="volume__svg" alt="volume">
                    <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                </svg>
            </div>
            <div className="volume__progress _btn">
                <input className="volume__progress-line _btn" type="range" name="range" />
            </div>                    
        </div>
    );
};

export default BarVolumeBlock;