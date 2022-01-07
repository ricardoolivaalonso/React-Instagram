import { AvatarElement } from "../04-elements/AvatarElement"
import { CommentElement } from "../04-elements/CommentElement"
import { LikeElement } from "../04-elements/LikeElement"
import { TimeElement } from "../04-elements/TimeElement"
import { UsernameElement } from "../04-elements/UsernameElement"
import { ActionElement } from "../04-elements/ActionElement"
import { IGContext } from "../../context/store"
import { useContext} from "react"

const ModalCommentComponent = ({username,content,time}) => {
    const { users } = useContext( IGContext )
    
    const getAvatarComment = (id) => {
        const getAvatarC = users.find( user => user.username == id )
        return getAvatarC.avatar
    }

    return(
           
        <div className="modal__comment" >
            <AvatarElement avatar={getAvatarComment(username)}/>
            <div className="modal__comment-wrapper">
                <div className="modal__comment-top">
                    <CommentElement><UsernameElement>{username}</UsernameElement> {content}</CommentElement>
                    <LikeElement />
                </div>
                <div className="modal__comment-bottom">
                    <TimeElement>{time}</TimeElement>
                    <ActionElement>responder</ActionElement>
                </div>
            </div>
        </div>       
        
    )
}

export { ModalCommentComponent }