import Image from 'next/image'
import Link from 'next/link'

const AnimeCard = ({ anime }) => {
    return (
        <div className="anime-card" key={anime.mal_id}>
            <Image
                src={anime.images.jpg.image_url}
                alt=""
                width="225"
                height="327"
            />
            <h3>{anime.title}</h3>
            {anime.hasOwnProperty('genres') ? (
                <div>
                    {anime.genres.map((genre) => (
                        <span key={genre.mal_id}>{genre.name}</span>
                    ))}
                </div>
            ) : (
                ''
            )}
            {anime.hasOwnProperty('score') ? <p>Rating: {anime.score}</p> : ''}
            <Link href={`/anime/${anime.mal_id}`}>See more</Link>
        </div>
    )
}

export default AnimeCard
