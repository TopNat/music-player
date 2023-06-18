import { useState, useEffect } from "react";
import SkeletonPlayList from "./../Skeleton/SkeletonPlayList";
import s from './SideBar.module.scss';

const SideBar = () => {

    const [isLoadingList, setIsLoadingList] = useState(true); 
   
    useEffect(() => {        
        const timerList = setTimeout(() => {setIsLoadingList(false) },1000);
        return () => clearTimeout(timerList);
      }, []);

    return (
    <div className={`${s.main__sidebar} ${s.sidebar}`}>
        <div className={s.sidebar__personal}>
            <p className={s['sidebar__personal-name']}>Sergey.Ivanov</p>
            <div className={s.sidebar__avatar}>
                
            </div>
        </div>
        <div className={s.sidebar__block}>
            <div className={s.sidebar__list}>
                {isLoadingList ? <SkeletonPlayList  className={s.sidebar__item} /> : 
                <div className={s.sidebar__item}>
                    <a className={s.sidebar__link} href="#">
                        <img className={s.sidebar__img} src="img/playlist01.png" alt="day's playlist" />
                    </a>
                </div>
                }
                 {isLoadingList ? <SkeletonPlayList  className={s.sidebar__item} /> : 
                <div className={s.sidebar__item}>
                    <a className={s.sidebar__link} href="#">
                        <img className={s.sidebar__img} src="img/playlist02.png" alt="day's playlist" />
                    </a>
                </div>
                }
                {isLoadingList ? <SkeletonPlayList  className={s.sidebar__item} /> : 
                <div className={s.sidebar__item}>
                    <a className={s.sidebar__link} href="#">
                        <img className={s.sidebar__img} src="img/playlist03.png" alt="day's playlist" />
                    </a>
                </div>
                }
            </div>
        </div>
    </div>             
    );
}

export default SideBar;