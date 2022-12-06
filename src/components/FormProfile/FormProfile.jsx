import * as C from "../index";
import * as S from "./FormProfile.styles";

export const FormProfile = () => {
  return (
    <S.Form>
      <form>
        <C.TextField type="text" placeholder="Name" width="100%" />
        <C.TextField type="text" placeholder="E-mail" width="100%" />
        <C.TextField type="email" placeholder="Country" width="100%" />
        <C.TextField type="text" placeholder="ZIP Code" width="100%" />
      </form>
    </S.Form>
  );
};
