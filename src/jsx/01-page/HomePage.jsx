import { HomePostSection } from "../02-sections/HomePostsSection"
import { NavbarSection } from "../02-sections/NavbarSection"
import { SuggestionsSection } from "../02-sections/SuggestionsSection"
import MetaTags from 'react-meta-tags'

const HomePage = () => {
    return(
        <>
            <MetaTags><title>Instagram / Home</title></MetaTags>
            <NavbarSection />
            <main>
                <div className="home">
                    <HomePostSection />
                    <SuggestionsSection />
                </div>
            </main>
        </>
    )
}

export { HomePage }