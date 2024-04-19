import Link from 'next/link'

const fetchRelatedAnime = async (id) => {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/relations`)
    const data = await res.json()
    return data
}

const RelatedAnime = async ({ id }) => {
    const relatedAnimeFromServer = await fetchRelatedAnime(id)
    const relatedAnime = relatedAnimeFromServer.data
    const filteredRelatedAnime = relatedAnime.filter(
        (x) => x.relation != 'Adaptation'
    )

    return (
        <>
            <h2>Related anime</h2>
            {filteredRelatedAnime.length === 0
                ? 'No related anime was found'
                : filteredRelatedAnime.map((list) => (
                      <div key={list.relation}>
                          <span className="info-label">{list.relation}</span>
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