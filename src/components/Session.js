import styled from "styled-components"

export default function Session({sessions}) {
    const URL = "https://mock-api.driven.com.br/api/v8/cineflex/movies/1/showtimes";

    return (
        <>
            {sessions.map(s =>
                <ContainerSession key={s.date}>
                    <p>{s.weekday} - {s.date}</p>
                    {s.showtimes.map(showtime => <button key={showtime.name}>{showtime.name}</button>)}
                </ContainerSession>
            )}
        </>
    )
}

const ContainerSession = styled.li`
    margin-left: 25px;
    margin-bottom: 25px;
    p{
        font-size: 20px;
        margin-bottom: 22px;
        color: #293845;
    }
    button{
        width: 82px;
        height: 43px;
        font-size: 20px;
        color: #FFFFFF;
        background-color: #E8833A;
        border: #E8833A;
        border-radius: 3px;
        margin-right: 8px;
    }
`