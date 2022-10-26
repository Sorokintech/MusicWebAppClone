import { TrackListSkeleton } from './skeleton/trackList-skeleton'
import { NoteIcon, LikeIcon } from '../icons.jsx'
import styles from './trackList.module.css'
import { useThemeContext } from '../theme/theme';
import cn from 'classnames'

export function TrackList({loading}) {
    const {theme} = useThemeContext();

    // const content = cn(
    //     styles.content,
    //     styles[theme.name]
    // );
    // const item = cn(
    //     styles.item
    // );
    // const track = cn(
    //     styles.track
    // );
    // const title = cn(
    //     styles.title
    // );
    // const titleImage = cn(
    //     styles.titleImage
    // );
    // const titleSvg = cn(
    //     styles.titleSvg
    // );
    // const themeColor = cn(
    //     styles[theme.color]
    // );
    // const titleText = cn(
    //     styles.titleText
    // );
    // const titleLink = cn(
    //     styles.titleLink
    // );
    // const titleSpan = cn(
    //     styles.titleSpan
    // );
    // const author = cn(
    //     styles.author
    // );
    // const authorLink = cn(
    //     styles.authorLink
    // );
    // const album = cn(
    //     styles.album
    // );
    // const albumLink = cn(
    //     styles.albumLink
    // );
    // const time = cn(
    //     styles.time
    // );
    // const timeSvg = cn(
    //     styles.timeSvg
    // );
    // const timeText = cn(
    //     styles.timeText
    // );



    if(loading) {return <TrackListSkeleton/>}
    return(
        <div className={cn(styles.content,styles[theme.name])}>
                            <div className={cn(styles.item)}>
                                <div className={cn(styles.track)}>
                                    <div className={cn(styles.title)}>
                                        <div className={cn(styles.titleImage)}>
                                            <svg className={cn(styles.titleSvg)} alt="music">
                                            <NoteIcon className={cn(styles[theme.color])}/>
                                            </svg>
                                        </div>
                                        <div className={cn(styles.titleText)}>
                                            <a className={cn(styles.titleLink)} href="http://">Guilt 
                                                <span className={cn(styles.titleSpan)}></span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className={cn(styles.author)}>
                                        <a className={cn(styles.authorLink)} href="http://">Nero</a>
                                    </div>
                                    <div className={cn(styles.album)}>
                                        <a className={cn(styles.albumLink)} href="http://">Welcome Reality</a>
                                    </div>
                                    <div className={cn(styles.time)}>
                                        <svg className={cn(styles.timeSvg)} alt="time">
                                            <LikeIcon className={cn(styles[theme.color])}/>
                                        </svg>
                                        <span className={cn(styles.timeText)}>4:44</span>
                                    </div>
                                </div>
                            </div>
                            
                        
                            <div className={cn(styles.item)}>
                                <div className={cn(styles.track)}>
                                    <div className={cn(styles.title)}>
                                        <div className={cn(styles.titleImage)}>
                                            <svg className={cn(styles.titleSvg)} alt="music">
                                            <NoteIcon className={cn(styles[theme.color])}/>
                                            </svg>
                                        </div>
                                        <div className={cn(styles.titleText)}>
                                            <a className={cn(styles.titleLink)} href="http://">Elektro 
                                                <span className={cn(styles.titleSpan)}></span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className={cn(styles.author)}>
                                        <a className={cn(styles.authorLink)} href="http://">Dynoro, Outwork, Mr. Gee</a>
                                    </div>
                                    <div className={cn(styles.album)}>
                                        <a className={cn(styles.albumLink)} href="http://">Elektro</a>
                                    </div>
                                    <div className={cn(styles.time)}>
                                        <svg className={cn(styles.timeSvg)} alt="time">
                                        <LikeIcon className={cn(styles[theme.color])}/>
                                        </svg>
                                      <span className={cn(styles.timeText)}>2:22</span>
                                    </div>
                                </div>
                            </div>
                            <div className={cn(styles.item)}>
                                <div className={cn(styles.track)}>
                                    <div className={cn(styles.title)}>
                                        <div className={cn(styles.titleImage)}>
                                            <svg className={cn(styles.titleSvg)} alt="music">
                                            <NoteIcon className={cn(styles[theme.color])}/>
                                            </svg>
                                        </div>
                                        <div className={cn(styles.titleText)}>
                                            <a className={cn(styles.titleLink)} href="http://">I’m Fire <span className={cn(styles.titleSpan)}></span></a>
                                        </div>
                                    </div>
                                    <div className={cn(styles.author)}>
                                        <a className={cn(styles.authorLink)} href="http://">Ali Bakgor</a>
                                    </div>
                                    <div className={cn(styles.album)}>
                                        <a className={cn(styles.albumLink)} href="http://">I’m Fire</a>
                                    </div>
                                    <div className={cn(styles.time)}>
                                        <svg className={cn(styles.timeSvg)} alt="time">
                                        <LikeIcon className={cn(styles[theme.color])}/>
                                        </svg>
                                      <span className={cn(styles.timeText)}>2:22</span>
                                    </div>
                                </div>
                            </div>
                            <div className={cn(styles.item)}>
                                <div className={cn(styles.track)}>
                                    <div className={cn(styles.title)}>
                                        <div className={cn(styles.titleImage)}>
                                            <svg className={cn(styles.titleSvg)} alt="music">
                                            <NoteIcon className={cn(styles[theme.color])}/>
                                            </svg>
                                        </div>
                                        <div className={cn(styles.titleText)}>
                                            <a className={cn(styles.titleLink)} href="http://">Non Stop <span className={cn(styles.titleSpan)}> (Remix)</span></a>
                                        </div>
                                    </div>
                                    <div className={cn(styles.author)}>
                                        <a className={cn(styles.authorLink)} href="http://">Стоункат, Psychopath</a>
                                    </div>
                                    <div className={cn(styles.album)}>
                                        <a className={cn(styles.albumLink)} href="http://">Non Stop</a>
                                    </div>
                                    <div className={cn(styles.time)}>
                                        <svg className={cn(styles.timeSvg)} alt="time">
                                        <LikeIcon className={cn(styles[theme.color])}/>
                                        </svg>
                                      <span className={cn(styles.timeText)}>4:12</span>
                                    </div>
                                </div>
                            </div>
                            <div className={cn(styles.item)}>
                                <div className={cn(styles.track)}>
                                    <div className={cn(styles.title)}>
                                        <div className={cn(styles.titleImage)}>
                                            <svg className={cn(styles.titleSvg)} alt="music">
                                            <NoteIcon className={cn(styles[theme.color])}/>
                                            </svg>
                                        </div>
                                        <div className={cn(styles.titleText)}>
                                            <a className={cn(styles.titleLink)} href="http://">Run Run<span className={cn(styles.titleSpan)}> (feat. AR/CO)</span></a>
                                        </div>
                                    </div>
                                    <div className={cn(styles.author)}>
                                        <a className={cn(styles.authorLink)} href="http://">Jaded, Will Clarke, AR/CO</a>
                                    </div>
                                    <div className={cn(styles.album)}>
                                        <a className={cn(styles.albumLink)} href="http://">Run Run</a>
                                    </div>
                                    <div className={cn(styles.time)}>
                                        <svg className={cn(styles.timeSvg)} alt="time">
                                        <LikeIcon className={cn(styles[theme.color])}/>
                                        </svg>
                                      <span className={cn(styles.timeText)}>2:54</span>
                                    </div>
                                </div>
                            </div>
                            <div className={cn(styles.item)}>
                                <div className={cn(styles.track)}>
                                    <div className={cn(styles.title)}>
                                        <div className={cn(styles.titleImage)}>
                                            <svg className={cn(styles.titleSvg)} alt="music">
                                            <NoteIcon className={cn(styles[theme.color])}/>
                                            </svg>
                                        </div>
                                        <div className={cn(styles.titleText)}>
                                            <a className={cn(styles.titleLink)} href="http://">Eyes on Fire<span className={cn(styles.titleSpan)}> (Zeds Dead Remix) </span></a>
                                        </div>
                                    </div>
                                    <div className={cn(styles.author)}>
                                        <a className={cn(styles.authorLink)} href="http://">Blue Foundation, Zeds Dead</a>
                                    </div>
                                    <div className={cn(styles.album)}>
                                        <a className={cn(styles.albumLink)} href="http://">Eyes on Fire</a>
                                    </div>
                                    <div className={cn(styles.time)}>
                                        <svg className={cn(styles.timeSvg)} alt="time">
                                        <LikeIcon className={cn(styles[theme.color])}/>
                                        </svg>
                                      <span className={cn(styles.timeText)}>5:20</span>
                                    </div>
                                </div>
                            </div>
                            <div className={cn(styles.item)}>
                                <div className={cn(styles.track)}>
                                    <div className={cn(styles.title)}>
                                        <div className={cn(styles.titleImage)}>
                                            <svg className={cn(styles.titleSvg)} alt="music">
                                            <NoteIcon className={cn(styles[theme.color])}/>
                                            </svg>
                                        </div>
                                        <div className={cn(styles.titleText)}>
                                            <a className={cn(styles.titleLink)} href="http://">Mucho Bien <span className={cn(styles.titleSpan)}>(Hi Profile Remix)</span></a>
                                        </div>
                                    </div>
                                    <div className={cn(styles.author)}>
                                        <a className={cn(styles.authorLink)} href="http://">HYBIT, Mr. Black, Offer Nissim, Hi Profile</a>
                                    </div>
                                    <div className={cn(styles.album)}>
                                        <a className={cn(styles.albumLink)} href="http://">Mucho Bien</a>
                                    </div>
                                    <div className={cn(styles.time)}>
                                        <svg className={cn(styles.timeSvg)} alt="time">
                                        <LikeIcon className={cn(styles[theme.color])}/>
                                        </svg>
                                      <span className={cn(styles.timeText)}>3:41</span>
                                    </div>
                                </div>
                            </div>
                            <div className={cn(styles.item)}>
                                <div className={cn(styles.track)}>
                                    <div className={cn(styles.title)}>
                                        <div className={cn(styles.titleImage)}>
                                            <svg className={cn(styles.titleSvg)} alt="music">
                                            <NoteIcon className={cn(styles[theme.color])}/>
                                            </svg>
                                        </div>
                                        <div className={cn(styles.titleText)}>
                                            <a className={cn(styles.titleLink)} href="http://">Knives n Cherries<span className={cn(styles.titleSpan)}></span></a>
                                        </div>
                                    </div>
                                    <div className={cn(styles.author)}>
                                        <a className={cn(styles.authorLink)} href="http://">minthaze</a>
                                    </div>
                                    <div className={cn(styles.album)}>
                                        <a className={cn(styles.albumLink)} href="http://">Captivating</a>
                                    </div>
                                    <div className={cn(styles.time)}>
                                        <svg className={cn(styles.timeSvg)} alt="time">
                                        <LikeIcon className={cn(styles[theme.color])}/>
                                        </svg>
                                      <span className={cn(styles.timeText)}>1:48</span>
                                    </div>
                                </div>
                            </div>
                            <div className={cn(styles.item)}>
                                <div className={cn(styles.track)}>
                                    <div className={cn(styles.title)}>
                                        <div className={cn(styles.titleImage)}>
                                            <svg className={cn(styles.titleSvg)} alt="music">
                                            <NoteIcon className={cn(styles[theme.color])}/>
                                            </svg>
                                        </div>
                                        <div className={cn(styles.titleText)}>
                                            <a className={cn(styles.titleLink)} href="http://">How Deep Is Your Love <span className={cn(styles.titleSpan)}></span></a>
                                        </div>
                                    </div>
                                    <div className={cn(styles.author)}>
                                        <a className={cn(styles.authorLink)} href="http://">Calvin Harris, Disciples</a>
                                    </div>
                                    <div className={cn(styles.album)}>
                                        <a className={cn(styles.albumLink)} href="http://">How Deep Is Your Love</a>
                                    </div>
                                    <div className={cn(styles.time)}>
                                        <svg className={cn(styles.timeSvg)} alt="time">
                                        <LikeIcon className={cn(styles[theme.color])}/>
                                        </svg>
                                      <span className={cn(styles.timeText)}>3:32</span>
                                    </div>
                                </div>
                            </div>
                            <div className={cn(styles.item)}>
                                <div className={cn(styles.track)}>
                                    <div className={cn(styles.title)}>
                                        <div className={cn(styles.titleImage)}>
                                            <svg className={cn(styles.titleSvg)} alt="music">
                                            <NoteIcon className={cn(styles[theme.color])}/>
                                            </svg>
                                        </div>
                                        <div className={cn(styles.titleText)}>
                                            <a className={cn(styles.titleLink)} href="http://">Morena<span className={cn(styles.titleSpan)}></span></a>
                                        </div>
                                    </div>
                                    <div className={cn(styles.author)}>
                                        <a className={cn(styles.authorLink)} href="http://">Tom Boxer</a>
                                    </div>
                                    <div className={cn(styles.album)}>
                                        <a className={cn(styles.albumLink)} href="http://">Soundz Made in Romania</a>
                                    </div>
                                    <div className={cn(styles.time)}>
                                        <svg className={cn(styles.timeSvg)} alt="time">
                                        <LikeIcon className={cn(styles[theme.color])}/>
                                        </svg>
                                      <span className={cn(styles.timeText)}>3:36</span>
                                    </div>
                                </div>
                            </div>

                            </div>
    )
}