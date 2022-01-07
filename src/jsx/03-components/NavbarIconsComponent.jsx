import { useContext } from "react"
import { IGContext } from "../../context/store"
import { useNavigate } from "react-router-dom"
import { initialNavbar, initialUser } from '../../context/initialState'
import { Link } from "react-router-dom"
import { NavbarIconElement } from '../04-elements/NavbarIconElement'


const NavbarIconsComponent = () => {
    const username = 'ana.sacareno'
    const { icons } = initialNavbar
    const navigate = useNavigate()
    const { users, setUser, posts} = useContext( IGContext )


    const getProfile = () => {
        const [currentProfile] = users.filter( user => user.username === username )
        const userPost = posts.filter( post => post.username === username)
        currentProfile.stats.posts = userPost
        setUser(currentProfile)

        navigate('/profile')
    }

    return(
        <div className='navbar__icons'>
            { icons.map( icon => <NavbarIconElement key={icon.uid} svg={icon.svg} url={icon.url}/> ) }
            <Link className='navbar__item' to="/profile" onClick={(e)=>getProfile(e)} >
                <img className='navbar__avatar' src={initialUser.avatar} alt="Avatar" />
            </Link>
        </div>
    )
}

export { NavbarIconsComponent }