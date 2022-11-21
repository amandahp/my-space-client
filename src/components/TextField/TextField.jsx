import * as S from "./TextField.styles";

export const TextField = (props) => {
  const { placeholder, value, setValue, mid } = props

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <S.TextField>
      <input onChange={handleChange} placeholder={placeholder} value={value} mid={mid} />
    </S.TextField>
  )

}

