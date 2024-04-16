'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { GiFuji } from 'react-icons/gi'
import { IoTelescope, IoSearchOutline } from 'react-icons/io5'
import { FaDice } from 'react-icons/fa'
import { usePathname } from 'next/navigation'

const Navigation = () => {
    const [scroll, setScroll] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY > 10)
        })
    }, [scroll])

    return (
        <div
            className={
                scroll ? 'navigation-wrapper scrolled' : 'navigation-wrapper'
            }
        >
            <div className="navigation-content">
                <div className="nav-left">
                    <h3>
                        <GiFuji size={'1.8rem'} /> <span>Anime</span>
                    </h3>
                    <ul>
                        <li>
                            <Link
                                href="/"
                                className={pathname == '/' ? 'active' : ''}
                            >
                                Recommended
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/anime/top-rated"
                                className={
                                    pathname == '/anime/top-rated'
                                        ? 'active'
                                        : ''
                                }
                            >
                                Top Rated
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/anime/currently-airing"
                                className={
                                    pathname == '/anime/currently-airing'
                                        ? 'active'
                                        : ''
                                }
                            >
                                Currently Airing
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='nav-right'>
                    <ul>
                        <li>
                            <Link
                                href="/randomize"
                                className={
                                    pathname == '/randomize' ? 'active' : ''
                                }
                            >
                                Randomize <FaDice />
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/search"
                                className={
                                    pathname == '/search' ? 'active' : ''
                                }
                            >
                                Search <IoSearchOutline />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navigation
