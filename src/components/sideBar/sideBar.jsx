import { SideBarSkeleton } from './sideBar-skeleton'
import playlistOne from './img/playlist01.png'
import playlistTwo from './img/playlist02.png'
import playlistThree from './img/playlist03.png'

export function SideBar({skeleton}) {
    if (skeleton) {return <SideBarSkeleton/>}
    return(
        <div className="main__sidebar sidebar">
        <div className="sidebar__personal">
                        <p className="sidebar__personal-name">Sergey.Ivanov</p>
                        <div className="sidebar__avatar">
                            
                        </div>
                    </div>
                    <div className="sidebar__block">
                        <div className="sidebar__list">
                            <div className="sidebar__item">
                                <a className="sidebar__link" href="#">
                                    <img className="sidebar__img" src={playlistOne}  alt="day's playlist" />
                                </a>
                            </div>
                            <div className="sidebar__item">
                                <a className="sidebar__link" href="#">
                                    <img className="sidebar__img" src={playlistTwo} alt="day's playlist" />
                                </a>
                            </div>
                            <div className="sidebar__item">
                                <a className="sidebar__link" href="#">
                                    <img className="sidebar__img" src={playlistThree} alt="day's playlist"/>
                                </a>
                            </div>
                        </div>
                        </div>
                        </div>
   )
}