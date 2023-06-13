import Filter from "./Filter";
import PlaylistItem from "./PlaylistItem";
import { useState, useEffect } from "react";
import Skeleton from "./Skeleton";

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
        const timer = setTimeout(() => {setIsLoading(false) },5000);
        return () => clearTimeout(timer);
      }, []);

   
    return (
        <div className="main__centerblock centerblock">
        <div className="centerblock__search search">
            <svg className="search__svg">
                <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
                </svg>
            <input className="search__text" type="search" placeholder="Поиск" name="search" />
        </div>
        <h2 className="centerblock__h2">Треки</h2>
        <Filter />    
        
          
        <div className="centerblock__content">  
            <div className="content__title playlist-title">
            <div className="playlist-title__col col01">Трек</div>
            <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
            <div className="playlist-title__col col03">АЛЬБОМ</div>
            <div className="playlist-title__col col04">
                <svg className="playlist-title__svg" alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
                </svg>
            </div>
            </div>
            {isLoading ? <Skeleton  className="content__playlist playlist" /> : 
                <div className="content__playlist playlist">  
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