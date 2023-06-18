import s from './App.module.scss';
import Bar from './../Bar';
import Centerblock from './../Centerblock';
import NavBar from './../NavBar';
import SideBar from './../SideBar';


function App() {
  return (      
   
    <div className={s.wrapper}>
      <div className={s.container}>
          <main className={s.main}>       
              <NavBar />
              <Centerblock />
              <SideBar />
          </main>
          <Bar />
          <footer className={s.footer}></footer>
      </div>
    </div>
  
  );
}

export default App;
