import PlaylistItem from '../../components/PlaylistItem/PlaylistItem';
import s from './playListPage.module.scss';
import { playlistData, titlePlayList } from '../../constants';
import NavBar from '../../components/NavBar/NavBar';
import Bar from '../../components/Bar/Bar';
import { Search } from '../../components/Search';
import SideBar from '../../components/SideBar/SideBar';
import { useParams } from 'react-router-dom';

function playListPage() {
    const params = useParams();

    return (
        <div className={s.container}>
            <main className={s.main}>
                <NavBar />

                <div className={`${s.main__centerblock} ${s.centerblock}`}>
                    <Search />
                    <h2 className={s.centerblock__h2}>
                        {titlePlayList[params.id - 1].title}
                    </h2>

                    <div className={s.centerblock__content}>
                        <div
                            className={`${s.content__title} ${s['playlist-title']}`}
                        >
                            <div
                                className={`${s['playlist-title__col']} ${s.col01}`}
                            >
                                Трек
                            </div>
                            <div
                                className={`${s['playlist-title__col']} ${s.col02}`}
                            >
                                ИСПОЛНИТЕЛЬ
                            </div>
                            <div
                                className={`${s['playlist-title__col']} ${s.col03}`}
                            >
                                АЛЬБОМ
                            </div>
                            <div
                                className={`${s['playlist-title__col']} ${s.col04}`}
                            >
                                <svg
                                    className={s['playlist-title__svg']}
                                    alt="time"
                                >
                                    <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
                                </svg>
                            </div>
                        </div>
                        <div className={`${s.content__playlist} ${s.playlist}`}>
                            {playlistData.map((item, index) => (
                                <PlaylistItem
                                    track={item.name}
                                    author={item.author}
                                    album={item.album}
                                    time={item.time}
                                    key={index}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <SideBar titlePage="playlist" />
            </main>
            <Bar />
            <footer className={s.footer}></footer>
        </div>
    );
}

export default playListPage;
