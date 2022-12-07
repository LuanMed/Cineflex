import styled from "styled-components";

export default function SeatsScreen() {
    return (
        <>
            <Header>Selecione o(s) assento(s)</Header>
            <SeatsButton>
                <SeatButton>01</SeatButton>
                <SeatButton>01</SeatButton>
                <SeatButton>01</SeatButton>
                <SeatButton>01</SeatButton>
                <SeatButton>01</SeatButton>
                <SeatButton>01</SeatButton>
                <SeatButton>01</SeatButton>
                <SeatButton>01</SeatButton>
                <SeatButton>01</SeatButton>
                <SeatButton>10</SeatButton>
                <SeatButton>01</SeatButton>
                <SeatButton>01</SeatButton>
                <SeatButton>01</SeatButton>
                <SeatButton>01</SeatButton>
                <SeatButton>01</SeatButton>
                <SeatButton>01</SeatButton>
                <SeatButton>01</SeatButton>
                <SeatButton>01</SeatButton>
                <SeatButton>01</SeatButton>
                <SeatButton>20</SeatButton>
                <SeatButton>01</SeatButton>
                <SeatButton>01</SeatButton>
                <SeatButton>01</SeatButton>
                <SeatButton>01</SeatButton>
                <SeatButton>01</SeatButton>
                <SeatButton>01</SeatButton>
                <SeatButton>01</SeatButton>
                <SeatButton>01</SeatButton>
                <SeatButton>01</SeatButton>
                <SeatButton>20</SeatButton>
                <SeatButton>01</SeatButton>
                <SeatButton>01</SeatButton>
                <SeatButton>01</SeatButton>
                <SeatButton>01</SeatButton>
                <SeatButton>01</SeatButton>
                <SeatButton>01</SeatButton>
                <SeatButton>01</SeatButton>
                <SeatButton>01</SeatButton>
                <SeatButton>01</SeatButton>
                <SeatButton>20</SeatButton>
                <SeatButton>01</SeatButton>
                <SeatButton>01</SeatButton>
                <SeatButton>01</SeatButton>
                <SeatButton>01</SeatButton>
                <SeatButton>01</SeatButton>
                <SeatButton>01</SeatButton>
                <SeatButton>01</SeatButton>
                <SeatButton>01</SeatButton>
                <SeatButton>01</SeatButton>
                <SeatButton>20</SeatButton>
            </SeatsButton>
            <Captions>
                <Caption><SelectedButton></SelectedButton><p>Selecionado</p></Caption>
                <Caption><AvailableButton></AvailableButton><p>Disponível</p></Caption>
                <Caption><UnavailableButton></UnavailableButton><p>Indisponível</p></Caption>
            </Captions>
            <ContainerRegistration>
                <p>Nome do comprador:</p><input placeholder="Digite seu nome..."></input>
                <p>CPF do comprador::</p><input placeholder="Digite seu CPF..."></input>
            </ContainerRegistration>
            <ReserveButton>Reservar assento(s)</ReserveButton>
            <Footer>
                <ContainerMovie>
                    <img src="https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg" alt="poster do filme" />
                </ContainerMovie>
                <div>
                    <p>2067</p>
                    <p>Quinta-feira - 15:00</p>
                </div>
            </Footer>
        </>
    )
}

const Header = styled.header`
    width: 100vw;
    height: 110px;
    font-size: 24px;
    line-height: 90px;
    text-align: center;
    color: #293845;
`
const SeatsButton = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 320px;
    button{
        width: 26px;
        height: 26px;
        font-size: 11px;
        background-color: #C3CFD9;
        border: 1px solid #808F9D;
        border-radius: 12px;
        margin: 0 3px 18px 3px;
        cursor: pointer;
    }
`
const SeatButton = styled.button`
    
`

const Captions = styled.div`
    display: flex;
`

const Caption = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 10px 0 10px;
    button{
        width: 26px;
        height: 26px;
        font-size: 11px;
        border-radius: 12px;
        margin-bottom: 5px;
    }
`

const SelectedButton = styled.button`
    background-color: #1AAE9E;
    border: 1px solid #0E7D71;
`

const AvailableButton = styled.button`
    background-color: #C3CFD9;
    border: 1px solid #808F9D;
`

const UnavailableButton = styled.button`
    background-color: #FBE192;
    border: 1px solid #F7C52B;
`

const ContainerRegistration = styled.div`
    display: flex;
    flex-direction: column;
    width: 320px;
    margin-top: 45px;
    p{
        font-size: 18px;
        color: #293845;
        margin-bottom: 1px;
    }
    input{
        max-width: 320px;
        height: 51px;
        margin-bottom: 7px;
        padding-left: 20px;
        font-size: 18px;  
        color: #293845;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        outline: 0;
        &::placeholder{
            color:#AFAFAF;
            font-style: italic;
        }
    }
`

const ReserveButton = styled.button`
    width: 225px;
    height: 43px;
    font-size: 18px;
    color: #FFFFFF;
    background-color: #E8833A;
    border: #E8833A;
    border-radius: 3px;
    margin-top: 40px;
    margin-bottom: 125px;
    cursor: pointer;
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