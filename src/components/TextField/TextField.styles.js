import styled from "styled-components";

export const TextField = styled.div`
  ${(props) => `
    margin: 24px 0;
    input{
      background-color: #FFFFFF;
      width: ${props.width};
      border: 2px solid ${props.theme.color.black};
      font-size: 18px;
      padding: 18px;
      margin: 2px;
      box-sizing: border-box;
      border-radius: 10px;
      padding-left: ${props.paddingLeft};
    }
  `}
`;
