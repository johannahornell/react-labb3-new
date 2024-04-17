
const fetchRandomAnime = async () => {
    const res = await fetch('https://api.jikan.moe/v4/random/anime')
    const data = await res.json()
    return data
}

const RandomizePage = async () => {
    const animesFromServer = await fetchRandomAnime()
    const anime = animesFromServer.data
    console.log(anime)

    return (
        <div className="main-content-wrapper">
            <div>
                <h1>{anime.title}</h1>
                <p>{anime.synopsis}</p>
            </div>
        </div>
    )
}

export default RandomizePage
