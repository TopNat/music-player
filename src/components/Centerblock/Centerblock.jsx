import Filter from './../Filter';
//import Skeleton from "./../Skeleton/Skeleton";
import s from './Centerblock.module.scss';
import { titlePlayList } from '../../constants';
import { Search } from '../Search';
import { useGetAllMusicQuery } from '../../services/music';
import List from '../List/List';
import { useDispatch } from 'react-redux';
import { addAuthor, addGenre } from '../../store/filterSlice';
import { useState } from 'react';
import { compareAsc, compareDesc } from 'date-fns';

const Centerblock = (/*{isLoading}*/) => {
    const [filteredAuthors, setFilteredAuthors] = useState([]);
    const [filteredGenre, setFilteredGenre] = useState([]);
    const [filteredDate, setFilteredDate] = useState(0);
    const [searchLine, setSearchLine] = useState('');

    const dispatch = useDispatch();

    const { data, isLoading: isLoad } = useGetAllMusicQuery();
    let filterAuthor = [];
    let filterGenre = [];

    if (data?.length) {
        data.map((item) => {
            if (filterAuthor.includes(item.author) === false) {
                filterAuthor.push(item.author);
            }
            if (filterGenre.includes(item.genre) === false) {
                filterGenre.push(item.genre);
            }
        });

        dispatch(addAuthor({ author: filterAuthor }));
        dispatch(addGenre({ genre: filterGenre }));
    }

    let isEmptyList = !isLoad && !data?.length;

    /* Функция, которая вернет либо отфильтрованные данные, либо как есть */
    const filterTracks = () => {
        let newTracks = data;

        if (filteredAuthors.length > 0) {
            newTracks = newTracks.filter((track) =>
                filteredAuthors.includes(track.author)
            );
        }

        if (filteredGenre.length > 0) {
            newTracks = newTracks.filter((track) =>
                filteredGenre.includes(track.genre)
            );
        }

        if (filteredDate > 0) {
            if (filteredDate == 1) {
                newTracks = [...newTracks].sort((a, b) =>
                    compareDesc(
                        new Date(a.release_date),
                        new Date(b.release_date)
                    )
                );
            } else if (filteredDate == 2) {
                newTracks = [...newTracks].sort((a, b) =>
                    compareAsc(
                        new Date(a.release_date),
                        new Date(b.release_date)
                    )
                );
            }
        }

        if (searchLine != '') {
            newTracks = newTracks.filter((item) =>
                item.name
                    .toLocaleLowerCase()
                    .includes(searchLine.toLocaleLowerCase())
            );
        }

        return newTracks;
    };

    /* Запишем в локальную переменную треки */
    const tracks = filterTracks();

    return (
        <div className={`${s.main__centerblock} ${s.centerblock}`}>
            <Search searchLine={searchLine} setSearchLine={setSearchLine} />
            <h2 className={s.centerblock__h2}>{titlePlayList[0].title}</h2>
            <Filter
                filteredAuthors={filteredAuthors}
                setFilteredAuthors={setFilteredAuthors}
                filteredGenre={filteredGenre}
                setFilteredGenre={setFilteredGenre}
                filteredDate={filteredDate}
                setFilteredDate={setFilteredDate}
            />
            {isLoad ? (
                <p>Loading...</p>
            ) : isEmptyList ? (
                <p>No music!</p>
            ) : (
                tracks && <List data={tracks} />
            )}
        </div>
    );
};

export default Centerblock;
