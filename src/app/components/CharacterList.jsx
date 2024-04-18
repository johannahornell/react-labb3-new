import CharacterCard from "./CharacterCard"

const fetchAnimeCharacters = async (id) => {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/characters`)
    const data = await res.json()
    return data
}

const CharacterList = async ({ id }) => {
    const charactersFromServer = await fetchAnimeCharacters(id)
    const charactersList = charactersFromServer.data
    // console.log(charactersList)

    return (
        <div className="character-list-wrapper">
            <h2>Characters</h2>
            {charactersList.map((character) => (
                character.role === "Main" ? <CharacterCard key={character.character.mal_id} character={character} /> : ""
            ))}
        </div>
    )
}

export default CharacterList
