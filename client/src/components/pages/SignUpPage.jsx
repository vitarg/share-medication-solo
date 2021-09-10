import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registration } from "../../redux/features/application";

const SignUpPage = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const signingUp = useSelector((state) => state.applicationReducer.signingUp);
  const error = useSelector((state) => state.applicationReducer.error);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistration = () => {
    dispatch(registration(name, login, password));
  };

  return (
    <>
      <div>{error}</div>
      <div>
        <input
          type="text"
          placeholder={"имя"}
          onChange={(e) => handleChangeName(e)}
        />
        <input
          type="text"
          placeholder={"логин"}
          onChange={(e) => handleChangeLogin(e)}
        />
        <input
          type="password"
          placeholder={"пароль"}
          onChange={(e) => handleChangePassword(e)}
        />
        <button onClick={handleRegistration} disabled={signingUp}>
          зарегистрироваться
        </button>
      </div>
    </>
  );
};

export default SignUpPage;
