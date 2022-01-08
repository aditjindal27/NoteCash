import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

function App() {
  return (
    <BrowserRouter>
       <Routes>  
            <Route path="/" element={<Auth/>}/>
            <Route path="/home" element={<Home/>}/>
        </Routes>
    </BrowserRouter>
  )
};

export default App;
