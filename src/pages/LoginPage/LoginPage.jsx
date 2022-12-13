import { useNavigate } from "react-router-dom";

import * as S from "./Login.styles";
import * as C from "../../components";

export const LoginPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/register");
  };

  return (
    <S.Login>
      <div className="left">
        <img src="/images/background.png" alt="background black and purple" />
        <h1 className="slogan">
          Organize your tasks
          <br />
          in one place
        </h1>
      </div>
      <div className="rigth">
        <h1>
          <img src="/images/logo.png" alt="logo my space" />
        </h1>
        <h3>
          Don't have an account?&nbsp;
          <button className="ref-login" onClick={handleClick}>
            SIGN UP
          </button>
        </h3>
        <h2>SIGN IN</h2>
        <C.FormLogin />
      </div>
    </S.Login>
  );
};
