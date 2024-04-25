import Link from 'next/link'
import { IoStar } from 'react-icons/io5'

const AnimeCard = ({ anime }) => {
    return (
        <Link
            href={`/anime/${anime.mal_id}`}
            className="anime-card"
            key={anime.mal_id}
        >
            <div>
                <div
                    className="anime-image"
                    style={{
                        backgroundImage: `url(${anime.images.jpg.large_image_url})`
                    }}
                ></div>
                <div
                    className="anime-image hover-background-img"
                    style={{
                        backgroundImage: `url(${anime.images.jpg.large_image_url})`
                    }}
                ></div>
            </div>
            <h3>
                {anime.hasOwnProperty('title_english') && anime.title_english
                    ? anime.title_english
                    : anime.title}
            </h3>
            <div className="info-wrapper">
                {anime.hasOwnProperty('genres') && anime.genres.length ? (
                    <div className="genre">
                        <span>
                            {anime.genres[0].name}
                            {anime.genres.length > 1
                                ? ', ' + anime.genres[1].name
                                : ''}
                        </span>
                    </div>
                ) : (
                    ''
                )}
                {anime.hasOwnProperty('score') ? (
                    <span className="score" data-testid="score-span">
                        <IoStar />{' '}
                        {anime.score === null
                            ? '--'
                            : (Math.round(anime.score * 10) / 10).toFixed(1)}
                    </span>
                ) : (
                    ''
                )}
            </div>
        </Link>
    )
}

export default AnimeCard
