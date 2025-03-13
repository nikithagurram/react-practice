import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  saveLoginAction,
  savePreferedName,
} from "../../store/reducers/Login/action";

const Login = ({ pageHeader }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showSuucess, updateShowSuucess] = useState(false);
  const [showError, updateShowError] = useState(false);
  const preferedName = useSelector((state) => state.saveLogin.preferedName);
  const loginData = useSelector((state) => state.saveLogin.loginDetails);
  const { username, password } = loginData;
  const store = useSelector((state) => state);
  console.log("store", store);
  const updateMyUserName = (e) => {
    dispatch(saveLoginAction({ ...loginData, username: e.target.value }));
  };

  const setMyPreferedName = (e) => {
    dispatch(savePreferedName(e.target.value));
    if (e.target.value === "Hello") {
      dispatch(saveLoginAction({ ...loginData, username: "Hello" }));
    }
  };

  const updateMyPassword = (e) => {
    dispatch(saveLoginAction({ ...loginData, password: e.target.value }));
  };

  const onSubmit = () => {
    if (username && password) {
      updateShowSuucess(true);
      updateShowError(false);

      navigate("/success");
    } else {
      updateShowError(true);
      updateShowSuucess(false);
    }
  };

  console.log("preferedName", preferedName);
  console.log("updateusername", loginData);

  return (
    <div>
      <div>{pageHeader}</div>
      <label>First Name:</label>
      <input
        type={"text"}
        className={"input-style"}
        value={username}
        onChange={updateMyUserName}
      />
      <label>Prefered Name:</label>
      <input
        type="text"
        className="input-style"
        value={preferedName}
        onChange={setMyPreferedName}
      />
      <label>Password:</label>
      <input
        type={"password"}
        className={"input-style"}
        value={password}
        onChange={updateMyPassword}
      />

      <button onClick={onSubmit}>Login</button>
      {showSuucess && <div> You are successfully loged in</div>}
      {showError && <div> please enter username and password</div>}
    </div>
  );
};

export default Login;
