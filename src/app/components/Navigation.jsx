'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { IoTelescope, IoSearchOutline } from 'react-icons/io5'
import { usePathname } from 'next/navigation'

const Navigation = () => {
    const [scroll, setScroll] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY > 5)
        })
    }, [scroll])

    // Closes the menu when switching between pages, gives a warning but code is correct
    // It should not be dependent on mobileMenuOpen, but it needs to be dependent on pathname too see if the path has changed
    useEffect(
        () => (mobileMenuOpen ? setMobileMenuOpen(false) : void null),
        [pathname]
    )

    const toggleMenu = () => {
        setMobileMenuOpen((prevValue) => !prevValue)
    }

    return (
        <div
            className={`navigation-wrapper ${scroll ? 'scrolled' : ''} ${
                mobileMenuOpen ? 'mobile-nav-open' : ''
            }`}
        >
            <div
                className="mobile-nav-overlay"
                onClick={() => toggleMenu()}
            ></div>
            <div className="navigation-content">
                <div className="nav-left">
                    <Link href="/" className="logo-wrapper">
                        <IoTelescope size={'1.4rem'} className="logo-icon" />
                        <div className="logo-text">
                            <h4>Explore</h4>
                            <h3>Anime</h3>
                        </div>
                    </Link>

                    <ul>
                        <li>
                            <Link
                                href="/"
                                className={pathname == '/' ? 'active' : ''}
                            >
                                Home
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
                <div className="nav-right">
                    <ul>
                        <li>
                            <Link
                                href="/anime/search"
                                className={
                                    pathname == '/anime/search' ? 'active' : ''
                                }
                            >
                                <span>Search</span>{' '}
                                <IoSearchOutline
                                    className="
                                nav-icon"
                                    size={'1.4rem'}
                                />
                            </Link>
                        </li>
                        <li className="mobile-nav">
                            <div
                                className="hamburger"
                                onClick={() => toggleMenu()}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navigation
