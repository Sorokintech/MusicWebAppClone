import NavBarStyles from '../css/navbar.module.css'

let navClass = (
    `${NavBarStyles.main__nav} ${NavBarStyles.nav}`
);
let navLogo = (
    `${NavBarStyles.nav__logo} ${NavBarStyles.logo}`
)
let logoImage = (
   `${NavBarStyles.logo__image}`
)
let navBurger = (
    `${NavBarStyles.nav__burger} ${NavBarStyles.burger}`
)
let burgerLine = (
    `${NavBarStyles.burger__line}`
)
let navMenu = (
    `${NavBarStyles.nav__menu} ${NavBarStyles.menu}`
)
let menuList = (
    `${NavBarStyles.menu__list}`
)
let menuItem = (
    `${NavBarStyles.menu__item}`
)
let menuLink = (
    `${NavBarStyles.menu__link}`
)

export { navClass, navLogo, logoImage, navBurger, burgerLine, navMenu, menuList, menuItem, menuLink} 