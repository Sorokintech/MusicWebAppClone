import logo from '../img/logo.png'
import NavBarCSS from '../css/navbar.module.css'
import { useState } from 'react';


export function NavBar() {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => setVisible(!visible);
    
    return (<nav className={`${NavBarCSS.main__nav} ${NavBarCSS.nav}`}>
                    <div className={`${NavBarCSS.nav__logo} ${NavBarCSS.logo}`}>
                        <img className={NavBarCSS.logo__image} src={logo} alt="logo" />
                    </div>
                    <div className={`${NavBarCSS.nav__burger} ${NavBarCSS.burger}`} onClick={toggleVisibility}>
                        <span className={NavBarCSS.burger__line}></span>
                        <span className={NavBarCSS.burger__line}></span>
                        <span className={NavBarCSS.burger__line}></span>
                    </div>
                    {visible && (
                    <div className={`${NavBarCSS.nav__menu} ${NavBarCSS.menu}`}>
                        <ul className={NavBarCSS.menu__list}>
                            <li className={NavBarCSS.menu__item}><a href="http://" className={NavBarCSS.menu__link}>Главное</a></li>
                            <li className={NavBarCSS.menu__item}><a href="http://" className={NavBarCSS.menu__link}>Мой плейлист</a></li>
                            <li className={NavBarCSS.menu__item}><a href="http://" className={NavBarCSS.menu__link}>Войти</a></li>
                        </ul>
                    </div>
                    )}
                </nav>
    )
}