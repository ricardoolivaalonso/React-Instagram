import { NavbarLogoElement } from '../04-elements/NavbarLogoElement'
import { NavbarFormComponent } from '../03-components/NavbarFormComponent'
import { NavbarIconsComponent } from '../03-components/NavbarIconsComponent'

const NavbarSection = () => {
    return(
        <nav className='navbar'>
            <div className='navbar__wrapper'>
                <NavbarLogoElement />
                <NavbarFormComponent />
                <NavbarIconsComponent />
            </div>
        </nav>
    )
}

export { NavbarSection }