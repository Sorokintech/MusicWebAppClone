import { SideBarSkeleton } from '../jsx/sideBar-skeleton'
import SideBarStyles from '../css/sideBar.module.css'
import playlistOne from '../img/playlist01.png'
import playlistTwo from '../img/playlist02.png'
import playlistThree from '../img/playlist03.png'
import { useThemeContext } from '../../theme/theme';
// import {require} from 'react';

export function SideBar({skeleton}) {
    const {theme} = useThemeContext();
    
    if (skeleton) {return <SideBarSkeleton/>}
    return(
        <div className={`${SideBarStyles.main__sidebar} ${SideBarStyles.sidebar} ${SideBarStyles[theme.name]}`}>
        <div className={SideBarStyles.sidebar__personal}>
                        <p className={SideBarStyles.sidebar__personal_name}>Sergey.Ivanov</p>
                        <div className={SideBarStyles.sidebar__avatar}>
                            
                        </div>
                    </div>
                    <div className={SideBarStyles.sidebar__block}>
                        <div className={SideBarStyles.sidebar__list}>
                            <div className={SideBarStyles.sidebar__item}>
                                <a className={SideBarStyles.sidebar__link} href="#">
                                    <img className={SideBarStyles.sidebar__img} src={playlistOne}  alt="day's playlist" />
                                </a>
                            </div>
                            <div className={SideBarStyles.sidebar__item}>
                                <a className={SideBarStyles.sidebar__link} href="#">
                                    <img className={SideBarStyles.sidebar__img} src={playlistTwo} alt="day's playlist" />
                                </a>
                            </div>
                            <div className={SideBarStyles.sidebar__item}>
                                <a className={SideBarStyles.sidebar__link} href="#">
                                    <img className={SideBarStyles.sidebar__img} src={playlistThree} alt="day's playlist"/>
                                </a>
                            </div>
                        </div>
                        </div>
                        </div>
   )
}