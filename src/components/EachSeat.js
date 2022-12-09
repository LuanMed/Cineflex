import { useState } from "react";
import styled from "styled-components";

export default function EachSeat({ seat, chosenSeats, setChosenSeats, chosenSeatsId, setChosenSeatsId }) {
    const [color, setColor] = useState("#C3CFD9");
    const [borderColor, setBorderColor] = useState('#808F9D');
    const [clicked, setClicked] = useState(false);

    function selectButton(seatNumber, seatId) {
        if (seat.isAvailable) {
            if (!clicked) {
                setColor('#1AAE9E');
                setBorderColor('#0E7D71');
                setClicked(true);
                setChosenSeats([...chosenSeats, seatNumber]);
                setChosenSeatsId([...chosenSeatsId, seatId]);

                console.log(seatNumber);
                console.log(chosenSeats);
                console.log(seatId)
            } else{
                setColor('#C3CFD9');
                setBorderColor('#808F9D');
                setClicked(false);
                setChosenSeats(chosenSeats.filter((s) => s != seatNumber));
                setChosenSeatsId(chosenSeatsId.filter((s) => s != seatId));
            }
        } else {
            alert("Esse assento não está disponível");
        }
    }
    return (
        <SeatButton
            color={color}
            borderColor={borderColor}
            isAvailable={seat.isAvailable}
            onClick={() => selectButton(seat.name, seat.id)}
            data-test="seat"
        >
            {seat.name}
        </SeatButton>
    )
}

const SeatButton = styled.button`
    width: 26px;
    height: 26px;
    font-size: 11px;
    background-color: ${props => props.isAvailable ? props.color : "#FBE192"};
    border: 1px solid ${props => props.isAvailable ? props.borderColor : "#F7C52B"};;
    border-radius: 12px;
    margin: 0 3px 18px 3px;
    cursor: pointer;
`