import * as C from "../index";
import * as S from "./FormProfile.styles";
import { useSelector } from "react-redux";

export const FormProfile = () => {
  const { email, name } = useSelector(
    (state) => state.userReducer
  );
  return (
    <S.Form>
      <form>
        <C.TextField
          disabled
          value={name}
          type="text"
          placeholder="Name"
          width="100%"
        />
        <C.TextField
          disabled
          value={email}
          type="email"
          placeholder="E-mail"
          width="100%"
        />
      </form>
    </S.Form>
  );
};
