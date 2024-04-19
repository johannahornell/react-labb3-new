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

    return (
        <>
            <HeaderSingleAnime anime={anime} />
            <div className="main-content-wrapper single">
                <div className="anime-info-content">
                    <SingleAnimeSidebar anime={anime} />
                    <div className="content">
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
