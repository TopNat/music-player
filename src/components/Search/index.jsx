import s from '../Search/Search.module.scss';

export const Search = () => {
    return (
        <div className={`${s.centerblock__search} ${s.search}`}>
            <svg className={s.search__svg}>
                <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
                </svg>
            <input className={s.search__text} type="search" placeholder="Поиск" name="search" />
        </div>        
    );
}