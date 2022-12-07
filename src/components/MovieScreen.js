import styled from "styled-components";
import Movie from "./Movie";

export default function MovieScreen() {
    return (
        <ContainerMovieScreen>
            <Header>Selecione o filme</Header>
            <ContainerMovies>
                <Movie />
            </ContainerMovies>
        </ContainerMovieScreen>
    )
}

const ContainerMovieScreen = styled.div`
`

const ContainerMovies = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px

`

const Header = styled.header`
    width: 100vw;
    height: 110px;
    font-size: 24px;
    line-height: 110px;
    text-align: center;
    color: #293845;
`