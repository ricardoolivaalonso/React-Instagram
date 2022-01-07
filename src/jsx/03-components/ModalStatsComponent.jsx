import { ModalFormComponent } from "../03-components/ModalFormComponent"
import { ModalIconElement } from "../04-elements/ModalIconElement"
import { initialModalIcons } from '../../context/initialState'
import { UsernameElement } from "../04-elements/UsernameElement"
import { TimeElement } from "../04-elements/TimeElement"

const ModalStatsComponent = ({uid, username, views, time}) => {
    return(
        <div className="modal__stats">
            <div className="modal__actions">
                <div className="modal__actions-top">
                    { initialModalIcons.map( icon => <ModalIconElement key={icon.uid} svg={icon.svg} />) }
                </div>
                <div className="modal__actions-bottom">
                    <UsernameElement>{views} repoducciones</UsernameElement>
                    <TimeElement>{time}</TimeElement>
                </div>
            </div>
            <ModalFormComponent uid={uid} username={username}/>
        </div>
    )
}

export { ModalStatsComponent }