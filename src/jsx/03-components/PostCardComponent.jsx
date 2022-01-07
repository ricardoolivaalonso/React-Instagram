
import { IGContext } from '../../context/store'
import { useContext } from 'react'

const PostCardComponent = ({type}) => {
    const { posts, user, setModal } = useContext( IGContext )
    
    const openModal = (e, id) => {
        const [getPost] = posts.filter( post => post.uid === id)
        const newModal = {...getPost, open: true}
        
        setModal(newModal)
    }

    return(
        <>
            {
                type === 'profile' ?
                    posts.map( post => 
                        post.username === user.username && (
                            <article className='profile-posts__item' key={post.uid} onClick={(e)=>openModal(e, post.uid)}>
                                <img className='profile-posts__image' src={post.media} alt="assa" />
                                <a className='profile-posts__stats' >
                                    <span className='profile-posts__views'>
                                        <svg color="#ffffff" fill="#ffffff" height="18" viewBox="0 0 24 24" width="18"><path d="M5.888 22.5a3.46 3.46 0 01-1.721-.46l-.003-.002a3.451 3.451 0 01-1.72-2.982V4.943a3.445 3.445 0 015.163-2.987l12.226 7.059a3.444 3.444 0 01-.001 5.967l-12.22 7.056a3.462 3.462 0 01-1.724.462z"></path></svg>
                                        {post.views}
                                    </span>
                                </a>
                            </article > 
                        )
                    )
                    : 
                    posts.map( post => 
                        post.username !== user.username && (
                            <article className='profile-posts__item' key={post.uid} onClick={(e)=>openModal(e, post.uid)}>
                                <img className='profile-posts__image' src={post.media} alt="assa" />
                                <a className='profile-posts__stats' >
                                    <span className='profile-posts__views'>
                                        <svg color="#ffffff" fill="#ffffff" height="18" viewBox="0 0 24 24" width="18"><path d="M5.888 22.5a3.46 3.46 0 01-1.721-.46l-.003-.002a3.451 3.451 0 01-1.72-2.982V4.943a3.445 3.445 0 015.163-2.987l12.226 7.059a3.444 3.444 0 01-.001 5.967l-12.22 7.056a3.462 3.462 0 01-1.724.462z"></path></svg>
                                        {post.views}
                                    </span>
                                </a>
                            </article > 
                        )
                    )
            }

        </>
    )
}

export { PostCardComponent }