import SingleAnimeInfo from '@/app/components/SingleAnimeInfo'

const SingleAnimePage = ({ params: { id } }) => {
    return (
        <>
            <SingleAnimeInfo id={id} />
        </>
    )
}

export default SingleAnimePage
