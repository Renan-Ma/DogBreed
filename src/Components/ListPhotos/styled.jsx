import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListPhoto = styled.img`
  width: 15rem;
  height: auto;
  margin: 1rem;
  border-radius: 8px;
  transition: 0.2s;
  :hover {
    transition: 0.2s;
    transform: scale(1.02);
    box-shadow: 0px 0px 5px grey;
  }
`;
