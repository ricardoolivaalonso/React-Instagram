import { BioSection } from "../02-sections/BioSection"
import { FooterSection } from "../02-sections/FooterSection"
import { NavbarSection } from "../02-sections/NavbarSection"
import { ProfilePostSection } from "../02-sections/ProfilePostsSection"
import MetaTags from 'react-meta-tags'

const ProfilePage = () => {
    return(
        <>
            <MetaTags><title>Instagram / Profile</title></MetaTags>
            <NavbarSection />
            <main>
                <BioSection />
                <ProfilePostSection type='profile'/>
                <FooterSection />
            </main>
        </>
    )
}

export { ProfilePage }