import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AnimeCard from './AnimeCard'

const mockAnime = {
    mal_id: 19,
    url: 'https://myanimelist.net/anime/19/Monster',
    images: {
        jpg: {
            large_image_url:
                'https://cdn.myanimelist.net/images/anime/10/18793l.jpg?s=34a14f14f872f23b1650ad2464fcb047'
        }
    },
    title: 'Monster',
    type: 'TV',
    start_year: 2004
}

describe('AnimeCard', () => {
    it('should render a link', () => {
        render(<AnimeCard anime={mockAnime} />)

        const link = screen.getByRole('link')

        expect(link).toBeInTheDocument()
    })

    it('link href should match anime id', () => {
        render(<AnimeCard anime={mockAnime} />)

        const link = screen.getByRole('link')

        expect(link).toHaveAttribute('href', '/anime/19')
    })

    it('should render a heading', () => {
        render(<AnimeCard anime={mockAnime} />)

        const heading = screen.getByRole('heading', { level: 3 })

        expect(heading).toBeInTheDocument()
    })

    it('should not render score if the data does not have a score value', () => {
        render(<AnimeCard anime={mockAnime} />)

        const scoreSpan = screen.queryByTestId('score-span')

        expect(scoreSpan).toBeNull()
    })
})
