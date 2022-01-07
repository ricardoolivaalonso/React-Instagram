
import { AvatarElement } from "../04-elements/AvatarElement"
import { UsernameElement } from "../04-elements/UsernameElement"
import { TimeElement } from "../04-elements/TimeElement"
import { ModalCommentComponent } from "../03-components/ModalCommentComponent"
import { CommentElement } from "../04-elements/CommentElement"

const ModalCommentsComponent = ({avatar, username, description, comments, time, divHeight}) => {
    return(
        <div className="modal__comments" style={{height: divHeight}}> 
            <div className="modal__scroll">
                <div className="modal__info">
                    <AvatarElement avatar={avatar}/>
                    <div className="modal__info-wrapper">
                        <CommentElement><UsernameElement>{username} </UsernameElement>{description}</CommentElement>
                        <TimeElement>{time}</TimeElement>
                    </div>
                </div>
                {
                    comments?.map( comment => 
                        <ModalCommentComponent 
                            key={comment.uid} 
                            username={comment.username}
                            content={comment.content}
                            time={comment.time}
                        />)
                }

            </div>
        </div>
    )
}

export { ModalCommentsComponent }