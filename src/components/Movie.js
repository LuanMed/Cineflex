import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
export default function Movie() {
    const URL = "https://mock-api.driven.com.br/api/v8/cineflex/movies"
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promise = axios.get(URL);
        promise.then(res => setMovies(res.data));
        promise.catch(err => alert(err.response.data.message));
    }, [])

    return (
        <>
            {movies.map((movie) =>
                <Link key={movie.id} to={`/sessoes/${movie.id}`}>
                    <ContainerMovie>
                        <img src={movie.posterURL} alt="poster do filme" />
                    </ContainerMovie>
                </Link>
            )}
        </>
    )

}

const ContainerMovie = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 145px;
    height: 209px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.15);
    border-radius: 3px;
    img{
        width: 129px;
    }
`