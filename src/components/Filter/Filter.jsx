import { useState } from "react";
import s from './Filter.module.scss';
import { geners } from "../../constants";
import { useThemeContext } from '../../ThemeContext';



const Filter = () => {

    const [visibleFilter, setVisibleFilter] = useState(null);
    
    const toggleVisibleFilter = (filter) => {  
        setVisibleFilter(visibleFilter === filter ? null : filter);
    };
    const { theme } = useThemeContext();
    //console.log(visibleFilter);
    return (
        <div className={`${s.centerblock__filter} ${s.filter}`}>
            <div className={s.filter__title}>Искать по:</div>
           
            <div className={`${theme.name === 'light' ? s.filter__button_light : s.filter__button} ${s['button-author']} ${s['_btn-text']} ${visibleFilter === 'author' ? s['btn-text_activ'] : ''}`}  onClick={() => toggleVisibleFilter("author")}>исполнителю</div>
            {visibleFilter === "author" && 
                <div className={s['filter__filter-author']}>                
                    <div className={s['filter__filter__list']}>
                        <div>Frank Sinatra</div>
                        <div>Michael Jackson</div>
                        <div>Calvin Harris</div>
                        <div>Zhu</div>
                        <div>Arctic Monkeys</div>
                        <div>Frank Sinatra</div>
                        <div>Michael Jackson</div>
                        <div>Calvin Harris</div>
                        <div>Zhu</div>
                        <div>Arctic Monkeys</div>
                        <div>Frank Sinatra</div>
                        <div>Michael Jackson</div>
                        <div>Calvin Harris</div>
                        <div>Zhu</div>
                        <div>Arctic Monkeys</div>
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
                            geners.map((item,index) => <div key={index}>{item}</div>)
                        }
                                                            
                    </div>
                </div>  
            }            
        </div>        
    );
}

export default Filter;