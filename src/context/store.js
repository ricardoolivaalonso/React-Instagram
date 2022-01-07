import { initialUser, initialUsers, initialPosts, initialModal, initialPostsSearched } from "./initialState"
import { useState, createContext } from "react"

const IGContext = createContext()

const IGProvider = ({children}) => {
    const [user, setUser] = useState(initialUser)
    const [users, setUsers] = useState(initialUsers)
    const [posts, setPosts] = useState(initialPosts)
    const [modal, setModal] = useState(initialModal)
    const [searched, setSearched] = useState(initialPostsSearched)

    return(
        <IGContext.Provider value={{
            user,
            setUser,
            users, 
            posts, 
            modal,
            setModal,
            setPosts,
            searched,
            setSearched
        }}>
            {children}
        </IGContext.Provider>
    )
}

export { IGContext, IGProvider }




