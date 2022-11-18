import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Employee from "./Employee";
import Department from "./Department";
import Project from "./Project";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/employees">Employee</Link>
        </li>
        <li>
          <Link to="/departments">Department</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/employees" element={<Employee />}></Route>
        <Route path="/departments" element={<Department />}></Route>
        <Route path="/projects" element={<Project />}></Route>
      </Routes>
    </div>
  );
}

export default App;
