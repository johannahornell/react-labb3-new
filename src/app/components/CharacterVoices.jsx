import React from 'react'

const CharacterVoices = ({ characterVoices }) => {
    console.log(characterVoices)
    return (
        <div>
            <h2>Voice Actors</h2>
            <div className="">
                {characterVoices.map((voice, index) => (
                    <div key={index}>
                        <p>
                            {voice.person.name} - {voice.language}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CharacterVoices
