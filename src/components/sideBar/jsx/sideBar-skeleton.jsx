import SideBarCSS from '../css/sideBar.module.css'
import SideBarSkeletonCSS from '../css/sideBar-skeleton.module.css'
export function SideBarSkeleton() {
    return(
        <div className={`${SideBarCSS.main__sidebar} ${SideBarCSS.sidebar}`}>
        <div className={SideBarCSS.sidebar__personal}>
                        <p className={SideBarCSS.sidebar__personal_name}></p>
                        <div className={SideBarSkeletonCSS.sidebar__avatar_skeleton}>
                            
                        </div>
                    </div>
                    <div className={SideBarCSS.sidebar__block}>
                        <div className={SideBarCSS.sidebar__list}>
                            <div className={SideBarCSS.sidebar__item}>
                                <a className={SideBarCSS.sidebar__link} href="#">
                                    <div className={SideBarSkeletonCSS.sidebar__img_skeleton} src='' alt="day's playlist" />
                                </a>
                            </div>
                            <div className={SideBarCSS.sidebar__item}>
                                <a className={SideBarCSS.sidebar__link} href="#">
                                <div className={SideBarSkeletonCSS.sidebar__img_skeleton}  alt="day's playlist" />
                                </a>
                            </div>
                            <div className={SideBarCSS.sidebar__item}>
                                <a className={SideBarCSS.sidebar__link} href="#">
                                <div className={SideBarSkeletonCSS.sidebar__img_skeleton} alt="day's playlist"/>
                                </a>
                            </div>
                        </div>
                        </div>
                        </div>
   )
}