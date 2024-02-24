import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './screens/home';
import Resume from './screens/resume';
import { ResumeScreen } from './screens/Resume_screen';

function App() {
  return (
    
      <BrowserRouter>
        <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/res' element={<Resume/>} />

           
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
