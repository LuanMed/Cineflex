import styled from "styled-components";

export default function Movie() {

    return (
        <>
            <ContainerMovie>
                <img src="https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg" alt="poster do filme" />
            </ContainerMovie>
            <ContainerMovie>
                <img src="https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg" alt="poster do filme" />
            </ContainerMovie>
            <ContainerMovie>
                <img src="https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg" alt="poster do filme" />
            </ContainerMovie>
            <ContainerMovie>
                <img src="https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg" alt="poster do filme" />
            </ContainerMovie>
            <ContainerMovie>
                <img src="https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg" alt="poster do filme" />
            </ContainerMovie>
            <ContainerMovie>
                <img src="https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg" alt="poster do filme" />
            </ContainerMovie>
            <ContainerMovie>
                <img src="https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg" alt="poster do filme" />
            </ContainerMovie>
            <ContainerMovie>
                <img src="https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg" alt="poster do filme" />
            </ContainerMovie>
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