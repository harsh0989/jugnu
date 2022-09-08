import './App.css';
import FOSLogin from './Components/FOSLogin';
import { Route, Routes } from "react-router";
import { BrowserRouter as Router, Navigate } from "react-router-dom";
import UserDetails from './Components/UserDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <FOSLogin />}/>
        <Route path="user-details" element={<UserDetails/>}/>
      </Routes>
    </Router>
   
  );
}

export default App;
