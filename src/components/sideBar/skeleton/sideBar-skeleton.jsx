import styles from '../sideBar.module.css'
import stylesSkeleton from './sideBar-skeleton.module.css'
import cn from 'classnames'

export function SideBarSkeleton() {

    return(
        <div className={cn(styles.main)}>
        <div className={cn(styles.personal)}>
                        <p className={cn(styles.personalName)}></p>
                        <div className={cn(stylesSkeleton.avatarSkeleton)}>
                            
                        </div>
                    </div>
                    <div className={cn(styles.block)}>
                        <div className={cn(styles.list)}>
                            <div className={cn(styles.item)}>
                                <a className={cn(styles.link)} href="#">
                                    <div className={cn(stylesSkeleton.imgSkeleton)} src='' alt="day's playlist" />
                                </a>
                            </div>
                            <div className={cn(styles.item)}>
                                <a className={cn(styles.link)} href="#">
                                <div className={cn(stylesSkeleton.imgSkeleton)}  alt="day's playlist" />
                                </a>
                            </div>
                            <div className={cn(styles.item)}>
                                <a className={cn(styles.link)} href="#">
                                <div className={cn(stylesSkeleton.imgSkeleton)} alt="day's playlist"/>
                                </a>
                            </div>
                        </div>
                        </div>
                        </div>
   )
}