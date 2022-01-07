import { PostCardComponent } from '../03-components/PostCardComponent'
import { ProfilePostTabComponent } from '../03-components/ProfilePostTabComponent'

const ProfilePostSection = ({type}) => {
    return(
        <section className='profile-posts'>
            <div className='profile-posts__tabs'>
                <ProfilePostTabComponent />
            </div>
            <div className='profile-posts__list'>
                <PostCardComponent type={type}/>
            </div>
        </section>
    )
}

export { ProfilePostSection }