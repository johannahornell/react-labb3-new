import CharacterCard from './CharacterCard'

const fetchAnimeCharacters = async (id) => {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/characters`)
    const data = await res.json()
    return data
}

const CharacterList = async ({ id }) => {
    const charactersFromServer = await fetchAnimeCharacters(id)
    const charactersList = charactersFromServer.data

    const charactersByFavorite = charactersList.sort(
        (a, b) => b.favorites - a.favorites
    )

    return (
        <div className="character-list-wrapper">
            <h2>Top characters</h2>
            {charactersList.length
                ? charactersByFavorite
                      .slice(0, 6)
                      .map((character) => (
                          <CharacterCard
                              key={character.character.mal_id}
                              character={character}
                          />
                      ))
                : 'No characters found'}
        </div>
    )
}

export default CharacterList
