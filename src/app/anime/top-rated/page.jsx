'use client'
import { useState, useEffect } from 'react'
import AnimeList from '@/app/components/AnimeList'
import Pagination from '@/app/components/Pagination'

const TopRatedPage = () => {
    const [topAnimes, setTopAnimes] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [hasNextPage, setHasNextPage] = useState(true)
    const [loading, setLoading] = useState(true)

    const getNextPage = async () => {
        const pageToload = currentPage + 1
        const animesFromServer = await fetchTopAnimes(pageToload)

        setTopAnimes(animesFromServer.data)
        setCurrentPage(pageToload)

        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const getPreviousPage = async () => {
        const pageToload = currentPage - 1
        const animesFromServer = await fetchTopAnimes(pageToload)

        setTopAnimes(animesFromServer.data)
        setCurrentPage(pageToload)

        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    useEffect(() => {
        const getTopAnimes = async () => {
            const animesFromServer = await fetchTopAnimes(1)
            setTopAnimes(animesFromServer.data)
        }

        getTopAnimes()
    }, [])

    const fetchTopAnimes = async (page) => {
        const res = await fetch(
            `https://api.jikan.moe/v4/top/anime?page=${page}&limit=25`
        )
        const data = await res.json()

        setHasNextPage(data.pagination.has_next_page)
        setLoading(false)

        return data
    }

    return (
        <div className="main-content-wrapper">
            <h1>Top rated</h1>
            <hr></hr>
            {loading ? (
                <div className="loader-wrapper">
                    <div className="loader"></div>
                </div>
            ) : (
                <>
                    <AnimeList animeList={topAnimes} />
                    <Pagination
                        onNext={getNextPage}
                        onPrevious={getPreviousPage}
                        currentPage={currentPage}
                        hasNextPage={hasNextPage}
                    />
                </>
            )}
        </div>
    )
}

export default TopRatedPage
