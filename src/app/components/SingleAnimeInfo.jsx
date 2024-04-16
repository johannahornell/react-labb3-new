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
        <div>
            <h1>{anime.title}</h1>
            <p>{anime.synopsis}</p>
        </div>
    )
}

export default AnimeInfo
