import { TrackListSkeleton } from './skeleton/trackList-skeleton'
import { NoteIcon, LikeIcon } from '../icons.jsx'
import styles from './trackList.module.css'
import { useThemeContext } from '../theme/theme';
import cn from 'classnames'

export function TrackList({skeleton}) {
    const {theme} = useThemeContext();

    const content = cn(
        styles.content,
        styles[theme.name]
    );
    const item = cn(
        styles.item
    );
    const track = cn(
        styles.track
    );
    const title = cn(
        styles.title
    );
    const titleImage = cn(
        styles.titleImage
    );
    const titleSvg = cn(
        styles.titleSvg
    );
    const themeColor = cn(
        styles[theme.color]
    );
    const titleText = cn(
        styles.titleText
    );
    const titleLink = cn(
        styles.titleLink
    );
    const titleSpan = cn(
        styles.titleSpan
    );
    const author = cn(
        styles.author
    );
    const authorLink = cn(
        styles.authorLink
    );
    const album = cn(
        styles.album
    );
    const albumLink = cn(
        styles.albumLink
    );
    const time = cn(
        styles.time
    );
    const timeSvg = cn(
        styles.timeSvg
    );
    const timeText = cn(
        styles.timeText
    );



    if(skeleton) {return <TrackListSkeleton/>}
    return(
        <div className={content}>
                            <div className={item}>
                                <div className={track}>
                                    <div className={title}>
                                        <div className={titleImage}>
                                            <svg className={titleSvg} alt="music">
                                            <NoteIcon className={themeColor}/>
                                            </svg>
                                        </div>
                                        <div className={titleText}>
                                            <a className={titleLink} href="http://">Guilt <span className={titleSpan}></span></a>
                                        </div>
                                    </div>
                                    <div className={author}>
                                        <a className={authorLink} href="http://">Nero</a>
                                    </div>
                                    <div className={album}>
                                        <a className={albumLink} href="http://">Welcome Reality</a>
                                    </div>
                                    <div className={time}>
                                        <svg className={timeSvg} alt="time">
                                        <LikeIcon className={themeColor}/>
                                        </svg>
                                        <span className={timeText}>4:44</span>
                                    </div>
                                </div>
                            </div>
                            
                        
                            <div className={item}>
                                <div className={track}>
                                    <div className={title}>
                                        <div className={titleImage}>
                                            <svg className={titleSvg} alt="music">
                                            <NoteIcon className={themeColor}/>
                                            </svg>
                                        </div>
                                        <div className={titleText}>
                                            <a className={titleLink} href="http://">Elektro <span className={titleSpan}></span></a>
                                        </div>
                                    </div>
                                    <div className={author}>
                                        <a className={authorLink} href="http://">Dynoro, Outwork, Mr. Gee</a>
                                    </div>
                                    <div className={album}>
                                        <a className={albumLink} href="http://">Elektro</a>
                                    </div>
                                    <div className={time}>
                                        <svg className={timeSvg} alt="time">
                                        <LikeIcon className={themeColor}/>
                                        </svg>
                                      <span className={timeText}>2:22</span>
                                    </div>
                                </div>
                            </div>
                            <div className={item}>
                                <div className={track}>
                                    <div className={title}>
                                        <div className={titleImage}>
                                            <svg className={titleSvg} alt="music">
                                            <NoteIcon className={themeColor}/>
                                            </svg>
                                        </div>
                                        <div className={titleText}>
                                            <a className={titleLink} href="http://">I’m Fire <span className={titleSpan}></span></a>
                                        </div>
                                    </div>
                                    <div className={author}>
                                        <a className={authorLink} href="http://">Ali Bakgor</a>
                                    </div>
                                    <div className={album}>
                                        <a className={albumLink} href="http://">I’m Fire</a>
                                    </div>
                                    <div className={time}>
                                        <svg className={timeSvg} alt="time">
                                        <LikeIcon className={themeColor}/>
                                        </svg>
                                      <span className={timeText}>2:22</span>
                                    </div>
                                </div>
                            </div>
                            <div className={item}>
                                <div className={track}>
                                    <div className={title}>
                                        <div className={titleImage}>
                                            <svg className={titleSvg} alt="music">
                                            <NoteIcon className={themeColor}/>
                                            </svg>
                                        </div>
                                        <div className={titleText}>
                                            <a className={titleLink} href="http://">Non Stop <span className={titleSpan}> (Remix)</span></a>
                                        </div>
                                    </div>
                                    <div className={author}>
                                        <a className={authorLink} href="http://">Стоункат, Psychopath</a>
                                    </div>
                                    <div className={album}>
                                        <a className={albumLink} href="http://">Non Stop</a>
                                    </div>
                                    <div className={time}>
                                        <svg className={timeSvg} alt="time">
                                        <LikeIcon className={themeColor}/>
                                        </svg>
                                      <span className={timeText}>4:12</span>
                                    </div>
                                </div>
                            </div>
                            <div className={item}>
                                <div className={track}>
                                    <div className={title}>
                                        <div className={titleImage}>
                                            <svg className={titleSvg} alt="music">
                                            <NoteIcon className={themeColor}/>
                                            </svg>
                                        </div>
                                        <div className={titleText}>
                                            <a className={titleLink} href="http://">Run Run<span className={titleSpan}> (feat. AR/CO)</span></a>
                                        </div>
                                    </div>
                                    <div className={author}>
                                        <a className={authorLink} href="http://">Jaded, Will Clarke, AR/CO</a>
                                    </div>
                                    <div className={album}>
                                        <a className={albumLink} href="http://">Run Run</a>
                                    </div>
                                    <div className={time}>
                                        <svg className={timeSvg} alt="time">
                                        <LikeIcon className={themeColor}/>
                                        </svg>
                                      <span className={timeText}>2:54</span>
                                    </div>
                                </div>
                            </div>
                            <div className={item}>
                                <div className={track}>
                                    <div className={title}>
                                        <div className={titleImage}>
                                            <svg className={titleSvg} alt="music">
                                            <NoteIcon className={themeColor}/>
                                            </svg>
                                        </div>
                                        <div className={titleText}>
                                            <a className={titleLink} href="http://">Eyes on Fire<span className={titleSpan}> (Zeds Dead Remix) </span></a>
                                        </div>
                                    </div>
                                    <div className={author}>
                                        <a className={authorLink} href="http://">Blue Foundation, Zeds Dead</a>
                                    </div>
                                    <div className={album}>
                                        <a className={albumLink} href="http://">Eyes on Fire</a>
                                    </div>
                                    <div className={time}>
                                        <svg className={timeSvg} alt="time">
                                        <LikeIcon className={themeColor}/>
                                        </svg>
                                      <span className={timeText}>5:20</span>
                                    </div>
                                </div>
                            </div>
                            <div className={item}>
                                <div className={track}>
                                    <div className={title}>
                                        <div className={titleImage}>
                                            <svg className={titleSvg} alt="music">
                                            <NoteIcon className={themeColor}/>
                                            </svg>
                                        </div>
                                        <div className={titleText}>
                                            <a className={titleLink} href="http://">Mucho Bien <span className={titleSpan}>(Hi Profile Remix)</span></a>
                                        </div>
                                    </div>
                                    <div className={author}>
                                        <a className={authorLink} href="http://">HYBIT, Mr. Black, Offer Nissim, Hi Profile</a>
                                    </div>
                                    <div className={album}>
                                        <a className={albumLink} href="http://">Mucho Bien</a>
                                    </div>
                                    <div className={time}>
                                        <svg className={timeSvg} alt="time">
                                        <LikeIcon className={themeColor}/>
                                        </svg>
                                      <span className={timeText}>3:41</span>
                                    </div>
                                </div>
                            </div>
                            <div className={item}>
                                <div className={track}>
                                    <div className={title}>
                                        <div className={titleImage}>
                                            <svg className={titleSvg} alt="music">
                                            <NoteIcon className={themeColor}/>
                                            </svg>
                                        </div>
                                        <div className={titleText}>
                                            <a className={titleLink} href="http://">Knives n Cherries<span className={titleSpan}></span></a>
                                        </div>
                                    </div>
                                    <div className={author}>
                                        <a className={authorLink} href="http://">minthaze</a>
                                    </div>
                                    <div className={album}>
                                        <a className={albumLink} href="http://">Captivating</a>
                                    </div>
                                    <div className={time}>
                                        <svg className={timeSvg} alt="time">
                                        <LikeIcon className={themeColor}/>
                                        </svg>
                                      <span className={timeText}>1:48</span>
                                    </div>
                                </div>
                            </div>
                            <div className={item}>
                                <div className={track}>
                                    <div className={title}>
                                        <div className={titleImage}>
                                            <svg className={titleSvg} alt="music">
                                            <NoteIcon className={themeColor}/>
                                            </svg>
                                        </div>
                                        <div className={titleText}>
                                            <a className={titleLink} href="http://">How Deep Is Your Love <span className={titleSpan}></span></a>
                                        </div>
                                    </div>
                                    <div className={author}>
                                        <a className={authorLink} href="http://">Calvin Harris, Disciples</a>
                                    </div>
                                    <div className={album}>
                                        <a className={albumLink} href="http://">How Deep Is Your Love</a>
                                    </div>
                                    <div className={time}>
                                        <svg className={timeSvg} alt="time">
                                        <LikeIcon className={themeColor}/>
                                        </svg>
                                      <span className={timeText}>3:32</span>
                                    </div>
                                </div>
                            </div>
                            <div className={item}>
                                <div className={track}>
                                    <div className={title}>
                                        <div className={titleImage}>
                                            <svg className={titleSvg} alt="music">
                                            <NoteIcon className={themeColor}/>
                                            </svg>
                                        </div>
                                        <div className={titleText}>
                                            <a className={titleLink} href="http://">Morena<span className={titleSpan}></span></a>
                                        </div>
                                    </div>
                                    <div className={author}>
                                        <a className={authorLink} href="http://">Tom Boxer</a>
                                    </div>
                                    <div className={album}>
                                        <a className={albumLink} href="http://">Soundz Made in Romania</a>
                                    </div>
                                    <div className={time}>
                                        <svg className={timeSvg} alt="time">
                                        <LikeIcon className={themeColor}/>
                                        </svg>
                                      <span className={timeText}>3:36</span>
                                    </div>
                                </div>
                            </div>

                            </div>
    )
}