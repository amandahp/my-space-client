import styled from "styled-components";

export const Profile = styled.main`
  ${(props) => `
    overflow-x:hidden ;
    background-color: ${props.theme.color.bgColor} ;
    width: 100vw;
    height: 100vh ;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${props.theme.color.purple};
    h1 {
      margin: 30px 0;
    }
  `}
`;
