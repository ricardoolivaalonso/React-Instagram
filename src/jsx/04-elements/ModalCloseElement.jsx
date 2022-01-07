import { useContext } from "react"
import { IGContext } from "../../context/store"

const ModalCloseElement = () => {
    const { modal, setModal} = useContext( IGContext )

    return( 
        <button className='modal__close' onClick={(e)=> setModal({...modal, open: false})}>
            <svg color="#ffffff" fill="#ffffff" height="24" role="img" viewBox="0 0 24 24" width="24"><polyline fill="none" points="20.643 3.357 12 12 3.353 20.647" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></polyline><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" x1="20.649" x2="3.354" y1="20.649" y2="3.354"></line></svg>
        </button>
    )
}

export { ModalCloseElement }