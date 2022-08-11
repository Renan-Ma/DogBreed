import React from "react";
import { ListPhoto, MainContainer } from "./styled";

const ListPhotos = (dog: any) => {
  return (
    <MainContainer>
      <ListPhoto src={`${dog.dog}`} alt=""></ListPhoto>
    </MainContainer>
  );
};

export default ListPhotos;
