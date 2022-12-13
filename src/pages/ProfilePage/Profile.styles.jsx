import styled from "styled-components";

export const Profile = styled.main`
  ${(props) => `
    overflow-x:hidden ;
    background-color: ${props.theme.color.blue} ;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${props.theme.color.purple};
    h1 {
      margin: 30px 0;
    }
  `}
`;
