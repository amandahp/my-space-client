import styled from "styled-components";

export const Form = styled.section`
  ${(props) => `
    display: flex;
    justify-content: center;
    text-align: center ;
    form{
      width: 60%;
      background-color: ${props.theme.color.white};
    }
    .name-field{
      display: flex;
      column-gap: 5rem;
      width: 100%;
      height: 70px;
      justify-content: space-between ;
    }

    .country-field{
      display: flex;
      column-gap: 4rem;
      width: 100%;
      height: 70px;
      justify-content: space-between ;

    }
    button{
      margin: 16px 0;
    }
  `}
`;
