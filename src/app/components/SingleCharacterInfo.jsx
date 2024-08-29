const fetchCharacter = async (id) => {
    const res = await fetch(`https://api.jikan.moe/v4/characters/${id}/full`)
    const data = await res.json()
    return data
}

const SingleCharacterInfo = async ({ id }) => {
    const characterFromServer = await fetchCharacter(id)
    const character = characterFromServer.data

    console.log(character)

    return (
        <div className="main-content-wrapper">
            <h1>{character.name}</h1>
        </div>
    )
}

export default SingleCharacterInfo
