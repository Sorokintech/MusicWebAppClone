import logoDark from '../img/logo__dark.png'
import logoLight from '../img/logo__light.png'
import NavBarCSS from '../css/navbar.module.css'
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

    // let classNames = require('classnames');
    // let mainClass = classNames({
    //     main__nav: true,
    //     nav: true,
    //     [theme.name]: true
    // });
    return (
            <nav className={`${NavBarCSS.main__nav} ${NavBarCSS.nav} ${NavBarCSS[theme.name]}`}> 
                    <div className={`${NavBarCSS.nav__logo} ${NavBarCSS.logo}`}>
                        <img className={NavBarCSS.logo__image} src={theme.name === 'dark' ? logoDark : logoLight} alt="logo" />
                    </div>
                    <div className={`${NavBarCSS.nav__burger} ${NavBarCSS.burger}`} onClick={toggleVisibility}>
                        <span className={NavBarCSS.burger__line}></span>
                        <span className={NavBarCSS.burger__line}></span>
                        <span className={NavBarCSS.burger__line}></span>
                    </div>
                    {visible && (
                    <div className={`${NavBarCSS.nav__menu} ${NavBarCSS.menu}`}>
                        <ul className={NavBarCSS.menu__list}>
                            <li className={NavBarCSS.menu__item}><NavLink to={`/`} className={NavBarCSS.menu__link}>Главное</NavLink></li>
                            <li className={NavBarCSS.menu__item}><NavLink to={`/mycollection`} className={NavBarCSS.menu__link}>Мой плейлист</NavLink></li>
                            <li className={NavBarCSS.menu__item}><NavLink to={`/login`} className={NavBarCSS.menu__link}>Войти</NavLink></li>
                            <li className={NavBarCSS.menu__item} ><img src={theme.name === 'dark' ? DarkTheme : LightTheme} alt="theme" className={NavBarCSS.theme} onClick={toggleTheme}/></li>
                        </ul>
                    </div>
                    )}
                </nav>
                
    )
}