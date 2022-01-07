import { Link } from "react-router-dom"
import { initialNavbar } from '../../context/initialState'

const NavbarLogoElement = () => {
    const { mobile, desktop  } = initialNavbar.logo

    return(
        <Link className='navbar__logo' to='/'>
            <picture className='navbar__picture' >
                <source media="(max-width: 600px)" srcSet={mobile}/>
                <img className='navbar__image' src={desktop} alt="Logo" />
            </picture>
        </Link>
    )
}

export { NavbarLogoElement }