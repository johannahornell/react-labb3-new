import AnimeList from '@/app/components/AnimeList'

const fetchAnimes = async () => {
    const res = await fetch('https://api.jikan.moe/v4/top/anime')
    const data = await res.json()
    return data
}

const TopRatedPage = async () => {
    const animesFromServer = await fetchAnimes()
    const animeList = animesFromServer.data

    return (
        <div className="main-content-wrapper">
            <h1>Top rated</h1>
            <AnimeList animeList={animeList} />
        </div>
    )
}

export default TopRatedPage
