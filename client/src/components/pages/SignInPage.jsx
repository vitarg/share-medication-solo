import React from "react";

const SignInPage = () => {
  return (
    <div>
      <input type="text" placeholder={"логин"} />
      <input type="password" placeholder={"пароль"} />
      <button>авторизоваться</button>
    </div>
  );
};

export default SignInPage;
