import './App.css';
import './media.css'
import { BrowserRouter as Router,Routes, Route } from "react-router-dom"
import Home from './screens/Home';
import Questions from './screens/Questions';
import Login from './screens/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path ='/' element={<Home/>} />
        <Route path='/predict' element={<Questions/>}/>
        <Route path='/login' element={<Login/>}/>

      </Routes>
    </Router>
  );
}

export default App;
