import { BottomPlayerSkeleton } from './skeleton/bottomPlayer-skeleton'
import styles from './bottomPlayer.module.css'
import { NoteIcon, PrevIcon,NextIcon,ShuffleIcon,LikeIcon,DislikeIcon, RepeatIcon, VolumeIcon, PauseIcon, PlayIcon } from '../icons.jsx'
import { useRef, useState } from 'react';
import { useThemeContext } from '../theme/theme';
import mainSong from '../../music.mp3';
import cn from 'classnames';

export function BottomPlayer({skeleton}) {
    const [playing, setPlaying] = useState(false);
    const audioRef = useRef(null);
    const inputRef = useRef(null)
    const timer = useRef(null)
    
    const handleStart = () => {
        timer.current = setInterval(playChange, 1000); 
        setPlaying(true);
        audioRef.current.play();
    }
  
    const handleStop = () => {
        clearInterval(timer.current)
      setPlaying(false);
      audioRef.current.pause();
    };
    const togglePlay = playing ? handleStop : handleStart;

    function playChange() {
        inputRef.current.max = audioRef.current.duration;
        inputRef.current.value = audioRef.current.currentTime;
    }
    const {theme} = useThemeContext();

    const content = cn(
        styles.content,
        styles.bar,
        styles[theme.name]
    );
    const fake = cn(
        styles.fake
    );
    const bar = cn(
        styles.bar,
    );
    const playerProgress = cn(
        styles.playerProgress
    );
    const progressLine = cn(
        styles.barProgressLine
    );
    const playerBlock = cn(
        styles.playerBlock
    );
    const player = cn(
        styles.player
    );
    const controls = cn(
        styles.controls
    );
    const btnPrev = cn(
        styles.btnPrev
    );
    const themeColor = cn(
        styles[theme.color]
    );
    const btnPlay = cn(
        styles.btnPlay
    );
    const trackPlaySvg = cn(
        styles.trackPlaySvg
    );
    const btnNext = cn(
        styles.btnNext
    );
    const btnRepeat = cn(
        styles.btnRepeat,
        styles.btnIcon
    );
    const btnShuffle = cn(
        styles.btnShuffle,
        styles.btnIcon
    );
    const trackPlay = cn(
        styles.trackPlay
    );
    const playContain = cn(
        styles.playContain
    );
    const trackPlayImage = cn(
        styles.trackPlayImage
    );
    const playAuthor = cn(
        styles.trackPlayAuthor
    );
    const noteSvg = cn(
        styles.trackNoteSvg
    );
    const authorLink = cn(
        styles.trackPlayAuthorLink
    );
    const playAlbum = cn(
        styles.trackPlayAlbum
    );
    const albumLink = cn(
        styles.trackPlayAlbumLink
    );
    const playLikeDis = cn(
        styles.trackPlayLikeDis
    );
    const playLike = cn(
        styles.trackPlayLike,
        styles.btnIcon
    );
    const playDislike = cn(
        styles.trackPlayDislike,
        styles.btnIcon
    );
    const volumeBlock = cn (
        styles.volumeBlock
    );
    const volumeContent = cn(
        styles.volumeContent
    );
    const volumeImage = cn(
        styles.volumeImage
    );
    const volumeSvg = cn(
        styles.trackVolumeSvg
    );
    const volumeProgress = cn(
        styles.volumeProgress
    );
    const volumeProgressLine = cn(
        styles.volumeProgressLine
    )


    if (skeleton) {return <BottomPlayerSkeleton/>}
    return (
        <div>
             <audio controls ref={audioRef} className={fake}>
                <source src={mainSong} type="audio/mpeg" />
            </audio>
        <div className={bar}>
            <div className={content}>
                    <div className={playerProgress}>
                    <input ref={inputRef} className={progressLine} type="range" name="range" max={inputRef.current?.max} value={inputRef.current?.value ?? 0}/>
                    </div>
                        <div className={playerBlock}>
                            <div className={player}>
                                <div className={controls}>
                                    <div className={btnPrev}>
                                        <svg className={trackPlaySvg}>
                                            <PrevIcon className={themeColor}/>
                                        </svg>
                                    </div>
                                <div className={btnPlay} onClick={togglePlay}>
                                <svg className={trackPlaySvg}>
                                    {playing?<PauseIcon className={themeColor}/>:<PlayIcon/>}
                                </svg>
                                </div>
                                <div className={btnNext}>
                                    <svg className={trackPlaySvg}>
                                        <NextIcon className={themeColor}/>
                                    </svg>  
                                </div>
                                <div className={btnRepeat}>
                                    <svg className={trackPlaySvg}>
                                        <RepeatIcon className={themeColor}/>
                                    </svg>
                                </div>
                                <div className={btnShuffle} >
                                    <svg className={trackPlaySvg}>
                                        <ShuffleIcon className={themeColor}/>
                                    </svg>                              
                                </div>
                            </div>
                            <div className={trackPlay}>
                                <div className={playContain}>
                                    <div className={trackPlayImage}>
                                        <svg className={noteSvg} alt="music">
                                        <NoteIcon className={themeColor}/>
                                        </svg>
                                    </div>
                                    <div className={playAuthor}>
                                        <a className={authorLink} href="http://">Ты та...</a>
                                    </div>
                                    <div className={playAlbum}>
                                        <a className={albumLink} href="http://">Баста</a>
                                    </div>
                                </div>

                                <div className={playLikeDis}>
                                    <div className={playLike}>
                                        <svg className={trackPlaySvg}>
                                            <LikeIcon className={themeColor}/>
                                        </svg>
                                    </div>
                                    <div className={playDislike}>
                                        <svg className={trackPlaySvg}>
                                            <DislikeIcon className={themeColor}/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={volumeBlock}>
                           <div className={volumeContent}>
                                <div className={volumeImage}>
                                    <svg className={volumeSvg}>
                                        <VolumeIcon className={themeColor}/>
                                    </svg>
                                </div>
                                <div className={volumeProgress}>
                                    <input className={volumeProgressLine} type="range" name="range" />
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) 

}