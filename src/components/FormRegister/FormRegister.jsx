import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { registerApi } from "../../services/auth";
import * as C from "../index";
import * as S from "./FormRegister.styles";

export const FormRegister = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSave = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        fullName: `${firstName} ${lastName}`,
        country,
        zipCode,
        email,
        password,
      };

      await registerApi(payload);

      setFirstName("");
      setLastName("");
      setCountry("");
      setZipCode("");
      setEmail("");
      setPassword("");

      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <S.Form>
      <form onSubmit={onSave}>
        <C.TextField
          placeholder="First Name"
          value={firstName}
          className="name"
          setValue={(value) => setFirstName(value)}
          required
          width="100%"
        />
        <C.TextField
          placeholder="Last Name"
          value={lastName}
          setValue={(value) => setLastName(value)}
          width="100%"
          required
        />
        <div className="country-field">
          <C.TextField
            placeholder="Country"
            value={country}
            setValue={(value) => setCountry(value)}
            width="100%"
            required
          />
          <C.TextField
            placeholder="ZIP Code"
            value={zipCode}
            setValue={(value) => setZipCode(value)}
            width="100%"
            required
          />
        </div>
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
          Create Account
        </C.Button>
      </form>
    </S.Form>
  );
};
