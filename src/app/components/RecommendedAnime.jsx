import AnimeList from './AnimeList'

const fetchAnimes = async () => {
    const res = await fetch(
        'https://api.jikan.moe/v4/users/jjohannas/favorites'
    )
    const data = await res.json()
    return data
}

const RecommendedAnime = async () => {
    const animesFromServer = await fetchAnimes()
    const animeList = animesFromServer.data.anime

    return (
        <>
            <h1>Recommendations</h1>
            <AnimeList animeList={animeList} />
        </>
    )
}

export default RecommendedAnime
