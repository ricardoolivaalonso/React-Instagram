import { useContext } from "react"
import { IGContext } from "../../context/store"
import { MediaElement } from "../04-elements/MediaElement"
import { ModalSettingsComponent } from "../03-components/ModalSettingsComponent"
import { ModalCommentsComponent } from "../03-components/ModalCommentsComponent"
import { ModalStatsComponent } from "../03-components/ModalStatsComponent"
import { ModalCloseElement } from "../04-elements/ModalCloseElement"
import { useState, useRef, useLayoutEffect } from "react"

const ModalSection = () => {
    const { modal, users, user } = useContext( IGContext )
    const { uid, username, media, description, views, time, comments } = modal
    const [getAvatar] = users.filter( user => user.username == username )
    const { avatar } = getAvatar
    
    const c = useRef(0)
    const [divHeight, setDivHeight] = useState(0)

    const getHeight = () => setDivHeight(c.current.offsetHeight - 263)

    useLayoutEffect(() => {
        getHeight()
        window.addEventListener('resize', getHeight)

        return () => window.removeEventListener('resize', getHeight)
    },[])
    
    return(
        <section className="modal">
            <ModalCloseElement />

            <div className="modal__wrapper" ref={c}>
                <div className="modal__media">
                    <MediaElement media={media}/>
                </div>
                <div className="modal__description">
                    <ModalSettingsComponent avatar={avatar} username={username}/>
                    <ModalCommentsComponent divHeight={divHeight} avatar={avatar} username={username} description={description} comments={comments} time={time}/> 
                    <ModalStatsComponent uid={uid} username={user.username} views={views} time={time}/>
                </div>
            </div>
        </section>
    )
}

export { ModalSection }