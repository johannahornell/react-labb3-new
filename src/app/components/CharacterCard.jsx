import Image from 'next/image'

const CharacterCard = ({ character }) => {
    return (
        <div>
            <Image
                src={character.character.images.jpg.image_url}
                width={145}
                height={225}
                alt="Picture of character"
            />
            <h4>{character.character.name}</h4>
        </div>
    )
}

export default CharacterCard
