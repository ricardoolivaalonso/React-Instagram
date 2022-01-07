import { useContext } from "react"
import { IGContext } from "../../context/store"
import { useNavigate } from 'react-router-dom'

const AvatarElement = ({username, avatar}) => {
    const { users, setUser, posts} = useContext( IGContext )
    const navigate = useNavigate()

    const getProfile = () => {
        const [currentProfile] = users.filter( user => user.username === username )
        const userPost = posts.filter( post => post.username === username)
        currentProfile.stats.posts = userPost
        setUser(currentProfile)

        navigate('/profile')
    }

    return(
        <div className="avatar-element">
            { <img className="avatar-element__image" src={avatar} alt="Avatar" onClick={(e)=>getProfile(e)}/> }
        </div>
    )
}

export { AvatarElement }