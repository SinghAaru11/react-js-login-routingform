
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Signup from './Component/Signup';
import InvalidCredentials from './Component/InvalidCredentials';
import Login from './Component/Login';


function App() {

  return (
    
      <Router>
        <div className="main-container">
   {/* this className represent the whole react-app boundry */}

        <Routes>

          <Route path ="/Signup" element = {<Signup/>} />
          <Route path="/InvalidCredentials" element={<InvalidCredentials/>}/>
          <Route path ="/" element = {<Login/>} />
  
        </Routes>
        </div>
      </Router>
   
    
  );
}

export default App;
