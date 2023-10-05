import { useState } from 'react';
import s from './Filter.module.scss';
import { useThemeContext } from '../../ThemeContext';
import { useSelector } from 'react-redux';

const Filter = ({
    filteredAuthors,
    setFilteredAuthors,
    filteredGenre,
    setFilteredGenre,
    filteredDate,
    setFilteredDate,
}) => {
    const [visibleFilter, setVisibleFilter] = useState(null);
    const toggleVisibleFilter = (filter) => {
        setVisibleFilter(visibleFilter === filter ? null : filter);
    };

    const { theme } = useThemeContext();

    const filterAuthor = useSelector((state) => state.addAuthor.author);
    const filterGenre = useSelector((state) => state.addAuthor.genre);

    /* Локальная переменная, подписанная на состояние, будет всегда с актуальным значением 
    этого состояния */
    let countAuthor = filteredAuthors?.length;

    const setAuthor = (event) => {
        const target = event.target;
        const authorName = target.textContent;

        if (countAuthor > 0) {
            if (filteredAuthors?.includes(authorName) === false) {
                setFilteredAuthors([...filteredAuthors, authorName]);
            } else {
                const newFilteredAuthors = filteredAuthors.filter(
                    (item) => item !== authorName
                );
                setFilteredAuthors(newFilteredAuthors);
            }
        } else {
            setFilteredAuthors([...filteredAuthors, authorName]);
        }
    };
    /* Локальная переменная, подписанная на состояние, будет всегда с актуальным значением 
    этого состояния */
    let countGenre = filteredGenre?.length;

    const setGenre = (event) => {
        const target = event.target;
        const ganreName = target.textContent;

        if (countGenre > 0) {
            if (filteredGenre?.includes(ganreName) === false) {
                setFilteredGenre([...filteredGenre, ganreName]);
            } else {
                const newFilteredGenre = filteredGenre.filter(
                    (item) => item !== ganreName
                );
                setFilteredGenre(newFilteredGenre);
            }
        } else {
            setFilteredGenre([...filteredGenre, ganreName]);
        }
    };

    const sortDate = (event) => {
        const target = event.target;
        const sort = target.value;

        setFilteredDate(sort);
    };

    return (
        <div className={`${s.centerblock__filter} ${s.filter}`}>
            <div className={s.filter__title}>Искать по:</div>

            <div
                className={`${
                    theme.name === 'light'
                        ? s.filter__button_light
                        : s.filter__button
                } ${s['button-author']} ${s['_btn-text']} ${
                    visibleFilter === 'author' ? s['btn-text_activ'] : ''
                }`}
                onClick={() => toggleVisibleFilter('author')}
            >
                исполнителю
                {countAuthor > 0 && (
                    <div className={s['filter__filter-author_count']}>
                        {countAuthor}
                    </div>
                )}
            </div>
            {visibleFilter === 'author' && (
                <div className={s['filter__filter-author']}>
                    <div className={s['filter__filter__list']}>
                        {filterAuthor.map((item, index) => (
                            <div
                                className={
                                    filteredAuthors?.includes(item) &&
                                    s['filter__filter_set']
                                }
                                key={index}
                                onClick={setAuthor}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div
                className={`${
                    theme.name === 'light'
                        ? s.filter__button_light
                        : s.filter__button
                } ${s['button-author']} ${s['_btn-text']} ${
                    visibleFilter === 'year' ? s['btn-text_activ'] : ''
                }`}
                onClick={() => toggleVisibleFilter('year')}
            >
                году выпуска
            </div>
            {visibleFilter === 'year' && (
                <div className={s['filter__filter-year']}>
                    <div className={s.filter__radio}>
                        <div>
                            <input
                                id="radio-1"
                                type="radio"
                                name="radio"
                                value="1"
                                onClick={sortDate}
                                checked={filteredDate == 1 && 1}
                            />
                            <label htmlFor="radio-1">Более новые</label>
                        </div>
                        <div>
                            <input
                                id="radio-2"
                                type="radio"
                                name="radio"
                                value="2"
                                onClick={sortDate}
                                checked={filteredDate == 2 && 2}
                            />
                            <label htmlFor="radio-2">Более старые </label>
                        </div>
                    </div>
                </div>
            )}
            <div
                className={`${
                    theme.name === 'light'
                        ? s.filter__button_light
                        : s.filter__button
                } ${s['button-author']} ${s['_btn-text']} ${
                    visibleFilter === 'genre' ? s['btn-text_activ'] : ''
                }`}
                onClick={() => toggleVisibleFilter('genre')}
            >
                жанру
                {countGenre > 0 && (
                    <div className={s['filter__filter-genre_count']}>
                        {countGenre}
                    </div>
                )}
            </div>
            {visibleFilter === 'genre' && (
                <div className={s['filter__filter-genre']}>
                    <div className={s['filter__filter__list']}>
                        {filterGenre.map((item, index) => (
                            <div
                                key={index}
                                className={
                                    filteredGenre?.includes(item) &&
                                    s['filter__filter_set']
                                }
                                onClick={setGenre}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Filter;
