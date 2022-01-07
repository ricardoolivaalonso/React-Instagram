import { useContext } from "react"
import { IGContext } from "../../context/store"
import { CommentElement } from "../04-elements/CommentElement"
import { MediaCleanElement } from "../04-elements/MediaCleanElement"
import { TimeElement } from "../04-elements/TimeElement"
import { UsernameElement } from "../04-elements/UsernameElement"
import { ModalSettingsComponent } from "./ModalSettingsComponent"
import { ModalStatsComponent } from "./ModalStatsComponent"

const HomePostsCardComponent = ({post}) => {
    const { users } = useContext( IGContext )
    const { username, media, description, time, uid, views } = post

    const getAvatarComment = (id) => {
        const getAvatarC = users.find( user => user.username == id )
        return getAvatarC.avatar
    }

    return(

        <article className='home-posts__item' >
            <ModalSettingsComponent avatar={getAvatarComment(username)} username={username}/>
            <MediaCleanElement media={media} />
            <div className="modal__info">
                <div className="modal__info-wrapper">
                    <CommentElement><UsernameElement>{username} </UsernameElement>{description}</CommentElement>
                    <TimeElement>{time}</TimeElement>
                </div>
            </div>
            <ModalStatsComponent uid={uid} username={username} views={views} time={time}/>
        </article>
    )
}

export { HomePostsCardComponent }