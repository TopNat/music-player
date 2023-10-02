import Filter from "../Filter";
import React from 'react';
//import Skeleton from "./../Skeleton/Skeleton";
import s from './PlayListComp.module.scss';
import { titlePlayList } from "../../constants";
import { Search } from "../Search";  
import { useGetSelectionMusicQuery } from "../../services/music";  
import List from "../List/List";
import {useParams } from "react-router-dom";


const PlayListComp = (/*{isLoading}*/) => {
   // console.log('playlistcomp');
    const params = useParams();

    //console.log('paramparam=== ' + params.id);   

        const { data, isLoading: isLoad } = useGetSelectionMusicQuery({id: params.id});
       /// console.log(data);
     
         
       //console.log(isEmptyList);
      // console.log(isLoad);
       
       let isEmpty = !isLoad && !data?.id;   
   // console.log('isEmptyList=' + isEmpty);
   // console.log('data?.length='+data?.id);
    return (
        
        <div className={`${s.main__centerblock} ${s.centerblock}`}>
            <Search />
            <h2 className={s.centerblock__h2}>{titlePlayList[params.id-1].title}</h2>
            <Filter />           
            {isLoad ? ( <p>Loading...</p>)
            : (
                isEmpty ? (<p>No music!</p>) : (
                   data && <List data={data.items} />
                )          
            )
            }            
        </div>
        );
};


export default PlayListComp;