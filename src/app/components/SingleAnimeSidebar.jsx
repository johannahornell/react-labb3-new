import React from 'react'

const SingleAnimeSidebar = ({ anime }) => {
    console.log(anime)
    return (
        <div className="info-sidebar">
            <p>
                Type: <span>{anime.type}</span>
            </p>
            <p>
                Episodes: <span>{anime.episodes}</span>
            </p>
            <p>
                Duration: <span>{anime.duration}</span>
            </p>
            <p>
                Status: <span>{anime.status}</span>
            </p>
            <p>
                Aired: <span>{anime.aired.string}</span>
            </p>
            <p>
                Source: <span>{anime.source}</span>
            </p>
            <p>
                Genres:{' '}
                {anime.genres.map((genre, index) => (
                    <span key={genre.mal_id}>
                        {(index ? ', ' : '') + genre.name}
                    </span>
                ))}
            </p>
            <p>
                Themes:{' '}
                {anime.themes.map((theme, index) => (
                    <span key={theme.mal_id}>
                        {(index ? ', ' : '') + theme.name}
                    </span>
                ))}
            </p>
            <p>
                Studios:{' '}
                {anime.studios.map((studio, index) => (
                    <span key={studio.mal_id}>
                        {(index ? ', ' : '') + studio.name}
                    </span>
                ))}
            </p>
        </div>
    )
}

export default SingleAnimeSidebar
