import styled from "styled-components";

export const Button = styled.button`
  ${(props) => `
    background-color: ${
      props.primary ? props.theme.color.purple : props.theme.color.white
    };
    width: ${props.fullButton ? "100%" : "50%"};
    border: 2px solid ${
      !props.primary ? props.theme.color.black : props.theme.color.white
    };
    color: ${
      !props.primary ? props.theme.color.purple : props.theme.color.white
    };
    font-size: 16px;
    padding: 18px;
    border-radius: 10px;

    &:hover{
      opacity: 0.9 ;
    }
  `}
`;
