import HeaderSingleAnime from '@/app/components/HeaderSingleAnime'
import SingleAnimeInfo from '@/app/components/SingleAnimeInfo'

const SingleAnimePage = ({ params: { id } }) => {
    return (
        <>
            {/* <HeaderSingleAnime id={id} /> */}
            <SingleAnimeInfo id={id} />
        </>
    )
}

export default SingleAnimePage
