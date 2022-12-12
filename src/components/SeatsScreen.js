import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import EachSeat from "./EachSeat";

export default function SeatsScreen() {
    const { idSessao } = useParams();
    const [session, setSession] = useState(undefined);
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [chosenSeats, setChosenSeats] = useState([]);
    const [chosenSeatsId, setChosenSeatsId] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`);
        promise.then(res => setSession(res.data));
        promise.catch(err => alert(err.response.data.message));
    }, [])

    if (session === undefined) {
        return <div>Carregando...</div>
    }

    function reserveSeats(e) {
        e.preventDefault();
        if (chosenSeatsId.length == 0) return alert("Selecione o(s) assento(s)");
        const finalObj = { ids: chosenSeatsId, name: name, cpf: cpf };

        const url_post = "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many";
        const promise = axios.post(url_post, finalObj);
        promise.then(res => {
            console.log(res.data);

            navigate("/sucesso", {
                state: {
                    ids: chosenSeats,
                    name: name, cpf: cpf,
                    title: session.movie.title,
                    hour: session.name,
                    date: session.day.date,
                    session: session.id
                },
            });
        })
        promise.catch(err => alert(err.response.data.message));
    }

    return (
        <>
            <Link to={`/sessoes/${session.movie.id}`}>
                <BackButton data-test="go-home-header-btn">Voltar</BackButton>
            </Link>
            <Header>Selecione o(s) assento(s)</Header>
            <SeatsButton>
                {session.seats.map(seat =>
                    <EachSeat
                        key={seat.id}
                        seat={seat}
                        chosenSeats={chosenSeats}
                        setChosenSeats={setChosenSeats}
                        chosenSeatsId={chosenSeatsId}
                        setChosenSeatsId={setChosenSeatsId}
                    />
                )}
            </SeatsButton>
            <Captions>
                <Caption><SelectedButton></SelectedButton><p>Selecionado</p></Caption>
                <Caption><AvailableButton></AvailableButton><p>Disponível</p></Caption>
                <Caption><UnavailableButton></UnavailableButton><p>Indisponível</p></Caption>
            </Captions>
            <form onSubmit={reserveSeats}>
                <ContainerRegistration>
                    <label htmlFor="name">Nome do comprador:</label>
                    <input
                        id="name"
                        placeholder="Digite seu nome..."
                        value={name}
                        onChange={event => setName(event.target.value)}
                        required
                        data-test="client-name"
                    />
                    <label htmlFor="cpf">CPF do comprador:</label>
                    <input
                        id="cpf"
                        placeholder="Digite seu CPF..."
                        value={cpf}
                        onChange={event => setCpf(event.target.value)}
                        required
                        data-test="client-cpf"
                    />
                </ContainerRegistration>
                <ReserveButton data-test="book-seat-btn">Reservar assento(s)</ReserveButton>
            </form>
            <Footer data-test="footer">
                <ContainerMovie>
                    <img src={session.movie.posterURL} alt="poster do filme" />
                </ContainerMovie>
                <div>
                    <p>{session.movie.title}</p>
                    <p>{session.day.weekday} - {session.name}</p>
                </div>
            </Footer>
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
    label{
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
    margin: 30px 0 125px 47px;
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
        font-size: 22px;
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