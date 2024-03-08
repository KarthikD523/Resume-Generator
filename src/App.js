import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './screens/home';
import Resume from './Components/resume1';
import Resume2 from './Components/Resume2';
import Home_Screen from './screens/Home_Screen';


function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home_Screen/>} />
         <Route path='/Resume/1' element={<Home/>} />
         <Route path='/resume' element={<Resume/>} />
        
           
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
