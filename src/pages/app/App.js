import s from './App.module.scss';
import { Routes, Route } from "react-router-dom";


import Antry from '../../pages/entry';
import MainP from '../main';
import Exit from '../exit';
import PlayListPage from '../playlist';
import Registration from '../registration/Registration';
import ProtectedRoute from '../../components/ProtectedRoute';



function App() {

  return ( 
    <div className={s.wrapper}>               
        <Routes>
          <Route path="/entry" element={<Antry />} /> 
          <Route path="/reg" element={<Registration />} />
          <Route path="/exit" element={<ProtectedRoute ><Exit /></ProtectedRoute>} />
          <Route path="/" element={<ProtectedRoute > <MainP /></ProtectedRoute>} />  
          <Route path="/playlist/:id" element={<ProtectedRoute > <PlayListPage/></ProtectedRoute>} />  
        </Routes>         
    </div>  
  );
}

export default App;
