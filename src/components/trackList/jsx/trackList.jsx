import { TrackListSkeleton } from '../jsx/trackList-skeleton'
import Id from '../img/sprite.svg'
import TrackListCSS from '../css/trackList.module.css'

export function TrackList({skeleton}) {
    if(skeleton) {return <TrackListSkeleton/>}
    return(
        <div className={`${TrackListCSS.content__playlist} ${TrackListCSS.playlist}`}>
                            <div className={TrackListCSS.playlist__item}>
                                <div className={`${TrackListCSS.playlist__track} ${TrackListCSS.track}`}>
                                    <div className={TrackListCSS.track__title}>
                                        <div className={TrackListCSS.track__title_image}>
                                            <svg className={TrackListCSS.track__title_svg} alt="music">
                                            <use xlinkHref={`${Id}#icon-note`} />
                                            </svg>
                                        </div>
                                        <div className={TrackListCSS.track__title_text}>
                                            <a className={TrackListCSS.track__title_link} href="http://">Guilt <span className={TrackListCSS.track__title_span}></span></a>
                                        </div>
                                    </div>
                                    <div className={TrackListCSS.track__author}>
                                        <a className={TrackListCSS.track__author_link} href="http://">Nero</a>
                                    </div>
                                    <div className={TrackListCSS.track__album}>
                                        <a className={TrackListCSS.track__album_link} href="http://">Welcome Reality</a>
                                    </div>
                                    <div className={TrackListCSS.track__time}>
                                        <svg className={TrackListCSS.track__time_svg} alt="time">
                                        <use xlinkHref={`${Id}#icon-like`} />
                                        </svg>
                                        <span className={TrackListCSS.track__time_text}>4:44</span>
                                    </div>
                                </div>
                            </div>
                            
                        
                            <div className={TrackListCSS.playlist__item}>
                                <div className={`${TrackListCSS.playlist__track} ${TrackListCSS.track}`}>
                                    <div className={TrackListCSS.track__title}>
                                        <div className={TrackListCSS.track__title_image}>
                                            <svg className={TrackListCSS.track__title_svg} alt="music">
                                            <use xlinkHref={`${Id}#icon-note`} />
                                            </svg>
                                        </div>
                                        <div className={TrackListCSS.track__title_text}>
                                            <a className={TrackListCSS.track__title_link} href="http://">Elektro <span className={TrackListCSS.track__title_span}></span></a>
                                        </div>
                                    </div>
                                    <div className={TrackListCSS.track__author}>
                                        <a className={TrackListCSS.track__author_link} href="http://">Dynoro, Outwork, Mr. Gee</a>
                                    </div>
                                    <div className={TrackListCSS.track__album}>
                                        <a className={TrackListCSS.track__album_link} href="http://">Elektro</a>
                                    </div>
                                    <div className={TrackListCSS.track__time}>
                                        <svg className={TrackListCSS.track__time_svg} alt="time">
                                        <use xlinkHref={`${Id}#icon-like`} />
                                        </svg>
                                      <span className={TrackListCSS.track__time_text}>2:22</span>
                                    </div>
                                </div>
                            </div>
                            <div className={TrackListCSS.playlist__item}>
                                <div className={`${TrackListCSS.playlist__track} ${TrackListCSS.track}`}>
                                    <div className={TrackListCSS.track__title}>
                                        <div className={TrackListCSS.track__title_image}>
                                            <svg className={TrackListCSS.track__title_svg} alt="music">
                                            <use xlinkHref={`${Id}#icon-note`} />
                                            </svg>
                                        </div>
                                        <div className={TrackListCSS.track__title_text}>
                                            <a className={TrackListCSS.track__title_link} href="http://">I’m Fire <span className={TrackListCSS.track__title_span}></span></a>
                                        </div>
                                    </div>
                                    <div className={TrackListCSS.track__author}>
                                        <a className={TrackListCSS.track__author_link} href="http://">Ali Bakgor</a>
                                    </div>
                                    <div className={TrackListCSS.track__album}>
                                        <a className={TrackListCSS.track__album_link} href="http://">I’m Fire</a>
                                    </div>
                                    <div className={TrackListCSS.track__time}>
                                        <svg className={TrackListCSS.track__time_svg} alt="time">
                                        <use xlinkHref={`${Id}#icon-like`} />
                                        </svg>
                                      <span className={TrackListCSS.track__time_text}>2:22</span>
                                    </div>
                                </div>
                            </div>
                            <div className={TrackListCSS.playlist__item}>
                                <div className={`${TrackListCSS.playlist__track} ${TrackListCSS.track}`}>
                                    <div className={TrackListCSS.track__title}>
                                        <div className={TrackListCSS.track__title_image}>
                                            <svg className={TrackListCSS.track__title_svg} alt="music">
                                            <use xlinkHref={`${Id}#icon-note`} />
                                            </svg>
                                        </div>
                                        <div className={TrackListCSS.track__title_text}>
                                            <a className={TrackListCSS.track__title_link} href="http://">Non Stop <span className={TrackListCSS.track__title_span}> (Remix)</span></a>
                                        </div>
                                    </div>
                                    <div className={TrackListCSS.track__author}>
                                        <a className={TrackListCSS.track__author_link} href="http://">Стоункат, Psychopath</a>
                                    </div>
                                    <div className={TrackListCSS.track__album}>
                                        <a className={TrackListCSS.track__album_link} href="http://">Non Stop</a>
                                    </div>
                                    <div className={TrackListCSS.track__time}>
                                        <svg className={TrackListCSS.track__time_svg} alt="time">
                                        <use xlinkHref={`${Id}#icon-like`} />
                                        </svg>
                                      <span className={TrackListCSS.track__time_text}>4:12</span>
                                    </div>
                                </div>
                            </div>
                            <div className={TrackListCSS.playlist__item}>
                                <div className={`${TrackListCSS.playlist__track} ${TrackListCSS.track}`}>
                                    <div className={TrackListCSS.track__title}>
                                        <div className={TrackListCSS.track__title_image}>
                                            <svg className={TrackListCSS.track__title_svg} alt="music">
                                            <use xlinkHref={`${Id}#icon-note`} />
                                            </svg>
                                        </div>
                                        <div className={TrackListCSS.track__title_text}>
                                            <a className={TrackListCSS.track__title_link} href="http://">Run Run<span className={TrackListCSS.track__title_span}> (feat. AR/CO)</span></a>
                                        </div>
                                    </div>
                                    <div className={TrackListCSS.track__author}>
                                        <a className={TrackListCSS.track__author_link} href="http://">Jaded, Will Clarke, AR/CO</a>
                                    </div>
                                    <div className={TrackListCSS.track__album}>
                                        <a className={TrackListCSS.track__album_link} href="http://">Run Run</a>
                                    </div>
                                    <div className={TrackListCSS.track__time}>
                                        <svg className={TrackListCSS.track__time_svg} alt="time">
                                        <use xlinkHref={`${Id}#icon-like`} />
                                        </svg>
                                      <span className={TrackListCSS.track__time_text}>2:54</span>
                                    </div>
                                </div>
                            </div>
                            <div className={TrackListCSS.playlist__item}>
                                <div className={`${TrackListCSS.playlist__track} ${TrackListCSS.track}`}>
                                    <div className={TrackListCSS.track__title}>
                                        <div className={TrackListCSS.track__title_image}>
                                            <svg className={TrackListCSS.track__title_svg} alt="music">
                                            <use xlinkHref={`${Id}#icon-note`} />
                                            </svg>
                                        </div>
                                        <div className={TrackListCSS.track__title_text}>
                                            <a className={TrackListCSS.track__title_link} href="http://">Eyes on Fire<span className={TrackListCSS.track__title_span}> (Zeds Dead Remix) </span></a>
                                        </div>
                                    </div>
                                    <div className={TrackListCSS.track__author}>
                                        <a className={TrackListCSS.track__author_link} href="http://">Blue Foundation, Zeds Dead</a>
                                    </div>
                                    <div className={TrackListCSS.track__album}>
                                        <a className={TrackListCSS.track__album_link} href="http://">Eyes on Fire</a>
                                    </div>
                                    <div className={TrackListCSS.track__time}>
                                        <svg className={TrackListCSS.track__time_svg} alt="time">
                                        <use xlinkHref={`${Id}#icon-like`} />
                                        </svg>
                                      <span className={TrackListCSS.track__time_text}>5:20</span>
                                    </div>
                                </div>
                            </div>
                            <div className={TrackListCSS.playlist__item}>
                                <div className={`${TrackListCSS.playlist__track} ${TrackListCSS.track}`}>
                                    <div className={TrackListCSS.track__title}>
                                        <div className={TrackListCSS.track__title_image}>
                                            <svg className={TrackListCSS.track__title_svg} alt="music">
                                            <use xlinkHref={`${Id}#icon-note`} />
                                            </svg>
                                        </div>
                                        <div className={TrackListCSS.track__title_text}>
                                            <a className={TrackListCSS.track__title_link} href="http://">Mucho Bien <span className={TrackListCSS.track__title_span}>(Hi Profile Remix)</span></a>
                                        </div>
                                    </div>
                                    <div className={TrackListCSS.track__author}>
                                        <a className={TrackListCSS.track__author_link} href="http://">HYBIT, Mr. Black, Offer Nissim, Hi Profile</a>
                                    </div>
                                    <div className={TrackListCSS.track__album}>
                                        <a className={TrackListCSS.track__album_link} href="http://">Mucho Bien</a>
                                    </div>
                                    <div className={TrackListCSS.track__time}>
                                        <svg className={TrackListCSS.track__time_svg} alt="time">
                                        <use xlinkHref={`${Id}#icon-like`} />
                                        </svg>
                                      <span className={TrackListCSS.track__time_text}>3:41</span>
                                    </div>
                                </div>
                            </div>
                            <div className={TrackListCSS.playlist__item}>
                                <div className={`${TrackListCSS.playlist__track} ${TrackListCSS.track}`}>
                                    <div className={TrackListCSS.track__title}>
                                        <div className={TrackListCSS.track__title_image}>
                                            <svg className={TrackListCSS.track__title_svg} alt="music">
                                            <use xlinkHref={`${Id}#icon-note`} />
                                            </svg>
                                        </div>
                                        <div className={TrackListCSS.track__title_text}>
                                            <a className={TrackListCSS.track__title_link} href="http://">Knives n Cherries<span className={TrackListCSS.track__title_span}></span></a>
                                        </div>
                                    </div>
                                    <div className={TrackListCSS.track__author}>
                                        <a className={TrackListCSS.track__author_link} href="http://">minthaze</a>
                                    </div>
                                    <div className={TrackListCSS.track__album}>
                                        <a className={TrackListCSS.track__album_link} href="http://">Captivating</a>
                                    </div>
                                    <div className={TrackListCSS.track__time}>
                                        <svg className={TrackListCSS.track__time_svg} alt="time">
                                        <use xlinkHref={`${Id}#icon-like`} />
                                        </svg>
                                      <span className={TrackListCSS.track__time_text}>1:48</span>
                                    </div>
                                </div>
                            </div>
                            <div className={TrackListCSS.playlist__item}>
                                <div className={`${TrackListCSS.playlist__track} ${TrackListCSS.track}`}>
                                    <div className={TrackListCSS.track__title}>
                                        <div className={TrackListCSS.track__title_image}>
                                            <svg className={TrackListCSS.track__title_svg} alt="music">
                                            <use xlinkHref={`${Id}#icon-note`} />
                                            </svg>
                                        </div>
                                        <div className={TrackListCSS.track__title_text}>
                                            <a className={TrackListCSS.track__title_link} href="http://">How Deep Is Your Love <span className={TrackListCSS.track__title_span}></span></a>
                                        </div>
                                    </div>
                                    <div className={TrackListCSS.track__author}>
                                        <a className={TrackListCSS.track__author_link} href="http://">Calvin Harris, Disciples</a>
                                    </div>
                                    <div className={TrackListCSS.track__album}>
                                        <a className={TrackListCSS.track__album_link} href="http://">How Deep Is Your Love</a>
                                    </div>
                                    <div className={TrackListCSS.track__time}>
                                        <svg className={TrackListCSS.track__time_svg} alt="time">
                                        <use xlinkHref={`${Id}#icon-like`} />
                                        </svg>
                                      <span className={TrackListCSS.track__time_text}>3:32</span>
                                    </div>
                                </div>
                            </div>
                            <div className={TrackListCSS.playlist__item}>
                                <div className={`${TrackListCSS.playlist__track} ${TrackListCSS.track}`}>
                                    <div className={TrackListCSS.track__title}>
                                        <div className={TrackListCSS.track__title_image}>
                                            <svg className={TrackListCSS.track__title_svg} alt="music">
                                            <use xlinkHref={`${Id}#icon-note`} />
                                            </svg>
                                        </div>
                                        <div className={TrackListCSS.track__title_text}>
                                            <a className={TrackListCSS.track__title_link} href="http://">Morena<span className={TrackListCSS.track__title_span}></span></a>
                                        </div>
                                    </div>
                                    <div className={TrackListCSS.track__author}>
                                        <a className={TrackListCSS.track__author_link} href="http://">Tom Boxer</a>
                                    </div>
                                    <div className={TrackListCSS.track__album}>
                                        <a className={TrackListCSS.track__album_link} href="http://">Soundz Made in Romania</a>
                                    </div>
                                    <div className={TrackListCSS.track__time}>
                                        <svg className={TrackListCSS.track__time_svg} alt="time">
                                        <use xlinkHref={`${Id}#icon-like`} />
                                        </svg>
                                      <span className={TrackListCSS.track__time_text}>3:36</span>
                                    </div>
                                </div>
                            </div>

                            </div>
    )
}