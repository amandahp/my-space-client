import * as C from "../index";
import * as S from "./FormRegister.styles";

export const FormRegister = () => {
  return (
    <S.Form>
      <form>
        <div className="name-field">
          <C.TextField
            placeholder="First Name"
          />
          <C.TextField
            placeholder="Last Name"
          />
        </div>
        <div className="country-field">
          <C.TextField
            placeholder="Country"
          />
          <C.TextField
            placeholder="ZIP Code"
          />
        </div>
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
          Create Account
        </C.Button>
      </form>
    </S.Form>
  )
}