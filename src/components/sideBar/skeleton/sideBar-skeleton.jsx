import styles from '../sideBar.module.css'
import stylesSkeleton from './sideBar-skeleton.module.css'
import cn from 'classnames'

export function SideBarSkeleton() {
    const main = cn(
        styles.main,
    );
    const personal = cn(
        styles.personal
    );
    const personalName = cn(
        styles.personalName
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
    const avatarSkeleton = cn(
        stylesSkeleton.avatarSkeleton
    );
    const imgSkeleton = cn(
        stylesSkeleton.imgSkeleton
    );

    return(
        <div className={main}>
        <div className={personal}>
                        <p className={personalName}></p>
                        <div className={avatarSkeleton}>
                            
                        </div>
                    </div>
                    <div className={block}>
                        <div className={list}>
                            <div className={item}>
                                <a className={link} href="#">
                                    <div className={imgSkeleton} src='' alt="day's playlist" />
                                </a>
                            </div>
                            <div className={item}>
                                <a className={link} href="#">
                                <div className={imgSkeleton}  alt="day's playlist" />
                                </a>
                            </div>
                            <div className={item}>
                                <a className={link} href="#">
                                <div className={imgSkeleton} alt="day's playlist"/>
                                </a>
                            </div>
                        </div>
                        </div>
                        </div>
   )
}