import * as S from "./Register.styles";
import * as C from "../../components";

export const RegisterPage = () => {
  return (
    <S.Register>
      <div className="left">
        <img src="/images/background.png" alt="background black and purple" />
        <h1 className="slogan">Find everything you need <br />in one place</h1>
      </div>
      <div className="rigth">
        <h1>
          <img src="/images/logo.png" alt="logo my space" />
        </h1>
        <h3>Already have an account? <button className="ref-login">Login</button></h3>
        <h2>SIGN UP</h2>
        <C.FormRegister />
      </div>
    </S.Register>
  )
}