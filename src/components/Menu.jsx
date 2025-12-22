import './Menu.scss'
import { NavLink, useLocation } from 'react-router-dom'
import pluma from '../assets/pluma.png'
import { useTranslation } from 'react-i18next';

export const Menu = () => {
    const location = useLocation();
    const { t } = useTranslation()

    const menuItems = [
        { path: '/', label: t('home') },
        { path: '/projects', label: t('projects') },
        { path: '/about', label: t('about') },
      ];

    return (
        <>
        <div className="Menu">
            {menuItems.map((item) => (
                <NavLink
                key={item.path}
                to={item.path}
                className= {`Menu__a ${location.pathname === item.path ? 'active' : ''}`}
                >
                {item.label}
                {location.pathname === item.path && <img src={pluma}/>}
                </NavLink>
            ))}
        </div>
        </>
    )
}
