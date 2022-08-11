import React, { useEffect } from "react";
import { getList } from "../../Services/request";
import { Button, Header, MainContainer } from "./styled";

const List = () => {
  const [dataList, setDataList] = React.useState({});
  const [breend, setBreend] = React.useState("");

  useEffect(() => {
    getList(setDataList, breend);
  }, [breend]);

  // console.log(dataList);
  return (
    <MainContainer>
      <Header>
        <h1>Dog Breend</h1>
        <p>Escolha a raça que deseja visualizar</p>
        <div>
          <Button onClick={() => setBreend("chihuahua")}>Chihuahua</Button>
          <Button onClick={() => setBreend("husky")}>Husky</Button>
          <Button onClick={() => setBreend("pug")}>Pug</Button>
          <Button onClick={() => setBreend("labrador")}>Labrador</Button>
        </div>
      </Header>
      <div>fotos dos dogs</div>
    </MainContainer>
  );
};

export default List;
