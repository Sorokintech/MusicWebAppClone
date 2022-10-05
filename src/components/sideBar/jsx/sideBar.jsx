import { SideBarSkeleton } from '../jsx/sideBar-skeleton'
import SideBarCSS from '../css/sideBar.module.css'
import playlistOne from '../img/playlist01.png'
import playlistTwo from '../img/playlist02.png'
import playlistThree from '../img/playlist03.png'
import { useThemeContext } from '../../theme/theme';
// import {require} from 'react';

export function SideBar({skeleton}) {
    const {theme} = useThemeContext();
    // let classNames = require('classnames');
    // let mainSidebar = classNames({
    //     main__sidebar: true,
    //     sidebar: true,
    //     [theme.name]: true
    // });
    if (skeleton) {return <SideBarSkeleton/>}
    return(
        <div className={`${SideBarCSS.main__sidebar} ${SideBarCSS.sidebar} ${SideBarCSS[theme.name]}`}>
        <div className={SideBarCSS.sidebar__personal}>
                        <p className={SideBarCSS.sidebar__personal_name}>Sergey.Ivanov</p>
                        <div className={SideBarCSS.sidebar__avatar}>
                            
                        </div>
                    </div>
                    <div className={SideBarCSS.sidebar__block}>
                        <div className={SideBarCSS.sidebar__list}>
                            <div className={SideBarCSS.sidebar__item}>
                                <a className={SideBarCSS.sidebar__link} href="#">
                                    <img className={SideBarCSS.sidebar__img} src={playlistOne}  alt="day's playlist" />
                                </a>
                            </div>
                            <div className={SideBarCSS.sidebar__item}>
                                <a className={SideBarCSS.sidebar__link} href="#">
                                    <img className={SideBarCSS.sidebar__img} src={playlistTwo} alt="day's playlist" />
                                </a>
                            </div>
                            <div className={SideBarCSS.sidebar__item}>
                                <a className={SideBarCSS.sidebar__link} href="#">
                                    <img className={SideBarCSS.sidebar__img} src={playlistThree} alt="day's playlist"/>
                                </a>
                            </div>
                        </div>
                        </div>
                        </div>
   )
}