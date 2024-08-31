'use client'
import { useState, useEffect } from 'react'

import Link from 'next/link'
import { BsDot } from 'react-icons/bs'
import { IoTimeOutline, IoStarOutline } from 'react-icons/io5'
import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md'

const HeaderStartTest = () => {
    const [promotedAnime, setPromotedAnime] = useState([])
    const [promotedAnimeIndex, setPromotedAnimeIndex] = useState(0)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const promotedAnimeList = [33352, 50594, 34599, 32281]

    const fetchAnime = async (id) => {
        try {
            const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`)
            const data = await res.json()
            return data
        } catch (error) {
            console.error('Error fetching anime:', error)
            setError(error)
        }
    }

    const getPreviousAnime = async () => {
        const previousAnimeIndex = promotedAnimeIndex - 1
        let previousAnimeToload

        if (previousAnimeIndex < 0) {
            previousAnimeToload =
                promotedAnimeList[promotedAnimeList.length - 1]
        } else {
            previousAnimeToload = promotedAnimeList[previousAnimeIndex]
        }

        const animesFromServer = await fetchAnime(previousAnimeToload)

        setPromotedAnime(animesFromServer.data)
        setPromotedAnimeIndex(previousAnimeIndex)
    }

    const getNextAnime = async () => {
        const nextAnimeIndex = promotedAnimeIndex + 1
        let nextAnimeToload

        if (nextAnimeIndex === promotedAnimeList.length) {
            nextAnimeToload = promotedAnimeList[0]
        } else {
            nextAnimeToload = promotedAnimeList[nextAnimeIndex]
        }

        const animesFromServer = await fetchAnime(nextAnimeToload)

        setPromotedAnime(animesFromServer.data)
        setPromotedAnimeIndex(nextAnimeIndex)
    }

    useEffect(() => {
        const getAnime = async (id) => {
            const animeFromServer = await fetchAnime(id)
            setPromotedAnime(animeFromServer.data)
            setLoading(false)
        }

        getAnime(promotedAnimeList[0])
    }, [])

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error loading anime.</div>
    if (!promotedAnime) return null

    //Function to shorten the synopsis
    const truncate = (input) => {
        const noLineBreaksInput = input.replace(/(\r\n|\n|\r)/g, ' ')
        return noLineBreaksInput.length > 270
            ? `${noLineBreaksInput.substring(0, 268)}...`
            : noLineBreaksInput
    }

    return (
        <div className={`header-anime-wrapper anime-${promotedAnime.mal_id}`}>
            <div className="overlay"></div>
            <div className="header-anime-content">
                <div
                    className="anime-image"
                    style={{
                        backgroundImage: promotedAnime.images
                            ? `url(${promotedAnime.images.jpg.large_image_url})`
                            : 'none'
                    }}
                ></div>
                <div className="information">
                    <h2>
                        {promotedAnime.title_english === null
                            ? promotedAnime.title
                            : promotedAnime.title_english}
                    </h2>
                    <h3>{promotedAnime.title_japanese}</h3>
                    <div className="genre">
                        {promotedAnime.genres &&
                            promotedAnime.genres.map((genre) => (
                                <span key={genre.mal_id}>
                                    {genre.name}{' '}
                                    <BsDot className="dot" size={'1.4rem'} />
                                </span>
                            ))}
                    </div>
                    <p>{truncate(promotedAnime.synopsis)}</p>
                    <div className="extra">
                        <div>
                            <IoTimeOutline className="icon" size={'1.4rem'} />{' '}
                            <span>{promotedAnime.episodes} episodes</span>
                        </div>
                        <div>
                            <IoStarOutline className="icon" size={'1.4rem'} />{' '}
                            <span>{promotedAnime.score}</span>
                        </div>
                    </div>

                    <Link
                        href={`/anime/${promotedAnime.mal_id}`}
                        className="btn"
                    >
                        Read more
                    </Link>
                    <button className="slider-btn previous">
                        <MdArrowBackIos
                            size={'2rem'}
                            onClick={getPreviousAnime}
                        />
                    </button>
                    <button className="slider-btn next">
                        <MdArrowForwardIos
                            size={'2rem'}
                            onClick={getNextAnime}
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HeaderStartTest
