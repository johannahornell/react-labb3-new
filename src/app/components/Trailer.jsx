'use client'
import { useState } from 'react'
import Image from 'next/image'
import { IoPlay, IoClose } from 'react-icons/io5'

const Trailer = ({ trailerInfo }) => {
    const [popupOpen, setPopupOpen] = useState(false)
    const [trailerUrl, setTrailerUrl] = useState(null)

    const url = trailerInfo.embed_url
    const maximumThumbnail = trailerInfo.images.maximum_image_url

    return (
        <div className="trailer-wrapper">
            <h2>Watch trailer</h2>
            <div
                className="thumbnail-wrapper"
                style={{
                    backgroundImage: `url(${maximumThumbnail})`
                }}
            >
                <div
                    className="overlay"
                    onClick={() => {
                        setPopupOpen(true)
                    }}
                >
                    <span className="play-btn">
                        <IoPlay size={'3.5rem'} />
                    </span>
                </div>
            </div>
            <div
                className={`popup-wrapper ${popupOpen ? 'open' : ''}`}
                onClick={() => {
                    setPopupOpen(false)
                }}
            >
                <div className="popup">
                    {popupOpen ? (
                        <iframe
                            className="popup-video"
                            src={trailerInfo.embed_url}
                            height="100%"
                            width="100%"
                            frameBorder="0"
                            allowFullScreen="allowfullscreen"
                        ></iframe>
                    ) : (
                        ''
                    )}
                </div>

                <div className="close-popup">
                    <IoClose size={'2.2rem'} />
                </div>
            </div>
        </div>
    )
}

export default Trailer
