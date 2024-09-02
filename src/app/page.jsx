import HeaderStart from './components/HeaderStart'
import RecommendedAnime from './components/RecommendedAnime'

export default function Home() {
    return (
        <>
            <HeaderStart />
            <div className="main-content-wrapper start">
                <RecommendedAnime />
            </div>
        </>
    )
}
