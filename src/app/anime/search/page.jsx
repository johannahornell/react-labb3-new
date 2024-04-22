'use client'
import { useState, useEffect, useRef } from 'react'
import AnimeList from '@/app/components/AnimeList'

const SearchPage = () => {
    const [searchedAnime, setSearchedAnime] = useState([])
    const [text, setText] = useState('')
    const [searchedText, setSearchedText] = useState('')
    const inputRef = useRef(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    const searchAnimes = async (anime) => {
        const res = await fetch(
            `https://api.jikan.moe/v4/anime?q=${anime}&order_by=popularity&min_score=1&sfw=true`
        )
        const data = await res.json()
        const searchData = data.data

        setSearchedAnime(searchData)
        setLoading(false)
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Write your searchterm first')
            return
        }
        setLoading(true)
        searchAnimes(text)
        setSearchedText(text)
        setText('')
    }
    return (
        <div className="main-content-wrapper">
            <h1>Search anime</h1>
            <div className="search-wrapper">
                <form onSubmit={onSubmit} className="search-form">
                    <input
                        type="text"
                        placeholder="Search anime"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        ref={inputRef}
                    ></input>
                    <input type="submit" value="Search" className="btn" />
                </form>
            </div>
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
