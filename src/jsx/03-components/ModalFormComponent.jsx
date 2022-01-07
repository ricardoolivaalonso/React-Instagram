import { v4 as uuidv4 } from 'uuid'
import { IGContext } from "../../context/store"
import { useContext, useState } from "react"

const ModalFormComponent = ({uid, username}) => {
    const { modal, setModal,  posts, setPosts } = useContext( IGContext )
    const [input, setInput] = useState('')

    const sendForm = (e, id, username) => {
        e.preventDefault()
        
        const newComment = {
            uid: uuidv4(),
            username: username,
            content: input,
            time: 'now'   
        }

        if(input.length > 1){
            setPosts(
                posts.map( post => {
                    if(post.uid == id){
                        return {
                            ...post,
                            comments: [
                                ...post.comments,
                                newComment
                            ]
                        }
                    }
                    return post
                })
            )
            setModal({
                ...modal,
                comments: [
                    ...modal.comments,
                    newComment
                ]
            })
            setInput('')
        }
    }

    return(
        <form className="modal__form" onSubmit={(e)=>sendForm(e, uid, username)}>
            <svg color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path></svg>
            <input className="modal__form-input" type="text" placeholder="Añade un comentario" value={input} onChange={(e)=>setInput(e.target.value)}/>
            <button className="modal__form-submit" type="submit">publicar</button>
        </form>
    )
}

export { ModalFormComponent }