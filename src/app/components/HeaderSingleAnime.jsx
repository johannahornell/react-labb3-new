import { BsDot } from 'react-icons/bs'

const HeaderSingleAnime = ({ anime }) => {
    const genresArray = []
    anime.genres.map((genre) => genresArray.push('genre-' + genre.mal_id))
    const synopsis = anime.synopsis
        ? anime.synopsis.replace('[Written by MAL Rewrite]', '')
        : 'No synopsis information has been added to this title.'

    return (
        <div
            className={`header-anime-wrapper single ${genresArray.join(
                ' '
            )} anime-${anime.mal_id}`}
        >
            <div className="overlay"></div>
            <div className="header-anime-content">
                <div className="top-content">
                    <div>
                        <h1>
                            {anime.title_english === null
                                ? anime.title
                                : anime.title_english}
                        </h1>
                        <h3>
                            Original title:{' '}
                            {anime.title_japanese === null
                                ? anime.title
                                : anime.title_japanese}
                        </h3>
                    </div>
                    <div className="stats-box">
                        <div>
                            <p>Score</p>
                            <span>
                                {anime.score === null
                                    ? '--'
                                    : (
                                          Math.round(anime.score * 10) / 10
                                      ).toFixed(1)}
                            </span>
                        </div>
                        <div>
                            <p>Rank</p>
                            <span>
                                {anime.rank === null ? '--' : '#' + anime.rank}
                            </span>
                        </div>
                        <div>
                            <p>Popularity</p>
                            <span>
                                {anime.popularity === null
                                    ? '--'
                                    : '#' + anime.popularity}
                            </span>
                        </div>
                    </div>
                </div>
                <div
                    className="anime-image"
                    style={{
                        backgroundImage: `url(${anime.images.jpg.large_image_url})`
                    }}
                ></div>
                <div className="information">
                    <div className="genre">
                        {anime.genres.map((genre) => (
                            <span key={genre.mal_id}>
                                {genre.name}{' '}
                                <BsDot className="dot" size={'1.4rem'} />
                            </span>
                        ))}
                    </div>
                    <p>{synopsis}</p>
                </div>
            </div>
        </div>
    )
}

export default HeaderSingleAnime
