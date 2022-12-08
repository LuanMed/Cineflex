import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import FinalScreen from "./FinalScreen";
import TimeScreen from "./TimeScreen";
import MovieScreen from "./MovieScreen";
import SeatsScreen from "./SeatsScreen";

export default function App() {
  return (
    <BrowserRouter>
      <ContainerApp>
        <Header>
          <p>CINEFLEX</p>
        </Header>
        <Routes>
          <Route path="/" element={<MovieScreen />} />
          <Route path="/sessoes/:idFilme" element={<TimeScreen />} />
          <Route path="/assentos/:idSessao" element={<SeatsScreen />} />
          <Route path="/sucesso" element={<FinalScreen />} />
          {/* <TimeScreen /> */}
          {/* <SeatsScreen /> */}
          {/* <FinalScreen/>  */}
        </Routes>
      </ContainerApp>
    </BrowserRouter>
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