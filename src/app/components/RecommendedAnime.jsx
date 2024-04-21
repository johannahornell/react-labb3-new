import AnimeList from './AnimeList'

const fetchAnimes = async () => {
    const res = await fetch(
        'https://api.jikan.moe/v4/users/jjohannas/favorites'
    )
    const data = await res.json()
    return data
}

const RecommendedAnime = async () => {
    // const [recommendedAnimeList, setRecommendedAnimeList] = useState([])
    const animeIDs = [16498, 19, 37521, 9253, 46102, 20583, 37510, 40834, 28851, 35839]
    const animesFromServer = await fetchAnimes()
    const animeList = animesFromServer.data.anime

    // const fetchRecommendedAnime = async (id) => {
    //     const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`)
    //     const data = await res.json()
    //     const animeData = data.data
    //     setRecommendedAnimeList((prevAnimeList) => [...prevAnimeList, animeData])
    //     return data
    // }


    return (
        <>
            <h1>Recommendations</h1>
            <hr></hr>
            <AnimeList animeList={animeList} />
        </>
    )
}

export default RecommendedAnime
