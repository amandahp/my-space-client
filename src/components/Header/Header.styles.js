import styled from "styled-components";

export const Header = styled.header`
  ${(props) => `
    background-color: ${props.theme.color.headerColor};
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 img {
      width: 200px;
      padding: 20px ;
    }

    ul {
      list-style-type: none;
      display: flex ;
      padding: 20px;
      gap: 12px;
    }

    .logout{
      padding: 20px;
      background-color:${props.theme.color.purple};
      border-radius: 12px;
      color: ${props.theme.color.white};
      font-size: 12px;
    }

    .logout:hover{
      opacity: 0.9;
    }

    .myProfile{
      padding: 20px;
      background-color:${props.theme.color.white};
      border-radius: 12px;
      color: ${props.theme.color.purple};
      font-size: 12px;
    }

    .myProfile:hover{
      opacity: 0.9;
    }

    .mySpace{
      padding: 20px;
      background-color:${props.theme.color.headerColor};
      border-radius: 12px;
      color: #fff;
      font-size: 16px;
    }

    .mySpace:hover{
      opacity: 0.9;
    }

  `}
`;
