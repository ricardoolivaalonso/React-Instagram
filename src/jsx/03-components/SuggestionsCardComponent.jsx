import { ActionElement } from "../04-elements/ActionElement"
import { AvatarElement } from "../04-elements/AvatarElement"
import { UsernameElement } from "../04-elements/UsernameElement"

const SuggestionsCardComponent = ({avatar, username}) => {
    return(
        <article className="suggestions__item">
            <AvatarElement avatar={avatar} username={username}></AvatarElement>
            <div className="suggestions__item-user">
                <UsernameElement>{username}</UsernameElement>
                <ActionElement >Follows you</ActionElement>
            </div>
            <ActionElement mod='action-element--cta'>Follow</ActionElement>
        </article>
    )
}

export { SuggestionsCardComponent }