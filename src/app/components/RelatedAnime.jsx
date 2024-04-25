import Link from 'next/link'

//Fetch animes that are related to current anime, like sequels and spinoffs
const fetchRelatedAnime = async (id) => {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/relations`)
    const data = await res.json()
    return data
}

const RelatedAnime = async ({ id }) => {
    const relatedAnimeFromServer = await fetchRelatedAnime(id)
    const relatedAnime = relatedAnimeFromServer.data

    //Remove related that are under Adaption, since those are not animes
    const filteredRelatedAnime = relatedAnime.filter(
        (x) => x.relation != 'Adaptation'
    )

    return (
        <>
            <h3>Related anime</h3>
            {filteredRelatedAnime.length === 0
                ? 'No related anime was found'
                : filteredRelatedAnime.map((list) => (
                      <div key={list.relation}>
                          <span className="related-label">{list.relation}</span>
                          <ul>
                              {list.entry.map((item) => (
                                  <li key={item.mal_id}>
                                      <Link href={`/anime/${item.mal_id}`}>
                                          {item.name}
                                      </Link>
                                  </li>
                              ))}
                          </ul>
                      </div>
                  ))}
        </>
    )
}

export default RelatedAnime
