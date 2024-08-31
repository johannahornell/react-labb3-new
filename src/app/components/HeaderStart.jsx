import Link from 'next/link'
import { BsDot } from 'react-icons/bs'
import { IoTimeOutline, IoStarOutline } from 'react-icons/io5'
import { MdArrowForwardIos } from "react-icons/md";

//Fetch specific anime to showcase on the homepage
const fetchAnime = async (id) => {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`)
    const data = await res.json()
    return data
}

const HeaderStart = async () => {
    const animeFromServer = await fetchAnime(33352)
    const anime = animeFromServer.data

    //Function to shorten the synopsis
    const truncate = (input) => {
        return input.length > 270 ? `${input.substring(0, 268)}...` : input
    }

    return (
        <div className={`header-anime-wrapper anime-${anime.mal_id}`}>
            <div className="overlay"></div>
            <div className="header-anime-content">
                <div
                    className="anime-image"
                    style={{
                        backgroundImage: `url(${anime.images.jpg.large_image_url})`
                    }}
                ></div>
                <div className="information">
                    <span className="year">{anime.year}</span>
                    <h2>
                        {anime.title_english === null
                            ? anime.title
                            : anime.title_english}
                    </h2>
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
                    <MdArrowForwardIos />
                </div>
            </div>
        </div>
    )
}

export default HeaderStart
