//import logo from './logo.svg';
import './App.css';
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Signin from './containers/SignIn';
import Home from './containers/Home';
import SignUp from './containers/SIgnUP';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>  
          <Route path="/" exact element={<Home />} />
          <Route path="/signin" exact element={<Signin />} />
          <Route path="/signup" exact element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
