import AnimeInfo from '@/app/components/SingleAnimeInfo'

const SingleAnimePage = ({ params: { id } }) => {
    return (
        <>
            <AnimeInfo id={id} />
        </>
    )
}

export default SingleAnimePage
