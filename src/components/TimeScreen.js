import styled from "styled-components";
import Session from "./Session";

export default function TimeScreen() {
    return (
        <div>
            <Header>Selecione o horário</Header>
            <SessionContainer>
                <Session />
                <Session />
                <Session />
                <Session />
                <Session />
            </SessionContainer>
            <Footer>
                <ContainerMovie>
                    <img src="https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg" alt="poster do filme" />
                </ContainerMovie>
                <div>
                    <p>2067</p>
                </div>
            </Footer>
        </div>
    )
}

const Header = styled.header`
    width: 100vw;
    height: 110px;
    font-size: 24px;
    line-height: 110px;
    text-align: center;
    color: #293845;
`

const SessionContainer = styled.ul`
    margin-bottom: 120px;
`

const Footer = styled.footer`
    background-color: #E5E5E5;
    position: fixed;
    display: flex;
    align-items: center;
    bottom: 0;
    width: 100vw;
    height: 117px;
    p{
        font-size: 26px;
        color: #293845;
        margin-left: 14px;
    }
`

const ContainerMovie = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    width: 64px;
    height: 89px;
    background-color: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.15);
    border-radius: 3px;
    img{
        width: 48px;
    }
`