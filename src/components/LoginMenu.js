"use client";

import { useState } from "react";
import style from "./styleModules/LoginMenu.module.css";

const LoginMenu = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className={style.container}>
      <div className={style.loginContainer}>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label className={style.input}>
            <span>Email</span>
            <input
              type="text"
              placeholder="xxxxx@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className={style.input}>
            <span>senha</span>
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <input
            className={style.button}
            type="submit"
            value={"Entrar"}
          ></input>
        </form>
      </div>
    </div>
  );
};

export default LoginMenu;
