import styled from "styled-components"

export default function FinalScreen() {
    return (
        <>
            <Header>Pedido feito <br /> com sucesso!</Header>
            <Info>
                <h1>Filme e sessão:</h1>
                <p>Enola Holmes<br />24/06/2021 15:00</p>
                <h1>Ingressos:</h1>
                <p>Assento 15</p>
                <p>Assento 16</p>
                <h1>Comprador:</h1>
                <p>Nome: João da Silva Sauro</p>
                <p>CPF: 123.456.789-10</p>
            </Info>
            <ReserveButton>Voltar pra Home</ReserveButton>
        </>
    )
}

const Header = styled.header`
    width: 100vw;
    margin-top: 50px;
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    color: #247A6B;
`

const Info = styled.div`
    width: 100vw;
    max-width: 320px;
    color: #293845;
    h1{
        margin-top: 50px;
        margin-bottom: 10px;
        margin-left: 20px;
        font-size: 24px;
        font-weight: 700;
    }
    p{
        font-size: 22px;
        margin-left:20px;
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
    margin-top: 70px;
    margin-bottom: 125px;
    cursor: pointer;
`