import { useState } from "react";
import { useCookies } from "react-cookie";

import { loginApi } from "../../services/auth";
import * as C from "../index";
import * as S from "./FormLogin.styles";

export const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [cookies, setCookie] = useCookies();

  const onSave = async (e) => {
    e.preventDefault();
    try {
      const payload = { email, password };

      const response = await loginApi(payload);
      setCookie("token", response.data.token);

      setEmail("");
      setPassword("");
    } catch (err) {
      setError(err.response.data.error);
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
        {error && <C.ToastError error={error} setError={setError} />}
        <C.Button primary={true} fullButton={true}>
          Log In
        </C.Button>
      </form>
    </S.Form>
  );
};
