import './App.css';
import Bar from './components/Bar';
import Centerblock from './components/Centerblock';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';


function App() {
  return (      
   
    <div className="wrapper">
      <div className="container">
          <main className="main">
       
              <NavBar />
              <Centerblock />
              <SideBar />
          </main>
          <Bar />
          <footer className="footer"></footer>
      </div>
    </div>
  
  );
}

export default App;
