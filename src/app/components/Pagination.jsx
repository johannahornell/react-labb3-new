'use client'

const Pagination = ({ onNext, onPrevious, currentPage }) => {
    return (
        <div>
            {currentPage > 1 ? (
                <button onClick={onPrevious}>Previous page</button>
            ) : (
                ''
            )}
            <button onClick={onNext}>Next page</button>
        </div>
    )
}

export default Pagination
