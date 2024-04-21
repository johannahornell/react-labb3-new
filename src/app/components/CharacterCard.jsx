import Image from 'next/image'

const CharacterCard = ({ character }) => {
    const japaneseVoiceActors = character.voice_actors.filter(
        (actor) => actor.language === 'Japanese'
    )

    return (
        <div className="character-card">
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
                    {japaneseVoiceActors.slice(0, 1).map((actor) => (
                        <span key={actor.person.mal_id}>
                            {actor.person.name}
                        </span>
                    ))}
                </p>
            </div>
        </div>
    )
}

export default CharacterCard
