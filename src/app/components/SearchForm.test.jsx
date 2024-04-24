import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchForm from './SearchForm'

describe('Searchform', () => {
    it('should render a search input', () => {
        render(<SearchForm />)

        const inputField = screen.getByPlaceholderText(/Search anime/i)

        expect(inputField).toBeInTheDocument()
    })

    it('should call the onSearch function with the expected value upon form submission', async () => {
        const user = userEvent.setup()
        const mockSubmit = jest.fn()

        render(<SearchForm onSearch={mockSubmit} />)

        const inputField = screen.getByPlaceholderText(/Search anime/i)

        await user.click(inputField)
        await user.keyboard('Attack on titan')

        const button = screen.getByRole('button')
        await user.click(button)

        expect(mockSubmit).toHaveBeenCalledWith('Attack on titan')
    })
})
