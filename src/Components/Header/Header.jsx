import { NavLink } from 'react-router-dom'
import k from '../../assets/k.png'
import group from '../../assets/group.png'
import s from '../../assets/s.png'
import a from '../../assets/a.png'
import './header.css'

export default function Header() {
    return (
        <div className="header">
            <div className="logo">
                <img src={k} alt="" />
                <img src={group} alt="" />
                <img src={s} alt="" />
                <img src={a} alt="" />
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
