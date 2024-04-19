import RelatedAnime from './RelatedAnime'

const fetchRelatedAnime = async (id) => {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/relations`)
    const data = await res.json()
    return data
}

const SingleAnimeSidebar = async ({ anime }) => {
    const relatedAnimeFromServer = await fetchRelatedAnime(anime.mal_id)
    const relatedAnime = relatedAnimeFromServer.data

    return (
        <div className="sidebar">
            <h2>Information</h2>
            <p>
                <span className="info-label">Type</span>
                {anime.type ? <span>{anime.type}</span> : 'Unknown'}
            </p>
            <p>
                <span className="info-label">Episodes</span>
                {anime.episodes ? <span>{anime.episodes}</span> : 'Unknown'}
            </p>
            <p>
                <span className="info-label">Duration</span>
                {anime.duration ? <span>{anime.duration}</span> : 'Unknown'}
            </p>
            <p>
                <span className="info-label">Status</span>
                {anime.status ? <span>{anime.status}</span> : 'Not available'}
            </p>
            <p>
                <span className="info-label">Aired</span>
                {anime.aired.string ? (
                    <span>{anime.aired.string}</span>
                ) : (
                    'Not available'
                )}
            </p>
            <p>
                <span className="info-label">Source</span>
                {anime.source ? <span>{anime.source}</span> : 'Unknown'}
            </p>
            <p>
                <span className="info-label">Genres</span>{' '}
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
                    <span className="info-label">Themes</span>{' '}
                    {anime.themes.map((theme, index) => (
                        <span key={theme.mal_id}>
                            {(index ? ', ' : '') + theme.name}
                        </span>
                    ))}
                </p>
            )}

            <p>
                <span className="info-label">Studios</span>{' '}
                {anime.studios.length === 0
                    ? 'None found'
                    : anime.studios.map((studio, index) => (
                          <span key={studio.mal_id}>
                              {(index ? ', ' : '') + studio.name}
                          </span>
                      ))}
            </p>
            <hr></hr>
            <RelatedAnime id={anime.mal_id} />
        </div>
    )
}

export default SingleAnimeSidebar
