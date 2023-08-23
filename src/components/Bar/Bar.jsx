/* eslint-disable no-undef */
import styles from './Bar.module.scss';
//import BarVolumeBlock from "./../BarVolumeBlock";
import { useState, useRef, useEffect} from 'react';
import { useThemeContext } from '../../ThemeContext';
import { useDispatch, useSelector } from 'react-redux';
import { addIdTrack } from '../../store/playListSlice';

//import addPlayListMusic from '../../store/playListSlice';



const Bar = () => {

    const refProgress = useRef(null);
    const refAudio = useRef(null);    
    const { theme } = useThemeContext();
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);  
   // const [btnRepeat, setBtnRepeat] = useState(false);
  //  const [btnShuffle, setBtnShuffle] = useState(false);    
    const dispatch = useDispatch (); 

    const playListPlay = useSelector((state) => state.addPlayListMusic.playList);
    const idTrack = useSelector((state) => state.addPlayListMusic.track.idTrack);
    let indexTrack = playListPlay.findIndex(track => track.id === idTrack);
    const pathTrack = playListPlay[indexTrack].track_file; //= useSelector((state) => state.addPlayListMusic.track.pathTrack);


    useEffect(() => {
     //   refAudio.current.play(); 
        window.audioPlay = setInterval(function() {                
           
            let audioTime = Math.round(refAudio.current.currentTime);                       
            let audioLength = Math.round(refAudio.current.duration);                

            if (audioTime < audioLength) { 
                setProgress((audioTime * 100) / audioLength);                        
            }            
           
        }, 1000);    
    })

    //console.log(idTrack);

    const volume = (event) => {
        const target = event.target.value / 100
        if (isPlaying) {
            refAudio.current.volume = target
        }
      }

    const playingButton = () => {
       // console.log(playListPlay);
        if (isPlaying) {   
            refAudio.current.pause();            
            setIsPlaying(false);          
            clearInterval(window.audioPlay);
        } else {                       
            refAudio.current.play(); 
           /* window.audioPlay = setInterval(function() {                
               
                let audioTime = Math.round(refAudio.current.currentTime);                       
                let audioLength = Math.round(refAudio.current.duration);                

                if (audioTime < audioLength) { 
                    setProgress((audioTime * 100) / audioLength);                        
                }                    
            }, 1000);    */
            setIsPlaying(true);
        }
      };       

      const next = () => {
        let nextId = playListPlay.findIndex(track => track.id === idTrack)+1;       
       let playListPlayLength = playListPlay.length;    
       if ( nextId < playListPlayLength) {
        dispatch(addIdTrack ({idTrack: playListPlay[nextId].id, pathTrack: playListPlay[nextId].track_file}));
       }
      }

      const previous = () => {
        let previousId = playListPlay.findIndex(track => track.id === idTrack)-1;      
       if (previousId >= 0) {
        dispatch(addIdTrack ({idTrack: playListPlay[previousId].id, pathTrack: playListPlay[previousId].track_file}));
       }
      }

    return (
<div className={theme.name === 'dark' ? `${styles.bar}` : `${styles.bar_light}`}>
       <audio ref={refAudio} src={pathTrack} autoPlay onPlay={() => setIsPlaying(true)} onPause={()=>setIsPlaying(false)}></audio>
    <div className={styles.bar__content}>
   
        <div className={styles['bar__player-progress']}>
        <div ref={refProgress} className={styles['bar__player-progress_fill']} style={{width: `${progress}%`}}></div>
        </div>
        <div className={styles['bar__player-block']}>
            <div className={`${styles.bar__player} ${styles.player}`}  >
                <div className={styles.player__controls}>
                    <div className={styles['player__btn-prev']}>
                        <svg className={styles['player__btn-prev-svg']} alt="prev" onClick={previous}>
                            <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                        </svg>                    
                    </div>
                    {!isPlaying ? (
                    <div className={`${styles['player__btn-play']} ${styles['_btn']}`} >
                    <svg className={styles['player__btn-play-svg']} alt="play" onClick={playingButton}>
                        <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                    </svg>
                    </div>
                    ) : (
                        <div className={`${styles['player__btn-play']} ${styles['_btn']}`} >
                        <svg className={styles['player__btn-play-svg']} alt="pause" onClick={playingButton}>
                            <use xlinkHref="img/icon/sprite.svg#icon-pause"></use>
                        </svg>
                    </div>
                    ) }

                    <div className={styles['player__btn-next']}>
                        <svg className={styles['player__btn-next-svg']} alt="next" onClick={next}>
                            <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                        </svg>                       
                    </div>
                    <div className={`${styles['player__btn-repeat']} ${styles['_btn-icon']}`}>
                        <svg className={styles['player__btn-repeat-svg']} alt="repeat">
                            <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                        </svg>                       
                    </div>
                    <div className={`${styles['player__btn-shuffle']} ${styles['_btn-icon']}`}>
                        <svg className={styles['player__btn-shuffle-svg']} alt="shuffle">
                            <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                        </svg>
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
                           
                            <a className={theme.name === 'dark' ? `${styles['track-play__author-link']}` : `${styles['track-play__author-link_light']}`} href="http://">{playListPlay[indexTrack].name}</a>
                        </div>
                        <div className={styles['track-play__album']}>
                            <a className={theme.name === 'dark' ? `${styles['track-play__album-link']}` : `${styles['track-play__album-link_light']}`} href="http://">{playListPlay[indexTrack].author}</a>
                        </div>
                    </div>

                    <div className={styles['track-play__like-dis']}>
                      {/*  <div className={`${styles['track-play__like']} ${styles['_btn-icon']}`}>
                            <svg className={styles['track-play__like-svg']} alt="like">
                                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                            </svg>
                        </div>
                        <div className={`${styles['track-play__dislike']} ${styles['_btn-icon']}`}>
                            <svg className={styles['track-play__dislike-svg']} alt="dislike">
                                <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                            </svg>
                    </div>*/}
                    </div>
                </div>
            </div>
            <div className={`${styles['bar__volume-block']} ${styles.volume}`}>
                <div className={styles.volume__content}>
                    <div className={styles.volume__image}>
                    <svg className={styles.volume__svg} alt="volume">
                            <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                        </svg>
                    </div>
                    <div className={`${styles.volume__progress} ${styles._btn}`}>
                        <input className={`{styles['volume__progress-line']} {styles._btn}`} type="range" name="range" onClick={volume} />
                    </div>                    
                </div>
            </div>
        </div>
    </div>
</div>                 
    );
}


export default Bar;