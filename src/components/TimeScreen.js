import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Session from "./Session";

export default function TimeScreen() {
    const { idFilme } = useParams();
    const [sessions, setSessions] = useState(undefined);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`);
        promise.then(res => setSessions(res.data));
        promise.catch(err => alert(err.response.data.message));
    }, [])

    if (sessions === undefined) {
        return <div>Carregando...</div>
    }

    return (
        <div>
            <Header>Selecione o horário</Header>
            <SessionContainer>
                <Session sessions={sessions.days}/>
            </SessionContainer>
            <Footer>
                <ContainerMovie>
                    <img src={sessions.posterURL} alt="poster do filme" />
                </ContainerMovie>
                <div>
                    <p>{sessions.title}</p>
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