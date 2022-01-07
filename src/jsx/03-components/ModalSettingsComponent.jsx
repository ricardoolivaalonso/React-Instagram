
import { AvatarElement } from "../04-elements/AvatarElement"
import { SettingsIconElement } from "../04-elements/SettingsIconElement"
import { UsernameElement } from "../04-elements/UsernameElement"

const ModalSettingsComponent = ({avatar, username,}) => {
    return(
        <div className="modal__settings">
            <AvatarElement avatar={avatar} username={username}/>
            <UsernameElement>{username}</UsernameElement>
            <SettingsIconElement />
        </div>
    )
}

export { ModalSettingsComponent }