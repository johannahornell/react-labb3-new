import Link from 'next/link'
import { BsDot } from 'react-icons/bs'
import { IoTimeOutline, IoStarOutline } from 'react-icons/io5'

const fetchAnime = async () => {
    const res = await fetch('https://api.jikan.moe/v4/anime/33352')
    const data = await res.json()
    return data
}

const HeaderStart = async () => {
    const animeFromServer = await fetchAnime()
    const anime = animeFromServer.data
    console.log(anime)

    const truncate = (input) => {
        return input.length > 270 ? `${input.substring(0, 268)}...` : input
    }

    return (
        <div className="header-start-wrapper">
            <div className="overlay"></div>
            <div className="header-start-content">
                <div
                    className="anime-image"
                    style={{
                        backgroundImage: `url(${anime.images.jpg.large_image_url})`
                    }}
                ></div>
                <div className="information">
                    <span className="year">{anime.year}</span>
                    <h2>{anime.title_english}</h2>
                    <h3>{anime.title_japanese}</h3>
                    <div className="genre">
                        {anime.genres.map((genre) => (
                            <span key={genre.mal_id}>
                                {genre.name}{' '}
                                <BsDot className="dot" size={'1.4rem'} />
                            </span>
                        ))}
                    </div>
                    <p>{truncate(anime.synopsis)}</p>
                    <div className="extra">
                        <div>
                            <IoTimeOutline className="icon" size={'1.4rem'} />{' '}
                            <span>{anime.episodes} episodes</span>
                        </div>
                        <div>
                            <IoStarOutline className="icon" size={'1.4rem'} />{' '}
                            <span>{anime.score}</span>
                        </div>
                    </div>

                    <Link href={`/anime/${anime.mal_id}`} className="btn">
                        Read more
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeaderStart
