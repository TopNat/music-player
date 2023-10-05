import { useThemeContext } from '../../ThemeContext';
import s from '../Search/Search.module.scss';

export const Search = ({ searchLine, setSearchLine }) => {
    const { theme } = useThemeContext();
    const onChangeInput = (event) => {
        const target = event.target;

        setSearchLine(target.value);
    };

    return (
        <div className={`${s.centerblock__search} ${s.search}`}>
            {theme.name === 'light' ? (
                <svg className={s.search__svg}>
                    <use xlinkHref="img/icon/sprite.svg#icon-search_light"></use>
                </svg>
            ) : (
                <svg className={s.search__svg}>
                    <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
                </svg>
            )}
            <input
                className={
                    theme.name === 'light'
                        ? `${s.search__text_light}`
                        : `${s.search__text}`
                }
                type="search"
                placeholder="Поиск"
                name="search"
                value={searchLine}
                onChange={onChangeInput}
            />
        </div>
    );
};
