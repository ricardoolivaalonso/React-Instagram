
import { Link } from "react-router-dom";
import parse from 'html-react-parser'

export const NavbarIconElement = ({url, svg}) => <Link className='navbar__item' to={url}>{parse(`${svg}`)}</Link>
    
    

