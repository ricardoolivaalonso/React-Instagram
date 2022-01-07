import { PostCardComponent } from '../03-components/PostCardComponent'
import MetaTags from 'react-meta-tags'

const ExplorePage = () => {
    return(
        <>
            <MetaTags><title>Instagram / Explore</title></MetaTags>
            <section className='explore-posts'>
                <div className='explore-posts__list'>
                    <PostCardComponent />
                </div>
            </section>
        </>
    )
}

export { ExplorePage }