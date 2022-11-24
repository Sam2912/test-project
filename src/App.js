import logo from "./logo.svg";
import "./App.css";
import { LogIn, Home, EditProfile } from "./LogIn";
import {
  BrowserRouter,
  Link,
  NavLink,
  Switch,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <h2>Welcome to App Component...</h2>
        <Link to="/">LogIn</Link>&nbsp;&nbsp;
        <NavLink to="/home" className="testClass">
          Home
        </NavLink>
        &nbsp;&nbsp;
        <NavLink to="/editprofile" className="testClass">
          Edit Profile
        </NavLink>
        <Routes>
          <Route exact path="/" element={<LogIn />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/editprofile" element={<EditProfile />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
