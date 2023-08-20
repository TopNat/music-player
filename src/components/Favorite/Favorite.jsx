import Filter from "../Filter";

//import Skeleton from "./../Skeleton/Skeleton";
import s from './Favorite.module.scss';
import { titlePlayList } from "../../constants";
import { Search } from "../Search";  
import { useGetAllFavoriteQuery, useRefreshTokenMutation  } from "../../services/music";  
//import { useEffect } from "react";
//import List from "../List/List";
//import {useParams } from "react-router-dom";


const Favorite = (/*{isLoading}*/) => {
    const [allFavorite] = useGetAllFavoriteQuery();    
    const [refresh] = useRefreshTokenMutation();
    const refToken=localStorage.getItem('refresh');      
   // const access=localStorage.getItem('access');   
  // useEffect(() => {
    refresh(refToken).then((data) => {
        console.log(data);
        const newToken = data.data.access; 
        console.log(newToken);
        const {dataF, isLoading: isLoad} = allFavorite({access: newToken});   
        console.log(dataF);      
        console.log(isLoad);
       })          
   // }, [])

     //  const { data, isLoading: isLoad } = useGetAllFavoriteQuery({access: access});    
      // console.log(data); 
     //  let isEmpty = !isLoad && !data?.length;     
  
    return (
        
        <div className={`${s.main__centerblock} ${s.centerblock}`}>
            <Search />
            <h2 className={s.centerblock__h2}>{titlePlayList[4].title}</h2>
            <Filter />           
            {/*isLoad ? ( <p>Loading...</p>)
            : (
                isEmpty ? (<p>No music!</p>) : (
                   data && <List data={data} />
                )          
            )
                */}    
               { /*dataF?.length && <List data={dataF} /> */}      
        </div>
        );
};


export default Favorite;