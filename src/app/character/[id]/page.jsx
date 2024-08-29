import SingleCharacterInfo from '@/app/components/SingleCharacterInfo'

const SingleCharacterPage = ({ params: { id } }) => {
    return (
        <>
            <SingleCharacterInfo id={id} />
        </>
    )
}

export default SingleCharacterPage
