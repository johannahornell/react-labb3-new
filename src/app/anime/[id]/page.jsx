import AnimeInfo from "@/app/components/SingleAnimeInfo"

const SingleAnimePage = ({ params: { id} }) => {
  return (
    <div>
        <h2>{id}</h2>
        <AnimeInfo id={id} />
    </div>
  )
}

export default SingleAnimePage
