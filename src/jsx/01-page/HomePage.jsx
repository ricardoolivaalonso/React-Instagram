import { HomePostSection } from "../02-sections/HomePostsSection"
import { SuggestionsSection } from "../02-sections/SuggestionsSection"
import MetaTags from 'react-meta-tags'

const HomePage = () => {
    return(
        <>
            <MetaTags><title>Instagram / Home</title></MetaTags>
            <div className="home">
                <HomePostSection />
                <SuggestionsSection />
            </div>
        </>
    )
}

export { HomePage }