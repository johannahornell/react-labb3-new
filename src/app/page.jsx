import HeaderStart from './components/HeaderStart'
import RecommendedAnime from './components/RecommendedAnime'

export default function Home() {
    return (
        <>
            <HeaderStart />
            <div className="main-content-wrapper">
                <RecommendedAnime />
                <h1>Cant decided what to watch?</h1>
                <button>Randomize</button>
            </div>
        </>
    )
}
