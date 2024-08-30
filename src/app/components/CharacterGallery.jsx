import Image from 'next/image'

const CharacterGallery = ({ characterImages }) => {
    return (
        <div>
            <h2>Gallery</h2>
            {characterImages.map((image, index) => (
                <Image
                    key={index}
                    src={image.jpg.image_url}
                    width={225}
                    height={350}
                    alt="Picture of character"
                />
            ))}
        </div>
    )
}

export default CharacterGallery
