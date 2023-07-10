import Filter from "./../Filter";
import PlaylistItem from "./../PlaylistItem";
//import { useState, useEffect } from "react";
import Skeleton from "./../Skeleton/Skeleton";
import s from './Centerblock.module.scss';
import { playlistData, titlePlayList } from "../../constants";
import { Search } from "../Search";  
  

const Centerblock = ({isLoading}) => {
    
    const ARR = [3];    
  
    return (
        <div className={`${s.main__centerblock} ${s.centerblock}`}>
        <Search />

        <h2 className={s.centerblock__h2}>{titlePlayList[0].title}</h2>
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
            {isLoading ? ARR.map((item,index) => <Skeleton  className={`${s.content__playlist} ${s.playlist}`} key = {index} />) : 
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