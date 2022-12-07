import styled from "styled-components"

export default function Session(){
    return (
        <ContainerSession>
            <p>Quinta-feira - 24/06/2021</p>
            <button>15:00</button>
            <button>19:00</button>
        </ContainerSession>
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