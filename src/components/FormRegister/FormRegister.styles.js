import styled from "styled-components";

export const Form = styled.section`
  ${(props) => `
    display: flex;
    justify-content: center; 
    text-align: center ;
    form{
      max-width: 80%;
      background-color: ${props.theme.color.white};
    }
    .name-field{
      display: flex;
      column-gap: 2rem;
      justify-content: center;
      height: 70px;
    }
    .country-field{
      display: flex;
      column-gap: 2rem;
      height: 70px;
    }
    button{
      margin: 16px 0;
    }
  `}
`