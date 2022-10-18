import logoDark from '../img/logo__dark.png';
import logoLight from '../img/logo__light.png';
import DarkTheme from '../img/dark.png';
import LightTheme from '../img/light.png';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useThemeContext } from '../../theme/theme';
import styles from '../css/navbar.module.css';
import classNames from 'classnames';

export function NavBar() {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => setVisible(!visible);
    
    const {theme, toggleTheme} = useThemeContext();
    
    const mainDiv = classNames(
        styles.main__nav,
        styles[theme.name]
    );
    const mainLogo = classNames(
        styles.nav__logo,
        styles[theme.name]
    );
    const mainImage = classNames(
        styles.logo__image,
        styles[theme.name]
    );
    const mainBurger = classNames(
        styles.nav__burger,
        styles[theme.name]
    );
    const burgerLine = classNames(
        styles.burger__line,
        styles[theme.name]
    );
    const navMenu = classNames(
        styles.nav__menu,
        styles[theme.name]
    );
    const menuList = classNames(
        styles.menu__list,
        styles[theme.name]
    );
    const menuItem = classNames(
        styles.menu__item,
        styles[theme.name]
    );
    const menuLink = classNames(
        styles.menu__link,
        styles[theme.name]
    );
    const mainTheme = classNames(
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
                            <li className={styles.menu__item}><NavLink to={`/mycollection`} className={menuLink}>Мой плейлист</NavLink></li>
                            <li className={menuItem}><NavLink to={`/login`} className={menuLink}>Войти</NavLink></li>
                            <li className={menuItem} ><img src={theme.name === 'dark' ? DarkTheme : LightTheme} alt="theme" className={mainTheme} onClick={toggleTheme}/></li>
                        </ul>
                    </div>
                    )}
                </nav>
                
    )
}