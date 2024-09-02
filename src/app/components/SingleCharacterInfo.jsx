import CharacterAbout from './CharacterAbout'
import CharacterGallery from './CharacterGallery'
import CharacterAnimeography from './CharacterAnimeography'
import CharacterVoices from './CharacterVoices'

const fetchCharacter = async (id) => {
    const res = await fetch(`https://api.jikan.moe/v4/characters/${id}/full`)
    const data = await res.json()
    return data
}

const fetchCharacterImages = async (id) => {
    const res = await fetch(
        `https://api.jikan.moe/v4/characters/${id}/pictures`
    )
    const data = await res.json()
    return data
}

const SingleCharacterInfo = async ({ id }) => {
    const characterFromServer = await fetchCharacter(id)
    const character = characterFromServer.data

    const characterImagesFromServer = await fetchCharacterImages(id)
    const characterImages = characterImagesFromServer.data

    console.log(character)

    return (
        <>
            <div className="header-character-wrapper single">
                <div className="overlay"></div>
                <div className="header-character-content">
                    <div className="top-content">
                        <div>
                            <h1>{character.name}</h1>
                            <h3>Kanji: {character.name_kanji}</h3>
                        </div>
                        <div>
                            <p className="alias-label">Also known as</p>
                            {character.nicknames.length === 0 ? (
                                ''
                            ) : (
                                <p className='aliases'>
                                    {character.nicknames.map(
                                        (nickname, index) => (
                                            <span key={index}>
                                                {(index ? ', ' : '') + nickname}
                                            </span>
                                        )
                                    )}
                                </p>
                            )}
                        </div>
                    </div>
                    <CharacterAbout character={character} />
                </div>
            </div>
            <div className="main-content-wrapper single">
                <div className="character-more-info-wrapper">
                    <CharacterAnimeography characterAnime={character.anime} />
                    <hr />
                    <CharacterVoices />
                    <hr />
                    <CharacterGallery characterImages={characterImages} />
                </div>
            </div>
        </>
    )
}

export default SingleCharacterInfo
