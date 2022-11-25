import * as C from "../index";
import * as S from "./FormLogin.styles";

export const FormLogin= () => {
  return (
    <S.Form>
      <form>
        <C.TextField
          placeholder="E-mail"
        />
        <C.TextField
          placeholder="Password"
        />
        <C.Button
          primary={true}
          fullButton={true}
        >
          Log In
        </C.Button>
      </form>
    </S.Form>
  )
}