import Image from 'next/image'
import Link from 'next/link'

const CharacterCard = ({ character }) => {
    //Only get the japanese voice actors
    const japaneseVoiceActors = character.voice_actors.filter(
        (actor) => actor.language === 'Japanese'
    )

    return (
        <Link
            href={`/character/${character.character.mal_id}`}
            className="character-card"
            key={character.character.mal_id}
        >
            <Image
                src={character.character.images.jpg.image_url}
                width={129}
                height={200}
                alt="Picture of character"
            />
            <div className="character-info">
                <h4>{character.character.name}</h4>
                <p className="role">{character.role} character</p>
                <p className="actor">
                    <span className="info-label">Voiced by</span>
                    {/* If there are more than one voice actor, only show the first one */}
                    {japaneseVoiceActors.slice(0, 1).map((actor) => (
                        <span key={actor.person.mal_id}>
                            {actor.person.name}
                        </span>
                    ))}
                </p>
            </div>
        </Link>
    )
}

export default CharacterCard
