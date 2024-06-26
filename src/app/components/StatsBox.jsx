const StatsBox = ({ anime }) => {
    return (
        <div className="stats-box">
            <div>
                <p>Score</p>
                <span>{anime.score === null ? '--' : anime.score}</span>
            </div>
            <div>
                <p>Rank</p>
                <span>{anime.rank === null ? '--' : '#' + anime.rank}</span>
            </div>
            <div>
                <p>Popularity</p>
                <span>
                    {anime.popularity === null ? '--' : '#' + anime.popularity}
                </span>
            </div>
        </div>
    )
}

export default StatsBox
