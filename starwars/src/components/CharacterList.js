import React from 'react'
import Character from './Character'


export default function CharacterList(props) {

    const {charData, setCharData} = props

    return (

        <div>
            {
                charData.map(char => {
                    return <Character
                        key={char.id}
                        char={char}
                        setCharData={setCharData}
                    />
                })
            }

        </div>
    )

}