import AnimeCard from './AnimeCard'

const AnimeList = ({ animeList }) => {
    return (
        <div className="anime-list-wrapper">
            {animeList.map((anime) => (
                <AnimeCard key={anime.mal_id} anime={anime} />
            ))}
        </div>
    )
}

export default AnimeList
