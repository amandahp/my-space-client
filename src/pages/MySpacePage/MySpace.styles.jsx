import styled from "styled-components";

export const Main = styled.main`
  ${(props) => `
    width: 100vw;
    height: 100vh ;
    background-color: ${props.theme.color.bgColor};
  `}
`;
