'use client'
import { useState, useEffect } from 'react'
import AnimeList from '@/app/components/AnimeList'
import Pagination from '@/app/components/Pagination'

const CurrentlyAiringPage = () => {
    const [currentAnimes, setCurrentAnimes] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [hasNextPage, setHasNextPage] = useState(true)
    const [loading, setLoading] = useState(true)

    const getNextPage = async () => {
        const pageToload = currentPage + 1
        const animesFromServer = await fetchCurrentAnimes(pageToload)

        setCurrentAnimes(animesFromServer)
        setCurrentPage(pageToload)

        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const getPreviousPage = async () => {
        const pageToload = currentPage - 1
        const animesFromServer = await fetchCurrentAnimes(pageToload)

        setCurrentAnimes(animesFromServer)
        setCurrentPage(pageToload)

        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    useEffect(() => {
        const getCurrentAnimes = async () => {
            const animesFromServer = await fetchCurrentAnimes(1)
            setCurrentAnimes(animesFromServer)
        }

        getCurrentAnimes()
    }, [])

    const fetchCurrentAnimes = async (page) => {
        const res = await fetch(
            `https://api.jikan.moe/v4/seasons/now?page=${page}&limit=25&sfw=true`
        )
        const data = await res.json()
        const animeData = data.data

        setHasNextPage(data.pagination.has_next_page)
        setLoading(false)

        // Remove duplicates
        const ids = animeData.map(({ mal_id }) => mal_id)
        const filteredData = animeData.filter(
            ({ mal_id }, index) => !ids.includes(mal_id, index + 1)
        )

        return filteredData
    }

    return (
        <div className="main-content-wrapper">
            <h1>Anime - Currently airing</h1>
            {loading ? (
                <div className="loader-wrapper">
                    <div className="loader"></div>
                </div>
            ) : (
                <>
                    <AnimeList animeList={currentAnimes} />
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

export default CurrentlyAiringPage
