import HeaderSingleAnime from './HeaderSingleAnime'
import SingleAnimeSidebar from './SingleAnimeSidebar'
import Trailer from './Trailer'
import CharacterList from './CharacterList'

const fetchAnime = async (id) => {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`)
    const data = await res.json()
    return data
}

const SingleAnimeInfo = async ({ id }) => {
    const animeFromServer = await fetchAnime(id)
    const anime = animeFromServer.data

    const synopsis = anime.synopsis
        ? anime.synopsis.replace('[Written by MAL Rewrite]', '')
        : 'No synopsis information has been added to this title.'

    return (
        <>
            <HeaderSingleAnime anime={anime} />
            <div className="main-content-wrapper single">
                <div className="anime-info-content">
                    <SingleAnimeSidebar anime={anime} />
                    <div className="content">
                        <div className="genre">
                            {anime.genres.map((genre, index) => (
                                <span key={genre.mal_id}>
                                    {(index ? ', ' : '') + genre.name}
                                </span>
                            ))}
                        </div>
                        <p className="synopsis">{synopsis}</p>
                        {anime.trailer.youtube_id ? (
                            <Trailer trailerInfo={anime.trailer} />
                        ) : (
                            ''
                        )}
                        <CharacterList id={id} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleAnimeInfo
