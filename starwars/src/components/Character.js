import React from 'react'
import styled from 'styled-components'

const StyledChar = styled.div`
    border: 4px solid cyan;
    background-color: black;
    color: white;
    width: 60%;
    margin: 3% auto;

`

export default function Character(props) {

    const { char, setCharData } = props

    return (

        <StyledChar>
            <h2>{char.name}</h2>
            <h3>Status: {char.status}</h3>
            <h3>{char.species}</h3>
            <h3>Place of Origin: {char.origin.name}</h3>
            <img src={char.image}/>
        </StyledChar>

    )

}
