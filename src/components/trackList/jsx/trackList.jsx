import { TrackListSkeleton } from '../jsx/trackList-skeleton'
import { NoteIcon, LikeIcon } from '../../icons.jsx'
import TrackListStyles from '../css/trackList.module.css'
import { useThemeContext } from '../../theme/theme';

export function TrackList({skeleton}) {
    const {theme} = useThemeContext();
    if(skeleton) {return <TrackListSkeleton/>}
    return(
        <div className={`${TrackListStyles.content__playlist} ${TrackListStyles.playlist} ${TrackListStyles[theme.name]}`}>
                            <div className={TrackListStyles.playlist__item}>
                                <div className={`${TrackListStyles.playlist__track} ${TrackListStyles.track}`}>
                                    <div className={TrackListStyles.track__title}>
                                        <div className={TrackListStyles.track__title_image}>
                                            <svg className={TrackListStyles.track__title_svg} alt="music">
                                            <NoteIcon className={TrackListStyles[theme.color]}/>
                                            </svg>
                                        </div>
                                        <div className={TrackListStyles.track__title_text}>
                                            <a className={TrackListStyles.track__title_link} href="http://">Guilt <span className={TrackListStyles.track__title_span}></span></a>
                                        </div>
                                    </div>
                                    <div className={TrackListStyles.track__author}>
                                        <a className={TrackListStyles.track__author_link} href="http://">Nero</a>
                                    </div>
                                    <div className={TrackListStyles.track__album}>
                                        <a className={TrackListStyles.track__album_link} href="http://">Welcome Reality</a>
                                    </div>
                                    <div className={TrackListStyles.track__time}>
                                        <svg className={TrackListStyles.track__time_svg} alt="time">
                                        <LikeIcon className={TrackListStyles[theme.color]}/>
                                        </svg>
                                        <span className={TrackListStyles.track__time_text}>4:44</span>
                                    </div>
                                </div>
                            </div>
                            
                        
                            <div className={TrackListStyles.playlist__item}>
                                <div className={`${TrackListStyles.playlist__track} ${TrackListStyles.track}`}>
                                    <div className={TrackListStyles.track__title}>
                                        <div className={TrackListStyles.track__title_image}>
                                            <svg className={TrackListStyles.track__title_svg} alt="music">
                                            <NoteIcon className={TrackListStyles[theme.color]}/>
                                            </svg>
                                        </div>
                                        <div className={TrackListStyles.track__title_text}>
                                            <a className={TrackListStyles.track__title_link} href="http://">Elektro <span className={TrackListStyles.track__title_span}></span></a>
                                        </div>
                                    </div>
                                    <div className={TrackListStyles.track__author}>
                                        <a className={TrackListStyles.track__author_link} href="http://">Dynoro, Outwork, Mr. Gee</a>
                                    </div>
                                    <div className={TrackListStyles.track__album}>
                                        <a className={TrackListStyles.track__album_link} href="http://">Elektro</a>
                                    </div>
                                    <div className={TrackListStyles.track__time}>
                                        <svg className={TrackListStyles.track__time_svg} alt="time">
                                        <LikeIcon className={TrackListStyles[theme.color]}/>
                                        </svg>
                                      <span className={TrackListStyles.track__time_text}>2:22</span>
                                    </div>
                                </div>
                            </div>
                            <div className={TrackListStyles.playlist__item}>
                                <div className={`${TrackListStyles.playlist__track} ${TrackListStyles.track}`}>
                                    <div className={TrackListStyles.track__title}>
                                        <div className={TrackListStyles.track__title_image}>
                                            <svg className={TrackListStyles.track__title_svg} alt="music">
                                            <NoteIcon className={TrackListStyles[theme.color]}/>
                                            </svg>
                                        </div>
                                        <div className={TrackListStyles.track__title_text}>
                                            <a className={TrackListStyles.track__title_link} href="http://">I’m Fire <span className={TrackListStyles.track__title_span}></span></a>
                                        </div>
                                    </div>
                                    <div className={TrackListStyles.track__author}>
                                        <a className={TrackListStyles.track__author_link} href="http://">Ali Bakgor</a>
                                    </div>
                                    <div className={TrackListStyles.track__album}>
                                        <a className={TrackListStyles.track__album_link} href="http://">I’m Fire</a>
                                    </div>
                                    <div className={TrackListStyles.track__time}>
                                        <svg className={TrackListStyles.track__time_svg} alt="time">
                                        <LikeIcon className={TrackListStyles[theme.color]}/>
                                        </svg>
                                      <span className={TrackListStyles.track__time_text}>2:22</span>
                                    </div>
                                </div>
                            </div>
                            <div className={TrackListStyles.playlist__item}>
                                <div className={`${TrackListStyles.playlist__track} ${TrackListStyles.track}`}>
                                    <div className={TrackListStyles.track__title}>
                                        <div className={TrackListStyles.track__title_image}>
                                            <svg className={TrackListStyles.track__title_svg} alt="music">
                                            <NoteIcon className={TrackListStyles[theme.color]}/>
                                            </svg>
                                        </div>
                                        <div className={TrackListStyles.track__title_text}>
                                            <a className={TrackListStyles.track__title_link} href="http://">Non Stop <span className={TrackListStyles.track__title_span}> (Remix)</span></a>
                                        </div>
                                    </div>
                                    <div className={TrackListStyles.track__author}>
                                        <a className={TrackListStyles.track__author_link} href="http://">Стоункат, Psychopath</a>
                                    </div>
                                    <div className={TrackListStyles.track__album}>
                                        <a className={TrackListStyles.track__album_link} href="http://">Non Stop</a>
                                    </div>
                                    <div className={TrackListStyles.track__time}>
                                        <svg className={TrackListStyles.track__time_svg} alt="time">
                                        <LikeIcon className={TrackListStyles[theme.color]}/>
                                        </svg>
                                      <span className={TrackListStyles.track__time_text}>4:12</span>
                                    </div>
                                </div>
                            </div>
                            <div className={TrackListStyles.playlist__item}>
                                <div className={`${TrackListStyles.playlist__track} ${TrackListStyles.track}`}>
                                    <div className={TrackListStyles.track__title}>
                                        <div className={TrackListStyles.track__title_image}>
                                            <svg className={TrackListStyles.track__title_svg} alt="music">
                                            <NoteIcon className={TrackListStyles[theme.color]}/>
                                            </svg>
                                        </div>
                                        <div className={TrackListStyles.track__title_text}>
                                            <a className={TrackListStyles.track__title_link} href="http://">Run Run<span className={TrackListStyles.track__title_span}> (feat. AR/CO)</span></a>
                                        </div>
                                    </div>
                                    <div className={TrackListStyles.track__author}>
                                        <a className={TrackListStyles.track__author_link} href="http://">Jaded, Will Clarke, AR/CO</a>
                                    </div>
                                    <div className={TrackListStyles.track__album}>
                                        <a className={TrackListStyles.track__album_link} href="http://">Run Run</a>
                                    </div>
                                    <div className={TrackListStyles.track__time}>
                                        <svg className={TrackListStyles.track__time_svg} alt="time">
                                        <LikeIcon className={TrackListStyles[theme.color]}/>
                                        </svg>
                                      <span className={TrackListStyles.track__time_text}>2:54</span>
                                    </div>
                                </div>
                            </div>
                            <div className={TrackListStyles.playlist__item}>
                                <div className={`${TrackListStyles.playlist__track} ${TrackListStyles.track}`}>
                                    <div className={TrackListStyles.track__title}>
                                        <div className={TrackListStyles.track__title_image}>
                                            <svg className={TrackListStyles.track__title_svg} alt="music">
                                            <NoteIcon className={TrackListStyles[theme.color]}/>
                                            </svg>
                                        </div>
                                        <div className={TrackListStyles.track__title_text}>
                                            <a className={TrackListStyles.track__title_link} href="http://">Eyes on Fire<span className={TrackListStyles.track__title_span}> (Zeds Dead Remix) </span></a>
                                        </div>
                                    </div>
                                    <div className={TrackListStyles.track__author}>
                                        <a className={TrackListStyles.track__author_link} href="http://">Blue Foundation, Zeds Dead</a>
                                    </div>
                                    <div className={TrackListStyles.track__album}>
                                        <a className={TrackListStyles.track__album_link} href="http://">Eyes on Fire</a>
                                    </div>
                                    <div className={TrackListStyles.track__time}>
                                        <svg className={TrackListStyles.track__time_svg} alt="time">
                                        <LikeIcon className={TrackListStyles[theme.color]}/>
                                        </svg>
                                      <span className={TrackListStyles.track__time_text}>5:20</span>
                                    </div>
                                </div>
                            </div>
                            <div className={TrackListStyles.playlist__item}>
                                <div className={`${TrackListStyles.playlist__track} ${TrackListStyles.track}`}>
                                    <div className={TrackListStyles.track__title}>
                                        <div className={TrackListStyles.track__title_image}>
                                            <svg className={TrackListStyles.track__title_svg} alt="music">
                                            <NoteIcon className={TrackListStyles[theme.color]}/>
                                            </svg>
                                        </div>
                                        <div className={TrackListStyles.track__title_text}>
                                            <a className={TrackListStyles.track__title_link} href="http://">Mucho Bien <span className={TrackListStyles.track__title_span}>(Hi Profile Remix)</span></a>
                                        </div>
                                    </div>
                                    <div className={TrackListStyles.track__author}>
                                        <a className={TrackListStyles.track__author_link} href="http://">HYBIT, Mr. Black, Offer Nissim, Hi Profile</a>
                                    </div>
                                    <div className={TrackListStyles.track__album}>
                                        <a className={TrackListStyles.track__album_link} href="http://">Mucho Bien</a>
                                    </div>
                                    <div className={TrackListStyles.track__time}>
                                        <svg className={TrackListStyles.track__time_svg} alt="time">
                                        <LikeIcon className={TrackListStyles[theme.color]}/>
                                        </svg>
                                      <span className={TrackListStyles.track__time_text}>3:41</span>
                                    </div>
                                </div>
                            </div>
                            <div className={TrackListStyles.playlist__item}>
                                <div className={`${TrackListStyles.playlist__track} ${TrackListStyles.track}`}>
                                    <div className={TrackListStyles.track__title}>
                                        <div className={TrackListStyles.track__title_image}>
                                            <svg className={TrackListStyles.track__title_svg} alt="music">
                                            <NoteIcon className={TrackListStyles[theme.color]}/>
                                            </svg>
                                        </div>
                                        <div className={TrackListStyles.track__title_text}>
                                            <a className={TrackListStyles.track__title_link} href="http://">Knives n Cherries<span className={TrackListStyles.track__title_span}></span></a>
                                        </div>
                                    </div>
                                    <div className={TrackListStyles.track__author}>
                                        <a className={TrackListStyles.track__author_link} href="http://">minthaze</a>
                                    </div>
                                    <div className={TrackListStyles.track__album}>
                                        <a className={TrackListStyles.track__album_link} href="http://">Captivating</a>
                                    </div>
                                    <div className={TrackListStyles.track__time}>
                                        <svg className={TrackListStyles.track__time_svg} alt="time">
                                        <LikeIcon className={TrackListStyles[theme.color]}/>
                                        </svg>
                                      <span className={TrackListStyles.track__time_text}>1:48</span>
                                    </div>
                                </div>
                            </div>
                            <div className={TrackListStyles.playlist__item}>
                                <div className={`${TrackListStyles.playlist__track} ${TrackListStyles.track}`}>
                                    <div className={TrackListStyles.track__title}>
                                        <div className={TrackListStyles.track__title_image}>
                                            <svg className={TrackListStyles.track__title_svg} alt="music">
                                            <NoteIcon className={TrackListStyles[theme.color]}/>
                                            </svg>
                                        </div>
                                        <div className={TrackListStyles.track__title_text}>
                                            <a className={TrackListStyles.track__title_link} href="http://">How Deep Is Your Love <span className={TrackListStyles.track__title_span}></span></a>
                                        </div>
                                    </div>
                                    <div className={TrackListStyles.track__author}>
                                        <a className={TrackListStyles.track__author_link} href="http://">Calvin Harris, Disciples</a>
                                    </div>
                                    <div className={TrackListStyles.track__album}>
                                        <a className={TrackListStyles.track__album_link} href="http://">How Deep Is Your Love</a>
                                    </div>
                                    <div className={TrackListStyles.track__time}>
                                        <svg className={TrackListStyles.track__time_svg} alt="time">
                                        <LikeIcon className={TrackListStyles[theme.color]}/>
                                        </svg>
                                      <span className={TrackListStyles.track__time_text}>3:32</span>
                                    </div>
                                </div>
                            </div>
                            <div className={TrackListStyles.playlist__item}>
                                <div className={`${TrackListStyles.playlist__track} ${TrackListStyles.track}`}>
                                    <div className={TrackListStyles.track__title}>
                                        <div className={TrackListStyles.track__title_image}>
                                            <svg className={TrackListStyles.track__title_svg} alt="music">
                                            <NoteIcon className={TrackListStyles[theme.color]}/>
                                            </svg>
                                        </div>
                                        <div className={TrackListStyles.track__title_text}>
                                            <a className={TrackListStyles.track__title_link} href="http://">Morena<span className={TrackListStyles.track__title_span}></span></a>
                                        </div>
                                    </div>
                                    <div className={TrackListStyles.track__author}>
                                        <a className={TrackListStyles.track__author_link} href="http://">Tom Boxer</a>
                                    </div>
                                    <div className={TrackListStyles.track__album}>
                                        <a className={TrackListStyles.track__album_link} href="http://">Soundz Made in Romania</a>
                                    </div>
                                    <div className={TrackListStyles.track__time}>
                                        <svg className={TrackListStyles.track__time_svg} alt="time">
                                        <LikeIcon className={TrackListStyles[theme.color]}/>
                                        </svg>
                                      <span className={TrackListStyles.track__time_text}>3:36</span>
                                    </div>
                                </div>
                            </div>

                            </div>
    )
}