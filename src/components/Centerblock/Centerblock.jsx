import Filter from "./../Filter";

//import Skeleton from "./../Skeleton/Skeleton";
import s from './Centerblock.module.scss';
import { titlePlayList } from "../../constants";
import { Search } from "../Search";  
import { useGetAllMusicQuery } from "../../services/music";  
import List from "../List/List";
import { useDispatch } from "react-redux";
import { addAuthor, addGenre } from "../../store/filterSlice";
//import {useParams } from "react-router-dom";


const Centerblock = (/*{isLoading}*/) => {

    const dispatch = useDispatch();

   // console.log('centerblock');
    const { data, /*error,*/ isLoading: isLoad } = useGetAllMusicQuery();
    let filterAuthor = [];
    let filterGenre = [];
   // console.log(data);
    if (data?.length) {
        data.map((item) => {
            //console.log(item);
            //console.log(filterAuthor.includes(item.author));
            if (filterAuthor.includes(item.author) === false) { filterAuthor.push(item.author);}
            if (filterGenre.includes(item.genre) === false) { filterGenre.push(item.genre);} 
        }); 
        
        dispatch(addAuthor({author: filterAuthor}));
        dispatch(addGenre({genre: filterGenre}));

        if (localStorage.getItem('setFilterAuthor') !== null) {
           
            let setFilterAuthor = JSON.parse(localStorage.getItem('setFilterAuthor'));
           // console.log(setFilterAuthor);
            const dataF = data.filter((item) => {return setFilterAuthor.includes(item.author);//setFilterAuthor.includes(item.author) === true;
                });
                console.log(dataF);
        } 
    
        console.log(data);
    }

    let isEmptyList = !isLoad && !data?.length;  

    return (
        <div className={`${s.main__centerblock} ${s.centerblock}`}>
            <Search />
            <h2 className={s.centerblock__h2}>{titlePlayList[0].title}</h2>
            <Filter />           
            {isLoad ? ( <p>Loading...</p>)
            : (
                isEmptyList ? (<p>No music!</p>) : (
                   data && <List data={data} />
                )          
            )
            }  
                    
        </div>
        );
};


export default Centerblock;