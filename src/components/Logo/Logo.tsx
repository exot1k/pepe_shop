import { NavLink } from 'react-router-dom'
import './Logo.css'
import logo from
    '../../media/logo.svg'

interface ILogoProps {

}

export function Logo(props: ILogoProps) {
    return (
        <>
            <NavLink to="/all" className='logo logo-nav'>
                <img className='logo-img' src={logo} alt="Pepshop"/>
                <p className='logo-text'>Pepshop</p>
            </NavLink>
        </>)
}