import { NavLink } from 'react-router-dom'
import logo from '../../assets/LOGO1.png'
import './header.css'

export default function Header() {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <ul>
                <NavLink
                    to={'/'}
                    className={(nav) => (nav.isActive ? 'navActive' : '')}
                >
                    <li>Accueil</li>
                </NavLink>

                <NavLink
                    to={'/about'}
                    className={(nav) => (nav.isActive ? 'navActive' : '')}
                >
                    <li>A Propos</li>
                </NavLink>
            </ul>
        </div>
    )
}
