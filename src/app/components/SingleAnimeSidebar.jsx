import RelatedAnime from './RelatedAnime'

const SingleAnimeSidebar = async ({ anime }) => {
    return (
        <div className="sidebar">
            <h3>Information</h3>
            <p>
                <span className="info-label">Type:</span>
                <span>{anime.type ? anime.type : 'Unknown'}</span>
            </p>
            <p>
                <span className="info-label">Episodes:</span>
                <span>{anime.episodes ? anime.episodes : 'Unknown'}</span>
            </p>
            <p>
                <span className="info-label">Duration:</span>
                <span>{anime.duration ? anime.duration : 'Unknown'}</span>
            </p>
            <p>
                <span className="info-label">Status:</span>
                <span>{anime.status ? anime.status : 'Not available'}</span>
            </p>
            <p>
                <span className="info-label">Aired:</span>
                {anime.aired.string ? (
                    <span>{anime.aired.string}</span>
                ) : (
                    'Not available'
                )}
            </p>
            <p>
                <span className="info-label">Source:</span>
                <span>{anime.source ? anime.source : 'Unknown'}</span>
            </p>
            <p>
                <span className="info-label">Genres:</span>{' '}
                {anime.genres.length === 0
                    ? 'None found'
                    : anime.genres.map((genre, index) => (
                          <span key={genre.mal_id}>
                              {(index ? ', ' : '') + genre.name}
                          </span>
                      ))}
            </p>
            {anime.themes.length === 0 ? (
                ''
            ) : (
                <p>
                    <span className="info-label">Themes:</span>{' '}
                    {anime.themes.map((theme, index) => (
                        <span key={theme.mal_id}>
                            {(index ? ', ' : '') + theme.name}
                        </span>
                    ))}
                </p>
            )}

            <p>
                <span className="info-label">Studios:</span>{' '}
                {anime.studios.length === 0
                    ? 'None found'
                    : anime.studios.map((studio, index) => (
                          <span key={studio.mal_id}>
                              {(index ? ', ' : '') + studio.name}
                          </span>
                      ))}
            </p>
            <h3>Statistics</h3>
            <p>
                <span className="info-label">Score:</span>
                <span>{anime.score === null ? '--' : anime.score}</span>
            </p>
            <p>
                <span className="info-label">Ranked:</span>
                <span>{anime.rank === null ? '--' : '#' + anime.rank}</span>
            </p>
            <p>
                <span className="info-label">Popularity:</span>
                <span>
                    {anime.popularity === null ? '--' : '#' + anime.popularity}
                </span>
            </p>
            <p>
                <span className="info-label">Favorites:</span>
                <span>{anime.favorites ? anime.favorites : 'Unknown'}</span>
            </p>
            <RelatedAnime id={anime.mal_id} />
        </div>
    )
}

export default SingleAnimeSidebar
