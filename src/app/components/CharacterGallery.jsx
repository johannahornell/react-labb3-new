import Image from 'next/image'

const CharacterGallery = ({ characterImages }) => {
    return (
        <div className="character-gallery">
            <h2>Gallery</h2>
            {characterImages.map((image, index) => (
                <div className="gallery-card" key={index}>
                    <Image
                        src={image.jpg.image_url}
                        width={220}
                        height={345}
                        alt="Picture of character"
                    />
                </div>
            ))}
        </div>
    )
}

export default CharacterGallery
