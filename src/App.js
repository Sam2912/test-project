import logo from "./logo.svg";
import "./App.css";

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function useList(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => setData(result));
  });
  return data;
}
function Employee() {
  const employees = useList("https://localhost:7083/api/Employee");

  return (
    <div>
      <h2>Employees Data...</h2>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>location</th>
            <th>salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.location}</td>
              <td>{emp.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Department() {
  const departments = useList("https://localhost:7083/api/Dept");
  return (
    <div>
      <h2>Department Data...</h2>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function App() {
  return (
    <div>
      <Employee></Employee>
      <Department></Department>
    </div>
  );
}
export default App;
