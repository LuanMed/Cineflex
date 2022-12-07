import styled from "styled-components";
import FinalScreen from "./components/FinalScreen";
import TimeScreen from "./components/TimeScreen";
import MovieScreen from "./components/MovieScreen";
import SeatsScreen from "./components/SeatsScreen";

export default function App() {
  return (
    <ContainerApp>
      <Header>
        <p>CINEFLEX</p>
      </Header>
      {/* <MovieScreen /> */}
      {/* <TimeScreen /> */}
      {/* <SeatsScreen /> */}
      <FinalScreen/> 
    </ContainerApp>
  );
}

const ContainerApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh - 67px;
  margin-top: 67px;
`

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  background-color: #C3CFD9;
  font-size: 34px; 
  color: #E8833A;
  p{
    text-align: center;
    line-height: 67px;
  }
`