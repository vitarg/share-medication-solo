import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authReducer } from '../../redux/features/application';

const SignInPage = () => {
  const dispatch = useDispatch();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const signingIn = useSelector((state) => state.applicationReducer.signingIn);
  const error = useSelector((state) => state.applicationReducer.error);


  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleAuth = () => {
   dispatch(authReducer(login, password));
  };


  return (
    <>
      <div>{error}</div>
      <div>
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
        <button onClick={handleAuth} disabled={signingIn}>
          войти
        </button>
      </div>
    </>
  );
};

export default SignInPage;