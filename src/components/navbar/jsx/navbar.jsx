import logoDark from '../img/logo__dark.png'
import logoLight from '../img/logo__light.png'
import DarkTheme from '../img/dark.png'
import LightTheme from '../img/light.png'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useThemeContext } from '../../theme/theme';
import NavBarStyles from '../css/navbar.module.css'
import { navClass, navLogo, logoImage, navBurger, burgerLine, navMenu, menuList, menuItem, menuLink}  from '../css/classes.jsx'

export function NavBar() {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => setVisible(!visible);
    
    const {theme, toggleTheme} = useThemeContext();

    return (
        <nav className={navClass}>
                    <div className={navLogo}>
                        <img className={logoImage} src={theme.name === 'dark' ? logoDark : logoLight} alt="logo" />
                    </div>
                    <div className={navBurger} onClick={toggleVisibility}>
                        <span className={burgerLine}></span>
                        <span className={burgerLine}></span>
                        <span className={burgerLine}></span>
                    </div>
                    {visible && (
                    <div className={navMenu}>
                        <ul className={menuList}>
                            <li className={menuItem}><NavLink to={`/`} className={menuLink}>Главное</NavLink></li>
                            <li className={NavBarStyles.menu__item}><NavLink to={`/mycollection`} className={menuLink}>Мой плейлист</NavLink></li>
                            <li className={menuItem}><NavLink to={`/login`} className={menuLink}>Войти</NavLink></li>
                            <li className={menuItem} ><img src={theme.name === 'dark' ? DarkTheme : LightTheme} alt="theme" className={NavBarStyles.theme} onClick={toggleTheme}/></li>
                        </ul>
                    </div>
                    )}
                </nav>
                
    )
}