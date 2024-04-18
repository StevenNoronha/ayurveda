import './App.css';
import './media.css'
import { BrowserRouter as Router,Routes, Route } from "react-router-dom"
import Home from './screens/Home';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import QuestionsPage from './screens/QuestionsPage';
import Profile from './screens/Profile';
import Doctor from './screens/Doctor';

function App() {
  return (
    <Router>
      <Routes>
        <Route path ='/' element={<Home/>} />
        <Route path='/predict' element={<QuestionsPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/doctor' element={<Doctor/>}/>
      </Routes>
    </Router>
  );
}

export default App;
