import logoDark from '../img/logo__dark.png'
import logoLight from '../img/logo__light.png'
import NavBarStyles from '../css/navbar.module.css'
import DarkTheme from '../img/dark.png'
import LightTheme from '../img/light.png'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useThemeContext } from '../../theme/theme';
// import {require} from 'react';

export function NavBar() {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => setVisible(!visible);
    
    const {theme, toggleTheme} = useThemeContext();

    // let classNames = require('classnames/bind');
    // let styles = { main__nav: true, nav: true};
    // var cx = classNames.bind(styles);
    // let mainClass = cx({main__nav: true, nav: true});
    return (
            // <nav className={mainClass} > 
            <nav className={`${NavBarStyles.main__nav} ${NavBarStyles.nav} ${NavBarStyles[theme.name]}`}>
                    <div className={`${NavBarStyles.nav__logo} ${NavBarStyles.logo}`}>
                        <img className={NavBarStyles.logo__image} src={theme.name === 'dark' ? logoDark : logoLight} alt="logo" />
                    </div>
                    <div className={`${NavBarStyles.nav__burger} ${NavBarStyles.burger}`} onClick={toggleVisibility}>
                        <span className={NavBarStyles.burger__line}></span>
                        <span className={NavBarStyles.burger__line}></span>
                        <span className={NavBarStyles.burger__line}></span>
                    </div>
                    {visible && (
                    <div className={`${NavBarStyles.nav__menu} ${NavBarStyles.menu}`}>
                        <ul className={NavBarStyles.menu__list}>
                            <li className={NavBarStyles.menu__item}><NavLink to={`/`} className={NavBarStyles.menu__link}>Главное</NavLink></li>
                            <li className={NavBarStyles.menu__item}><NavLink to={`/mycollection`} className={NavBarStyles.menu__link}>Мой плейлист</NavLink></li>
                            <li className={NavBarStyles.menu__item}><NavLink to={`/login`} className={NavBarStyles.menu__link}>Войти</NavLink></li>
                            <li className={NavBarStyles.menu__item} ><img src={theme.name === 'dark' ? DarkTheme : LightTheme} alt="theme" className={NavBarStyles.theme} onClick={toggleTheme}/></li>
                        </ul>
                    </div>
                    )}
                </nav>
                
    )
}