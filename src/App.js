import logo from "./logo.svg";
import "./App.css";
import React, { useContext, useState } from "react";

const employeeContext = React.createContext();

function App() {
  const [employee, setEmployee] = useState({
    Id: 101,
    Name: "Laxman",
    Location: "Hyd",
    Salary: 10000,
    EmploymentType: "Contract",
  });
  return (
    <div className="App">
      <h2>Welcome to App Component...</h2>
      <p>
        <label>Employee Salary:{employee.Salary}</label>
      </p>
      <employeeContext.Provider
        value={{ data: employee, updateEmployee: setEmployee }}
      >
        <Employee></Employee>
      </employeeContext.Provider>
    </div>
  );
}

function Employee() {
  let context = useContext(employeeContext);
  function changeEmploymentType() {
    context.updateEmployee({ ...context.data, EmploymentType: "Permanent" });
  }
  return (
    <div>
      <h2>Welcome to Employee Component...</h2>
      <p>
        <label>Employee Id:{context.data.Id}</label>
      </p>
      <p>
        <label>Employee Name:{context.data.Name}</label>
      </p>
      <p>
        <label>Employee Location:{context.data.Location}</label>
      </p>
      <p>
        <label>Employee Salary:{context.data.Salary}</label>
      </p>
      <employeeContext.Consumer>
        {(value) =>
          value.data.EmploymentType === "Permanent" ? (
            <Permanent></Permanent>
          ) : (
            <Contract></Contract>
          )
        }
      </employeeContext.Consumer>
      <button onClick={changeEmploymentType}>Make Permanent</button>
      <Salary></Salary>
    </div>
  );
}

function Salary() {
  let context = useContext(employeeContext);

  function updateSalary() {
    context.updateEmployee({ ...context.data, Salary: 15000 });
  }
  return (
    <div>
      <h2>Welcome to Salary Component...</h2>
      <p>
        <label>Employee Id:{context.data.Id}</label>
      </p>
      <p>
        <label>Employee Name:{context.data.Name}</label>
      </p>
      <p>
        <label>Employee Salary:{context.data.Salary}</label>
      </p>
      <p>
        <button onClick={updateSalary}>Update Salary</button>
      </p>
    </div>
  );
}

function Permanent() {
  return (
    <div>
      <h2>Permanent Component Contents...</h2>
    </div>
  );
}

function Contract() {
  return (
    <div>
      <h2>Contract Component Contents...</h2>
    </div>
  );
}

export default App;
