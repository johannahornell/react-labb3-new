'use client'
import { useState } from 'react'
import SearchForm from '@/app/components/SearchForm'
import AnimeList from '@/app/components/AnimeList'

const SearchPage = () => {
    const [searchedAnime, setSearchedAnime] = useState([])
    const [searchedText, setSearchedText] = useState('')
    const [loading, setLoading] = useState(false)

    //Fetch animes based on search input
    const searchAnimes = async (anime) => {
        const res = await fetch(
            `https://api.jikan.moe/v4/anime?q=${anime}&order_by=popularity&min_score=1&sfw=true`
        )
        const data = await res.json()
        const searchData = data.data

        setSearchedAnime(searchData)
        setLoading(false)
    }

    const onSearch = (text) => {
        setLoading(true)
        searchAnimes(text)
        setSearchedText(text)
    }

    return (
        <div className="main-content-wrapper">
            <h1>Search anime</h1>
            <SearchForm onSearch={onSearch} />

            {loading ? (
                <div className="loader-wrapper">
                    <div className="loader"></div>
                </div>
            ) : searchedText ? (
                <>
                    <hr></hr>
                    <h3>Search result for &quot;{searchedText}&quot;</h3>

                    {searchedAnime.length ? (
                        <AnimeList animeList={searchedAnime} />
                    ) : (
                        <p>No animes found</p>
                    )}
                </>
            ) : (
                ''
            )}
        </div>
    )
}

export default SearchPage
