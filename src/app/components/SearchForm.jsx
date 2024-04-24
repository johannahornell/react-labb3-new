import { useState, useEffect, useRef } from 'react'

const SearchForm = ({ onSearch }) => {
    const [text, setText] = useState('')
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Write the anime your searching for first')
            return
        }

        onSearch(text)
        setText('')
    }

    return (
        <div className="search-wrapper">
            <form onSubmit={onSubmit} className="search-form">
                <input
                    type="text"
                    placeholder="Search anime"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    ref={inputRef}
                ></input>
                <input type="submit" value="Search" className="btn" />
            </form>
        </div>
    )
}

export default SearchForm
