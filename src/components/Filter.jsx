import { useState } from "react";

const geners = [
    'Rock',
    'Pop',
    'Rap & Hip-Hop',
    'Easy Listening',
    'Dance & House',
    'Instrumental',
    'Metal',
    'Alternative',
    'Dubstep',
    'Jazz & Blues',
    'Drum & Bass',
    'Trance',
    'Chanson',
    'Ethnic',
    'Acoustic & Vocal',
    'Reggae',
    'Classical',
    'Indie Pop',
    'Speech',
    'Electropop & Disco',
    'Other'
  ]

const Filter = () => {

    const [visibleFilter, setVisibleFilter] = useState(null);
    
    const toggleVisibleFilter = (filter) => {  
        setVisibleFilter(visibleFilter === filter ? null : filter);
    };
    //console.log(visibleFilter);
    return (
        <div className="centerblock__filter filter">
            <div className="filter__title">Искать по:</div>
           
            <div className={`filter__button button-author _btn-text ${visibleFilter === 'author' ? 'btn-text_activ' : ''}`}  onClick={() => toggleVisibleFilter("author")}>исполнителю</div>
            {visibleFilter === "author" && 
                <div className="filter__filter-author">                
                    <div className="filter__filter__list">
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
                        
            <div className={`filter__button button-author _btn-text ${visibleFilter === 'year' ? 'btn-text_activ' : ''}`}  onClick={() => toggleVisibleFilter("year")}>году выпуска</div>
            {visibleFilter === "year" && 
                <div className="filter__filter-year"> 
                    <div className="filter__radio">
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

            <div className={`filter__button button-author _btn-text ${visibleFilter === 'genre' ? 'btn-text_activ' : ''}`}  onClick={() => toggleVisibleFilter("genre")}>жанру</div>
            {visibleFilter === "genre" && 
                <div className="filter__filter-genre">                
                    <div className="filter__filter__list">
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