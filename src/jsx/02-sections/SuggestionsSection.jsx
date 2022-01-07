import { useContext } from "react"
import { IGContext } from "../../context/store"
import { AvatarElement } from "../04-elements/AvatarElement"
import { UsernameElement } from "../04-elements/UsernameElement"
import { ActionElement } from "../04-elements/ActionElement"
import { SuggestionsCardComponent } from "../03-components/SuggestionsCardComponent"
import { FAQsSection } from "./FAQsSection"
import Avatar from '../../img/avatar.jpeg'


const SuggestionsSection = () => {
    const { user, users } = useContext( IGContext )
    /* https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array */
    let filteredusers = users.filter( user => user.username !== 'ana.sacareno')
    let randomUsers = filteredusers
        .map( value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
        .slice(0,5)

    return(
        <aside className="suggestions">
            <div className="suggestions__list">

                <article className="suggestions__item">
                    <AvatarElement avatar={Avatar}></AvatarElement>
                    <div className="suggestions__item-user">
                        <UsernameElement>ana.sacareno</UsernameElement>
                        <ActionElement>Traveler | Musician | Catlover</ActionElement>
                    </div>
                    <ActionElement mod='action-element--cta'>Switch</ActionElement>
                </article>

                <div className="suggestions__top"> 
                    <UsernameElement>Suggestions for you</UsernameElement>
                    <ActionElement>See All</ActionElement>
                </div>
                { randomUsers.map( user => <SuggestionsCardComponent key={user.username} avatar={user.avatar} username={user.username}/>)}
            </div>

            <FAQsSection />
        </aside>
    )
}
export { SuggestionsSection }