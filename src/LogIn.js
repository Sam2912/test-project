import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LogIn(props) {
  let navigate = useNavigate();

  const [loginData, setLoginData] = useState({ username: "", password: "" });

  function changeLogInData(e) {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }

  function onLogIn() {
    fetch("https://localhost:7083/api/employee/test", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          navigate("/home");
        } else {
          alert("Invalid username or password");
        }
      });
  }
  return (
    <div>
      <h2>Welcome to Login...</h2>
      <p>
        <label>
          UserName :
          <input
            type="text"
            value={loginData.username}
            name="username"
            onChange={changeLogInData}
          ></input>
        </label>
      </p>
      <p>
        <label>
          Password :
          <input
            type="text"
            value={loginData.password}
            name="password"
            onChange={changeLogInData}
          ></input>
        </label>
      </p>
      <button onClick={onLogIn}>Login</button>
    </div>
  );
}

function Home(props) {
  function onNext() {
    props.history.replace("/editprofile");
  }
  return (
    <div>
      <h2>Welcome to Home...</h2>
      <button onClick={onNext}>Next</button>
    </div>
  );
}
function EditProfile() {
  return (
    <div>
      <h2>Welcome to Edit Profile...</h2>
    </div>
  );
}

export { LogIn, Home, EditProfile };
