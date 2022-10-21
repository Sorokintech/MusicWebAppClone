import { SideBarSkeleton } from './skeleton/sideBar-skeleton'
import styles from './sideBar.module.css'
import playlistOne from './img/playlist01.png'
import playlistTwo from './img/playlist02.png'
import playlistThree from './img/playlist03.png'
import { useThemeContext } from '../theme/theme';
import cn from 'classnames'

export function SideBar({skeleton}) {
    const {theme} = useThemeContext();

    const main = cn(
        styles.main,
        styles[theme.name]
    );
    const personal = cn(
        styles.personal
    );
    const personalName = cn(
        styles.personalName
    );
    const avatar = cn(
        styles.avatar
    );
    const block = cn(
        styles.block
    );
    const list = cn(
        styles.list
    );
    const item = cn(
        styles.item
    );
    const link = cn(
        styles.link
    );
    const img = cn(
        styles.img
    );

    
    if (skeleton) {return <SideBarSkeleton/>}
    return(
        <div className={main}>
        <div className={personal}>
                        <p className={personalName}>Sergey.Ivanov</p>
                        <div className={avatar}>
                            
                        </div>
                    </div>
                    <div className={block}>
                        <div className={list}>
                            <div className={item}>
                                <a className={link} href="#">
                                    <img className={img} src={playlistOne}  alt="day's playlist" />
                                </a>
                            </div>
                            <div className={item}>
                                <a className={link} href="#">
                                    <img className={img} src={playlistTwo} alt="day's playlist" />
                                </a>
                            </div>
                            <div className={item}>
                                <a className={link} href="#">
                                    <img className={img} src={playlistThree} alt="day's playlist"/>
                                </a>
                            </div>
                        </div>
                        </div>
                        </div>
   )
}