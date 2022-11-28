import { useState } from "react";

import { loginApi } from "../../services/auth";
import * as C from "../index";
import * as S from "./FormLogin.styles";

export const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSave = async (e) => {
    e.preventDefault();
    try {
      const payload = { email, password };
      setEmail("");
      setPassword("");

      await loginApi(payload);

      setEmail("");
      setPassword("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <S.Form>
      <form onSubmit={onSave}>
        <C.TextField
          type="email"
          placeholder="E-mail"
          value={email}
          setValue={(value) => setEmail(value)}
          width="100%"
          required
        />
        <C.TextField
          type="password"
          placeholder="Password"
          value={password}
          setValue={(value) => setPassword(value)}
          width="100%"
          required
        />
        <C.Button primary={true} fullButton={true}>
          Log In
        </C.Button>
      </form>
    </S.Form>
  );
};
