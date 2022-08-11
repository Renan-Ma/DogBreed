import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ebb365;
  height: 30vh;
  width: 100%;
`;

export const Button = styled.button`
  margin: 1rem 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  background-color: #61413e;
  transition: 0.2s;
  color: #ebb365;
  :hover {
    cursor: pointer;
    box-shadow: 0px 0px 10px #61413e;
  }
`;

export const ContainerList = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: 90%;
`;
