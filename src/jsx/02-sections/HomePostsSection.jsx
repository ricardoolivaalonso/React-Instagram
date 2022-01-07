import { useContext } from "react"
import { IGContext } from "../../context/store"
import { HomePostsCardComponent } from '../03-components/HomePostsCardComponent'

const HomePostSection = () => {
    const { posts, searched } = useContext( IGContext )
    let cards 
    searched.length > 0 ? cards = searched : cards = posts 

    return(
        <section className='home-posts'>
            <div className='home-posts__list'>
                { cards.map( post =>  <HomePostsCardComponent key={post.uid} post={post}/> ).reverse() }
            </div>    
        </section>
    )
}

export { HomePostSection }