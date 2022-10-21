import logoDark from './img/logo__dark.png';
import logoLight from './img/logo__light.png';
import DarkTheme from './img/dark.png';
import LightTheme from './img/light.png';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useThemeContext } from '../theme/theme';
import styles from './navbar.module.css';
import cn from 'classnames';

export function NavBar() {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => setVisible(!visible);
    
    const {theme, toggleTheme} = useThemeContext();
    
    const mainDiv = cn(
        styles.nav,
        styles[theme.name]
    );
    const mainLogo = cn(
        styles.logo,
        styles[theme.name]
    );
    const mainImage = cn(
        styles.image,
        styles[theme.name]
    );
    const mainBurger = cn(
        styles.burger,
        styles[theme.name]
    );
    const burgerLine = cn(
        styles.line,
        styles[theme.name]
    );
    const navMenu = cn(
        styles.menu,
        styles[theme.name]
    );
    const menuList = cn(
        styles.list,
        styles[theme.name]
    );
    const menuItem = cn(
        styles.item,
        styles[theme.name]
    );
    const menuLink = cn(
        styles.link,
        styles[theme.name]
    );
    const mainTheme = cn(
        styles.theme,
    );


    return (
        <nav className={mainDiv}>
                    <div className={mainLogo}>
                        <img className={mainImage} src={theme.name === 'dark' ? logoDark : logoLight} alt="logo" />
                    </div>
                    <div className={mainBurger} onClick={toggleVisibility}>
                        <span className={burgerLine}></span>
                        <span className={burgerLine}></span>
                        <span className={burgerLine}></span>
                    </div>
                    {visible && (
                    <div className={navMenu}>
                        <ul className={menuList}>
                            <li className={menuItem}><NavLink to={`/`} className={menuLink}>Главное</NavLink></li>
                            <li className={menuItem}><NavLink to={`/mycollection`} className={menuLink}>Мой плейлист</NavLink></li>
                            <li className={menuItem}><NavLink to={`/login`} className={menuLink}>Войти</NavLink></li>
                            <li className={menuItem} ><img src={theme.name === 'dark' ? DarkTheme : LightTheme} alt="theme" className={mainTheme} onClick={toggleTheme}/></li>
                        </ul>
                    </div>
                    )}
                </nav>
                
    )
}