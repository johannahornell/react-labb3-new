import Image from 'next/image'
import CharacterAnimeCard from './CharacterAnimeCard'

const CharacterAnimeography = ({ characterAnime }) => {
    console.log(characterAnime[1].anime.images)
    return (
        <div>
            <h2>Animeography</h2>
            <div className="anime-list-wrapper small">
                {characterAnime.map((anime) => (
                    <CharacterAnimeCard key={anime.mal_id} anime={anime} />
                ))}
            </div>
        </div>
    )
}

export default CharacterAnimeography
