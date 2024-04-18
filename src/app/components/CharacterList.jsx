import CharacterCard from './CharacterCard'

const fetchAnimeCharacters = async (id) => {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/characters`)
    const data = await res.json()
    return data
}

const CharacterList = async ({ id }) => {
    const charactersFromServer = await fetchAnimeCharacters(id)
    const charactersList = charactersFromServer.data

    const charactersByFavorite = charactersList.sort((a, b) => b.favorites - a.favorites)

    const mainCharacters = charactersList.filter(
        (character) => character.role === 'Main'
    )

    return (
        <div className="character-list-wrapper">
            <h2>Characters</h2>
            {charactersByFavorite.slice(0, 10).map((character) => (
                <CharacterCard
                    key={character.character.mal_id}
                    character={character}
                />
            ))}
        </div>
    )
}

export default CharacterList
