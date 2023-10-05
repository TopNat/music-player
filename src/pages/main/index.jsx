import s from '../app/App.module.scss';
import Bar from '../../components/Bar';
import NavBar from '../../components/NavBar';
import SideBar from '../../components/SideBar';
import Centerblock from '../../components/Centerblock';
import PlayListComp from '../../components/PlayListComp';
import { useState, useEffect } from 'react';
import { TIMESKELETON } from '../../constants';
import { useThemeContext } from '../../ThemeContext';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Favorite from '../../components/Favorite/Favorite';

function MainP() {
    const location = useLocation();
    const { theme } = useThemeContext();

    const idTrack = useSelector(
        (state) => state.addPlayListMusic.track.idTrack
    );

    const [isLoadingList, setIsLoadingList] = useState(true);

    useEffect(() => {
        const timerList = setTimeout(() => {
            setIsLoadingList(false);
        }, TIMESKELETON);
        return () => clearTimeout(timerList);
    }, []);

    return (
        <div
            className={s.container}
            style={{
                backgroundColor: `${theme.background}`,
                color: `${theme.color}`,
            }}
        >
            <main className={s.main}>
                <NavBar />

                {location.pathname === '/' && (
                    <Centerblock isLoading={isLoadingList} />
                )}
                {location.pathname.includes('playlist') && (
                    <PlayListComp isLoading={isLoadingList} />
                )}
                {location.pathname.includes('favorite') && (
                    <Favorite isLoading={isLoadingList} />
                )}
                {location.pathname === '/' && (
                    <SideBar isLoading={isLoadingList} />
                )}
            </main>
            {idTrack && <Bar />}
            <footer className={s.footer}></footer>
        </div>
    );
}

export default MainP;
