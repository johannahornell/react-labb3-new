import Link from 'next/link'
import { IoStar } from 'react-icons/io5'

const CharacterAnimeCard = ({ anime }) => {
    return (
        <Link
            href={`/anime/${anime.anime.mal_id}`}
            className="anime-card"
            key={anime.mal_id}
        >
            <div>
                <div
                    className="anime-image"
                    style={{
                        backgroundImage: `url(${anime.anime.images.jpg.image_url})`
                    }}
                ></div>
                {/* Duplicate image for cool blur hover effect */}
                <div
                    className="anime-image hover-background-img"
                    style={{
                        backgroundImage: `url(${anime.anime.images.jpg.image_url})`
                    }}
                ></div>
            </div>
            <h3>
                {anime.anime.title}
            </h3>
            <div className="info-wrapper">
                <p className="role">{anime.role} character</p>
            </div>
        </Link>
    )
}

export default CharacterAnimeCard
