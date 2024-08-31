import HeaderStart from './components/HeaderStart'
import HeaderStartTest from './components/HeaderStartTest'
import RecommendedAnime from './components/RecommendedAnime'

export default function Home() {
    return (
        <>
            <HeaderStartTest />
            {/* <HeaderStart /> */}
            <div className="main-content-wrapper start">
                <RecommendedAnime />
            </div>
        </>
    )
}
