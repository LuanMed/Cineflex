import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

export default function FinalScreen() {
    const location = useLocation();
    const { cpf, date, hour, ids, name, title, session } = location.state;

    return (
        <>
            <Link to={`/assentos/${session}`}>
                <BackButton data-test="go-home-header-btn">Voltar</BackButton>
            </Link>
            <Header>Pedido feito <br /> com sucesso!</Header>
            <Info>
                <div data-test="movie-info">
                    <h1>Filme e sessão:</h1>
                    <p>{title}<br />{date} {hour}</p>
                </div>
                <div data-test="seats-info">
                    <h1>Ingressos:</h1>
                    {ids.map(seat => <p key={seat}>Assento {seat}</p>)}
                </div>
                <div data-test="client-info">
                    <h1>Comprador:</h1>
                    <p>Nome: {name}</p>
                    <p>CPF: {cpf}</p>
                </div>
            </Info>
            <Link to={"/"}>
                <ReserveButton data-test="go-home-btn">Voltar pra Home</ReserveButton>
            </Link>
        </>
    )
}

const BackButton = styled.button`
    position: fixed;
    top: 25px;
    left: 10px;
    width: 45px;
    height: 18px;
    font-size: 12px;
    color: #E8833A;
    background-color: #E5E5E5;
    border: #E8833A;
    border-radius: 3px;
    margin-right: 8px;
    cursor:pointer;
`

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