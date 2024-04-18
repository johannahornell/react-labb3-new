import Image from 'next/image'

const CharacterCard = ({ character }) => {
  return (
    <div>
        <h4>{character.character.name}</h4>
        <Image
        src={character.character.images.jpg.image_url}
        width={225}
        height={350}
        alt="Picture of character"
        />
    </div>
  )
}

export default CharacterCard
