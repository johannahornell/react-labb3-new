'use client'
import { useState, useEffect } from 'react'

import CharacterCard from './CharacterCard'

const fetchAnimeCharacters = async (id) => {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/characters`)
    const data = await res.json()
    return data
}

const CharacterList = ({ id }) => {
    const [characters, setCharacters] = useState([]) // Store the list of characters
    const [visibleCount, setVisibleCount] = useState(6) // Number of characters to show

    useEffect(() => {
        const getData = async () => {
            const charactersFromServer = await fetchAnimeCharacters(id)
            const charactersList = charactersFromServer.data

            // Sort characters by favorites
            const charactersByFavorite = charactersList.sort(
                (a, b) => b.favorites - a.favorites
            )

            setCharacters(charactersByFavorite) // Save sorted characters to state
        }

        getData()
    }, [id]) // The effect runs when the component mounts or the id changes

    const handleShowMore = () => {
        setVisibleCount((prevCount) => prevCount + 6) // Increase the count by 6
    }

    return (
        <div className="character-list-wrapper">
            <h2>Top characters</h2>
            {characters.length
                ? characters
                      //Only show the first six characters
                      .slice(0, visibleCount)
                      .map((character) => (
                          <CharacterCard
                              key={character.character.mal_id}
                              character={character}
                          />
                      ))
                : 'No characters found'}
            {visibleCount < characters.length && (
                <div className="character-btn-wrapper">
                    <button className="btn" onClick={handleShowMore}>
                        Show more
                    </button>
                </div>
            )}
        </div>
    )
}

export default CharacterList
