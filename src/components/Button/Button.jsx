import * as S from "./Button.styles";

export const Button = (props) => {
  const { primary, fullButton } = props
  return (
    <S.Button
      primary={primary}
      fullButton={fullButton}
    >
      {props.children}
    </S.Button>
  )

}