import styled from "styled-components";

export const Form = styled.section`
  ${(props) => `
    display: flex;
    justify-content: center;
    text-align: center ;

    form{
      width: 100%;
      background-color: ${props.theme.color.white};
    }

    button{
      margin: 16px 0;
    }
  `}
`;
