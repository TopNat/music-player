//import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import SkeletonPlayList from "./../Skeleton/SkeletonPlayList";
import s from './SideBar.module.scss';
//import { TIMESKELETON } from "../../constants";

const SideBar = ({isLoading, titlePage='main'}) => {
//console.log(titlePage);
    return (
    <div className={`${s.main__sidebar} ${s.sidebar}`}>
        <div className={s.sidebar__personal}>
            <p className={s['sidebar__personal-name']}>Sergey.Ivanov</p>
            <div className={s.sidebar__avatar}>
                
            </div>
        </div>

        <div className={s.sidebar__block}>
            <div className={s.sidebar__list}>
              
                {isLoading ? <SkeletonPlayList  className={s.sidebar__item} /> : 
                <div className={s.sidebar__item}>
                    {titlePage === 'main' &&
                    <NavLink to="/playlist/2" className={s.sidebar__link} >
                        <img className={s.sidebar__img} src="img/playlist01.png" alt="day's playlist" />
                    </NavLink>
                    }
                </div>
                }
                 {isLoading ? <SkeletonPlayList  className={s.sidebar__item} /> : 
                <div className={s.sidebar__item}>
                    {titlePage === 'main' &&
                    <NavLink to="/playlist/3" className={s.sidebar__link} >
                        <img className={s.sidebar__img} src="img/playlist02.png" alt="day's playlist" />
                    </NavLink>
}
                </div>
                }
                {isLoading ? <SkeletonPlayList  className={s.sidebar__item} /> : 
                <div className={s.sidebar__item}>
                    {titlePage === 'main' &&
                    <NavLink to="/playlist/4" className={s.sidebar__link}>
                        <img className={s.sidebar__img} src="img/playlist03.png" alt="day's playlist" />
                    </NavLink>
}
                </div>
                }
 
            </div>
        </div>


    </div>             
    );
}

export default SideBar;