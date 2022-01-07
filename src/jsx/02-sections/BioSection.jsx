import { useContext } from "react"
import { IGContext } from '../../context/store'
import { BioHeaderComponent } from "../03-components/BioHeaderComponent"
import { BioMainComponent } from "../03-components/BioMainComponent"
import { BioStatsComponent } from "../03-components/BioStatsComponent"
import { BioAvatarElement } from "../04-elements/BioAvatarElement"

const BioSection = () => {
    const { user }  = useContext( IGContext )
    const { username, avatar, name, bio, description, portfolio, stats } = user

    return(
        <section className='bio'>
            <BioAvatarElement avatar={avatar}/>
            <BioHeaderComponent username={username} />

            <div className='bio__stats'>
                <ul className='bio__list'>
                    { Object.entries(stats).map( s => <BioStatsComponent key={s[0]} type={s[0]} stats={s[1].length} />).reverse() }
                </ul>
            </div>

            <BioMainComponent name={name} bio={bio} description={description} portfolio={portfolio} />
        </section>
    )
}

export { BioSection }