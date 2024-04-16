import Link from 'next/link'

const fetchAnime = async (id) => {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`)
    const data = await res.json()
    return data
}

const AnimeInfo = async ({ id }) => {
    const animeFromServer = await fetchAnime(id)
    const anime = animeFromServer.data
    console.log(anime)

    return (
        <div className="main-content-wrapper">
            <h1>{anime.title}</h1>
            <p>{anime.synopsis}</p>
            {/* <iframe
                width="854"
                height="480"
                src={anime.trailer.embed_url}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                autoPlay={false}
            ></iframe> */}
        </div>
    )
}

export default AnimeInfo
