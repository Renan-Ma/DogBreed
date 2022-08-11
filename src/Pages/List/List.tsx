import React, { useEffect } from "react";
import ListPhotos from "../../Components/ListPhotos/ListPhotos";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { getList } from "../../Hooks/useRequest";
import * as Style from "./styled";

const List = () => {
  useProtectedPage();
  const [dataList, setDataList] = React.useState([]);
  const [breend, setBreend] = React.useState("chihuahua");

  useEffect(() => {
    getList(setDataList, breend);
  }, [breend]);

  return (
    <Style.MainContainer>
      <Style.Header>
        <h1>Dog Breend</h1>
        <p>Escolha a raça que deseja visualizar</p>
        <div>
          <Style.Button onClick={() => setBreend("chihuahua")}>Chihuahua</Style.Button>
          <Style.Button onClick={() => setBreend("husky")}>Husky</Style.Button>
          <Style.Button onClick={() => setBreend("pug")}>Pug</Style.Button>
          <Style.Button onClick={() => setBreend("labrador")}>Labrador</Style.Button>
        </div>
      </Style.Header>
      <Style.ContainerList>
        {dataList.length > 0 &&
          dataList.map((dog, index) => {
            return <ListPhotos dog={dog} key={index} />;
          })}
      </Style.ContainerList>
    </Style.MainContainer>
  );
};

export default List;
