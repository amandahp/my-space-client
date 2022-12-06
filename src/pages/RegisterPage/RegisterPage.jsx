import { useNavigate } from "react-router-dom";

import * as S from "./Register.styles";
import * as C from "../../components";

export const RegisterPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <S.Register>
      <div className="left">
        <img src="/images/background.png" alt="background black and purple" />
        <h1 className="slogan">
          Organize your tasks <br />
          in one place
        </h1>
      </div>
      <div className="rigth">
        <h1>
          <img src="/images/logo.png" alt="logo my space" />
        </h1>
        <h3>
          Already have an account?{" "}
          <button className="ref-login" onClick={handleClick}>
            Login
          </button>
        </h3>
        <h2>SIGN UP</h2>
        <C.FormRegister />
      </div>
    </S.Register>
  );
};
