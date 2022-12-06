import styled from "styled-components";

export const Register = styled.main`
  ${(props) => `
    width: 100%;
    overflow-y: hidden;
    display: flex;

    column-gap: 3rem;
    .left{
      width: 50%;
    }
    .left img {
      max-width: 100%;
      height: 100% ;
      padding: 0px;
      position: relative;
    }

    .slogan{
      position: absolute;
      top: 60%;
      left: 40px;
      color: ${props.theme.color.white};
    }
    .rigth{
      width: 50%;
      display: flex;
      flex-direction: column;
      text-align: center;
      font-size: 14px;
      font-weight: 300;
    }

    .rigth img{
      width: 250px;
      margin: 50px 0px 0px 0px;
    }

    .ref-login {
      font-size: 14px;
      font-weight: 700;
      color: ${props.theme.color.purple};
      margin: 20px 0;
    }

    h2{
      color: ${props.theme.color.purple};
      font-size: 30px;
    }
  `}
`;
