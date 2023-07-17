import React, { useState } from "react";
import axios from "axios";
import "../css/RegisterPage.css";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  let userId = Math.ceil(Math.random() * 100);
  //Registration state
  const data = { userId, name, email, password };
  const errorCSS = {
    height: "25px",
    marginTop: "10px",
    width: "inherit",
    backgroundColor: "red",
    borderRadius: "10px",
    color: "white",
  };
  const [resp, setResp] = useState("");

  function Registered() {
    // setRegister(true);
    console.log(data);
    axios
      .post("http://localhost:8085/register", data)
      .then((response) => {
        console.log(response.data);
        setResp(response.data);

        if (response.data === "Registered Successfully..!!") {
          //navigate("/HomePage");
          const timeout = setTimeout(() => {
            navigate("/HomePage");
          }, 2000);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  let num = 0;

  return (
    <>
      <div className="form">
        <div className="form-view1">
          <div className="text-view">
            <h1 className="h2">Hello !</h1>
            <p className="">Register Yourself</p>
          </div>
          <input
            className="uname u1"
            placeholder="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
          <input
            className="pass u1"
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <input
            className="pass u1"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          {resp !== "" && <div style={errorCSS}>{resp}</div>}

          <button className={"bt-login"} onClick={Registered}>
            Register
          </button>
        </div>

        <div className="form-view2">
          <div className="form-view3-1"></div>
        </div>
      </div>
    </>
  );
}
