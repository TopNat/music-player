import s from '../app/App.module.scss';
import Bar from '../../components/Bar';
import NavBar from '../../components/NavBar';
import SideBar from '../../components/SideBar';
import Centerblock from '../../components/Centerblock';
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { TIMESKELETON } from "../../constants";


function MainP() {

    const [isLoadingList, setIsLoadingList] = useState(true); 
   
    useEffect(() => {        
        const timerList = setTimeout(() => {setIsLoadingList(false) },TIMESKELETON);
        return () => clearTimeout(timerList);
      }, []);
    
    
    return (
        <div className={s.container}>
            <main className={s.main}>       
                <NavBar />  
                <Routes> 
                    <Route path="/" element={<Centerblock isLoading={isLoadingList}/>} />                    
                </Routes>
                <SideBar  isLoading={isLoadingList}/>
            </main>  
            <Bar />
            <footer className={s.footer}></footer>    
        </div> 
    );
}

export default MainP;