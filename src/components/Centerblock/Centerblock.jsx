import Filter from "./../Filter";
import PlaylistItem from "./../PlaylistItem";
import { useState, useEffect } from "react";
import Skeleton from "./../Skeleton/Skeleton";
import s from './Centerblock.module.scss';

let playlistData = [
    {id: 1, track:'Guilt', author:'Nero', album:'Elektro', time:'6:18'},
    {id: 2, track:'Elektro', author:'Ali Bakgor', album:'Welcome Reality', time:'4:44'},
    {id: 3, track:'I’m Fire', author:'Dynoro, Outwork, Mr. Gee', album:'Non Stop', time:'3:25'},
    {id: 4, track:'Guilt', author:'Nero', album:'Elektro', time:'6:18'},
    {id: 5, track:'Elektro', author:'Ali Bakgor', album:'Welcome Reality', time:'4:44'}
];     


const Centerblock = () => {   

    const [isLoading, setIsLoading] = useState(true); 
   
    useEffect(() => {        
        const timer = setTimeout(() => {setIsLoading(false) },1000);
        return () => clearTimeout(timer);
      }, []);

   
    return (
        <div className={`${s.main__centerblock} ${s.centerblock}`}>
        <div className={`${s.centerblock__search} ${s.search}`}>
            <svg className={s.search__svg}>
                <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
                </svg>
            <input className={s.search__text} type="search" placeholder="Поиск" name="search" />
        </div>
        <h2 className={s.centerblock__h2}>Треки</h2>
        <Filter />    
        
          
        <div className={s.centerblock__content}>  
            <div className={`${s.content__title} ${s['playlist-title']}`}>
            <div className={`${s['playlist-title__col']} ${s.col01}`}>Трек</div>
            <div className={`${s['playlist-title__col']} ${s.col02}`}>ИСПОЛНИТЕЛЬ</div>
            <div className={`${s['playlist-title__col']} ${s.col03}`}>АЛЬБОМ</div>
            <div className={`${s['playlist-title__col']} ${s.col04}`}>
                <svg className={s['playlist-title__svg']} alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
                </svg>
            </div>
            </div>
            {isLoading ? <Skeleton  className={`${s.content__playlist} ${s.playlist}`} /> : 
                <div className={`${s.content__playlist} ${s.playlist}`}>  
                {
                    playlistData.map((item,index) => <PlaylistItem track={item.track} author={item.author} album={item.album} time={item.time} key={index} />)
                
                }              
                    
                </div>  
             }  
        </div>
            
    </div>
        );
};


export default Centerblock;