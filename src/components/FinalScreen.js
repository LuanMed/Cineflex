import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

export default function FinalScreen() {
    const location = useLocation();
    const { cpf, date, hour, ids, name, title } = location.state;
    
    return (
        <>
            <Header>Pedido feito <br /> com sucesso!</Header>
            <Info>
                <h1>Filme e sessão:</h1>
                <p>{title}<br />{date} {hour}</p>
                <h1>Ingressos:</h1>
                {ids.map(seat => <p key={seat}>Assento {seat}</p>)}
                <h1>Comprador:</h1>
                <p>Nome: {name}</p>
                <p>CPF: {cpf}</p>
            </Info>
            <Link to={"/"}>
                <ReserveButton>Voltar pra Home</ReserveButton>
            </Link>
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