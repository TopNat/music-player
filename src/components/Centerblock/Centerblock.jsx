import Filter from "./../Filter";

//import Skeleton from "./../Skeleton/Skeleton";
import s from './Centerblock.module.scss';
import { titlePlayList } from "../../constants";
import { Search } from "../Search";  
import { useGetAllMusicQuery } from "../../services/music";  
import List from "../List/List";
//import {useParams } from "react-router-dom";


const Centerblock = (/*{isLoading}*/) => {
   // console.log('centerblock');
    const { data, /*error,*/ isLoading: isLoad } = useGetAllMusicQuery();
    let isEmptyList = !isLoad && !data?.length;
    //console.log(isEmptyList);
  

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