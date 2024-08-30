import Image from 'next/image'

const CharacterAbout = ({ character }) => {
    const aboutParagraphs = character.about
        .split('\n')
        .filter((line) => line.trim() !== '')

    const decodeHtmlEntities = (text) => {
        return text.replace(/&gt;/g, '>')
    }

    return (
        <div className="character-info-wrapper">
            <Image
                src={character.images.jpg.image_url}
                width={225}
                height={350}
                alt="Picture of character"
                className="character-image"
            />
            <div className="about-wrapper">
                {aboutParagraphs.map((paragraph, index) => {
                    const colonIndex = paragraph.indexOf(':')

                    // Check if the colon exists and appears early in the text (e.g., within the first 20 characters)
                    if (colonIndex > 0 && colonIndex <= 20) {
                        const beforeColon = paragraph.slice(0, colonIndex)
                        const afterColon = paragraph
                            .slice(colonIndex + 1)
                            .trim()

                        return (
                            <p className="paragraph-with-label" key={index}>
                                <span className="about-label">
                                    {beforeColon}:
                                </span>{' '}
                                {decodeHtmlEntities(afterColon)}
                            </p>
                        )
                    }

                    return <p key={index}>{decodeHtmlEntities(paragraph)}</p>
                })}
            </div>
        </div>
    )
}

export default CharacterAbout
