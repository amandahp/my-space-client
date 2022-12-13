import styled from "styled-components";

export const Main = styled.main`
  ${(props) => `
    width: 100vw;
    height: 100vh ;
    background-color: ${props.theme.color.bgColor};
  `}
`;

export const BoardContainer = styled.div`
  white-space: nowrap;
  overflow-x: auto;
  display: flex;
`;

export const AddColumnOrCardButton = styled.button`
border-radius: 3px;
padding: 8px;
display: flex;
flex-direction: column;
background-color: rgba(255, 255, 255, 0.24);
color: rgb(255, 255, 255);
`

export const CardDiv = styled.div`
  &:first-child {
    margin-left: 8px;
  }
  width: 272px;
  display: inline-block;
  flex: 0 0 272px;
  margin: 0 4px;
`;

export const CardContent = styled.div`
  background-color: #ebecf0;
  border-radius: 3px;
`;

export const CardDrop = styled.div`
  min-height: 50px;
  margin: 0 4px;
  padding: 0 4px;
`;
