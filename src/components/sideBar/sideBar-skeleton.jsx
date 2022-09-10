export function SideBarSkeleton() {
    return(
        <div className="main__sidebar sidebar">
        <div className="sidebar__personal">
                        <p className="sidebar__personal-name"></p>
                        <div className="sidebar__avatar-skeleton">
                            
                        </div>
                    </div>
                    <div className="sidebar__block">
                        <div className="sidebar__list">
                            <div className="sidebar__item">
                                <a className="sidebar__link" href="#">
                                    <div className="sidebar__img-skeleton" src='' alt="day's playlist" />
                                </a>
                            </div>
                            <div className="sidebar__item">
                                <a className="sidebar__link" href="#">
                                <div className="sidebar__img-skeleton"  alt="day's playlist" />
                                </a>
                            </div>
                            <div className="sidebar__item">
                                <a className="sidebar__link" href="#">
                                <div className="sidebar__img-skeleton" alt="day's playlist"/>
                                </a>
                            </div>
                        </div>
                        </div>
                        </div>
   )
}