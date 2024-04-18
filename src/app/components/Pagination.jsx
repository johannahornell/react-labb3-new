import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi'

const Pagination = ({ onNext, onPrevious, currentPage, hasNextPage }) => {
    return (
        <div className="pagination-wrapper">
            {currentPage > 1 ? (
                <button className="btn btn-border" onClick={onPrevious}>
                    <FiChevronsLeft className="icon" size={'1.2rem'} />{' '}
                    <span>Previous page</span>
                </button>
            ) : (
                ''
            )}
            <p>{currentPage}</p>
            {hasNextPage ? (
                <button className="btn" onClick={onNext}>
                    <span>Next page</span>{' '}
                    <FiChevronsRight className="icon" size={'1.2rem'} />
                </button>
            ) : (
                ''
            )}
        </div>
    )
}

export default Pagination
