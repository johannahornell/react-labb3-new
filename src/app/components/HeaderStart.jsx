
const fetchAnime = async () => {
    const res = await fetch('https://api.jikan.moe/v4/anime/33352')
    const data = await res.json()
    return data
}

const HeaderStart = async () => {
    const animeFromServer = await fetchAnime()
    const anime = animeFromServer.data
    const date = new Date(anime.aired.from)
    const year = date.getFullYear()

    return (
        <div className="header-start-wrapper">
            <div className="overlay"></div>
            <div className="header-start-content">
                <div className="anime-image" style={{ backgroundImage: `url(${anime.images.jpg.large_image_url})` }}></div>
                <div className="information">
                    <span>{year}</span>
                    <h2>{anime.title}</h2>
                    <div className="genre">
                        {anime.genres.map((genre) => (
                            <span key={genre.mal_id}>{genre.name}</span>
                        ))}
                    </div>
                    <p>{anime.synopsis}</p>
                    <div>
                        <span>Episodes: {anime.episodes}</span>
                        <span>Rating: {anime.score}/10</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderStart
