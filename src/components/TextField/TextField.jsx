import * as S from "./TextField.styles";

export const TextField = (props) => {
  const {
    placeholder,
    value,
    setValue,
    width = "100%",
    required,
    type = "text",
    className,
    paddingLeft,
  } = props;

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <S.TextField width={width} paddingLeft={paddingLeft}>
      <input
        onChange={handleChange}
        type={type}
        value={value}
        required={required}
        className={className}
        placeholder={placeholder}
      />
    </S.TextField>
  );
};
