'use client'
import { useState, useEffect, useCallback } from 'react'
import AnimeList from '@/app/components/AnimeList'
import Pagination from '@/app/components/Pagination'

const TopRatedPage = () => {
    const [topAnime, setTopAnime] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    const getNextPage = async () => {
        const pageToload = currentPage + 1
        const animesFromServer = await fetchTopAnimes(pageToload)
        setTopAnime(animesFromServer.data)
        setCurrentPage(pageToload)
    }
    const getPreviousPage = async () => {
        const pageToload = currentPage - 1
        const animesFromServer = await fetchTopAnimes(pageToload)
        setTopAnime(animesFromServer.data)
        setCurrentPage(pageToload)
    }
    useEffect(() => {
        const getTopAnime = async () => {
            const animesFromServer = await fetchTopAnimes(1)
            setTopAnime(animesFromServer.data)
        }

        getTopAnime()
    }, [])

    const fetchTopAnimes = async (page) => {
        const res = await fetch(
            `https://api.jikan.moe/v4/top/anime?page=${page}&limit=25`
        )
        const data = await res.json()
        return data
    }
    // const animesFromServer = await fetchTopAnimes(1)
    // const animeList = animesFromServer.data
    // console.log(animesFromServer.pagination)

    return (
        <div className="main-content-wrapper">
            <h1>Top rated</h1>
            <AnimeList animeList={topAnime} />
            <Pagination
                onNext={getNextPage}
                onPrevious={getPreviousPage}
                currentPage={currentPage}
            />
        </div>
    )
}

export default TopRatedPage
