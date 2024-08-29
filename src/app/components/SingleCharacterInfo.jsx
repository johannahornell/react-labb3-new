import Image from 'next/image'

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

    const aboutParagraphs = character.about
        .split('\n')
        .filter((line) => line.trim() !== '')

    const characterImagesFromServer = await fetchCharacterImages(id)
    const characterImages = characterImagesFromServer.data

    console.log(character)

    return (
        <div className="main-content-wrapper">
            <h1>{character.name}</h1>
            <Image
                src={character.images.jpg.image_url}
                width={225}
                height={350}
                alt="Picture of character"
            />
            {aboutParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
            <div>
                {characterImages.map((image, index) => (
                    <Image
                        key={index}
                        src={image.jpg.image_url}
                        width={225}
                        height={350}
                        alt="Picture of character"
                    />
                ))}
            </div>
        </div>
    )
}

export default SingleCharacterInfo
