import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Session({ sessions }) {
    return (
        <>
            {sessions.map(s =>
                <ContainerSession key={s.date} data-test="movie-day">
                    <p>{s.weekday} - {s.date}</p>
                    {s.showtimes.map(showtime =>
                        <Link key={showtime.name} to={`/assentos/${showtime.id}`}>
                            <button data-test="showtime">{showtime.name}</button>
                        </Link>
                    )}
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
        cursor:pointer;
    }
`