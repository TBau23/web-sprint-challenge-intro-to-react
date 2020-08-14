import React from 'react'
import styled from 'styled-components'


const StyledChar = styled.div`
    border: 4px solid cyan;
    background-image: linear-gradient(to right, black, darkslategray, lime);
    color: white;
    width: 60%;
    margin: 3% auto;
    display: flex;
    justify-content: space-between;

    div {
        display:flex;
        flex-flow: column wrap;
        margin: auto;

    }

`

export default function Character(props) {

    const { char, setCharData} = props

    return (
        <StyledChar>
            <div>
                <h2>{char.name}</h2>
                <h3>Status: {char.status}</h3>
                <h3>Species: {char.species}</h3>
                <h3>Place of Origin: {char.origin.name}</h3>
            </div>
            <img src={char.image} />
        </StyledChar>

    )

}
