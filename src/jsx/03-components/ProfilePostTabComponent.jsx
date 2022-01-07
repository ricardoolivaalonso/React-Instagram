import { initialProfilePosts } from '../../context/initialState'
import parse from 'html-react-parser'

const ProfilePostTabComponent = () => {
    const { icons } = initialProfilePosts

    return(
        <>
            {
                icons.map( icon => 
                    <a className='profile-posts__tab' key={icon.uid}>
                        {parse(`${icon.svg}`)}
                        <span className='profile-posts__tab-title'>{icon.title}</span>
                    </a>     
                )
            }      
        </>
    )
}

export { ProfilePostTabComponent }