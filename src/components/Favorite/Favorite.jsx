//import Filter from "../Filter";

//import Skeleton from "./../Skeleton/Skeleton";
import s from './Favorite.module.scss';
import { titlePlayList } from "../../constants";
import { Search } from "../Search";  
import { useGetAllFavoriteQuery/*, useRefreshTokenMutation */ } from "../../services/music";  
import List from "../List/List";



const Favorite = (/*{isLoading}*/) => {
  
    const access=localStorage.getItem('access');   
  
    const { data, isLoading: isLoad } = useGetAllFavoriteQuery({access: access});  
    let isEmpty = !isLoad && !data?.length;     
  
    return (
        
        <div className={`${s.main__centerblock} ${s.centerblock}`}>
            <Search />
            <h2 className={s.centerblock__h2}>{titlePlayList[4].title}</h2>
           
            {isLoad ? ( <p>Loading...</p>)
            : (
                isEmpty ? (<p>No music!</p>) : (
                   data && <List data={data} />
                )          
            )
                }    
             
        </div>
        );
};


export default Favorite;