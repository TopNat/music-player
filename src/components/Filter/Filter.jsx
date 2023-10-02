import { useState } from "react";
import s from './Filter.module.scss';
import { useThemeContext } from '../../ThemeContext';
import { useSelector } from "react-redux";

const Filter = () => {

    const [visibleFilter, setVisibleFilter] = useState(null);    
    const toggleVisibleFilter = (filter) => {  
        setVisibleFilter(visibleFilter === filter ? null : filter);
    };
    
    const { theme } = useThemeContext();
  
    const filterAuthor = useSelector((state) => state.addAuthor.author);
    const filterGenre = useSelector((state) => state.addAuthor.genre);
  
    let setFilterAuthor = [];
    if (localStorage.getItem('setFilterAuthor') !== null) {
        setFilterAuthor = JSON.parse(localStorage.getItem('setFilterAuthor'));
    }
    
     let countAuthor = setFilterAuthor?.length;
    
     
     const [countAuthorState, setCountAuthorState] = useState(countAuthor);

    const setAuthor = (event) => {
        const target = event.target

        const authorName = target.textContent;   
     
        if (countAuthor > 0) {
        if (setFilterAuthor?.includes(authorName) === false) { setFilterAuthor.push(authorName);
         } else {
            setFilterAuthor = setFilterAuthor.filter((item) => item !== authorName);
         }
        } else { setFilterAuthor.push(authorName);}
        
        localStorage.setItem('setFilterAuthor', JSON.stringify(setFilterAuthor));
        
        setCountAuthorState(setFilterAuthor.length);

    }

    return (
        <div className={`${s.centerblock__filter} ${s.filter}`}>
            <div className={s.filter__title}>Искать по:</div>
           
            <div className={`${theme.name === 'light' ? s.filter__button_light : s.filter__button} ${s['button-author']} ${s['_btn-text']} ${visibleFilter === 'author' ? s['btn-text_activ'] : ''}`}  onClick={() => toggleVisibleFilter("author")}>исполнителю{countAuthorState > 0 &&<div className={s['filter__filter-author_count']}>{countAuthorState}</div>}</div>
            {visibleFilter === "author" && 
                <div className={s['filter__filter-author']}>                
                    <div className={s['filter__filter__list']}>
                        {filterAuthor.map((item,index) => <div className={setFilterAuthor?.includes(item) && s['filter__filter_set']} key={index} onClick={setAuthor}>{item}</div>)}   
                                       
                    </div>
                </div>  
            }
                        
            <div className={`${theme.name === 'light' ? s.filter__button_light : s.filter__button} ${s['button-author']} ${s['_btn-text']} ${visibleFilter === 'year' ? s['btn-text_activ'] : ''}`}  onClick={() => toggleVisibleFilter("year")}>году выпуска</div>
            {visibleFilter === "year" && 
                <div className={s['filter__filter-year']}> 
                    <div className={s.filter__radio}>
                        <div>
                            <input id="radio-1" type ="radio" name="radio" value="1" />
                            <label htmlFor ="radio-1">Более новые</label> 
                        </div>                               
                        <div>
                            <input id="radio-2" type ="radio" name="radio" value="2" />
                            <label htmlFor ="radio-2">Более старые </label> 
                        </div>                                                    
                    </div> 
                </div>  
            }    
            <div className={`${theme.name === 'light' ? s.filter__button_light : s.filter__button} ${s['button-author']} ${s['_btn-text']} ${visibleFilter === 'genre' ? s['btn-text_activ'] : ''}`}  onClick={() => toggleVisibleFilter("genre")}>жанру</div>
            {visibleFilter === "genre" && 
                <div className={s['filter__filter-genre']}>                
                    <div className={s['filter__filter__list']}>
                        {
                            filterGenre.map((item,index) => <div key={index}>{item}</div>)
                        }                                                            
                    </div>
                </div>  
            }            
        </div>        
    );
}

export default Filter;