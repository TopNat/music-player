import { useState, useEffect } from "react";
import SkeletonPlayList from "./SkeletonPlayList";

const SideBar = () => {

    const [isLoadingList, setIsLoadingList] = useState(true); 
   
    useEffect(() => {        
        const timerList = setTimeout(() => {setIsLoadingList(false) },5000);
        return () => clearTimeout(timerList);
      }, []);

    return (
    <div className="main__sidebar sidebar">
        <div className="sidebar__personal">
            <p className="sidebar__personal-name">Sergey.Ivanov</p>
            <div className="sidebar__avatar">
                
            </div>
        </div>
        <div className="sidebar__block">
            <div className="sidebar__list">
                {isLoadingList ? <SkeletonPlayList  className="sidebar__item" /> : 
                <div className="sidebar__item">
                    <a className="sidebar__link" href="#">
                        <img className="sidebar__img" src="img/playlist01.png" alt="day's playlist" />
                    </a>
                </div>
                }
                 {isLoadingList ? <SkeletonPlayList  className="sidebar__item" /> : 
                <div className="sidebar__item">
                    <a className="sidebar__link" href="#">
                        <img className="sidebar__img" src="img/playlist02.png" alt="day's playlist" />
                    </a>
                </div>
                }
                {isLoadingList ? <SkeletonPlayList  className="sidebar__item" /> : 
                <div className="sidebar__item">
                    <a className="sidebar__link" href="#">
                        <img className="sidebar__img" src="img/playlist03.png" alt="day's playlist" />
                    </a>
                </div>
                }
            </div>
        </div>
    </div>             
    );
}

export default SideBar;