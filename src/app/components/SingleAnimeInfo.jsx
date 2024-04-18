import Link from 'next/link'
import HeaderSingleAnime from './HeaderSingleAnime'
import SingleAnimeSidebar from './SingleAnimeSidebar'
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
                    {/* <iframe
                    width="854"
                    height="480"
                    src={anime.trailer.embed_url}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    autoPlay={false}
                ></iframe> */}
                    <CharacterList id={id} />
                </div>
            </div>
        </>
    )
}

export default SingleAnimeInfo
