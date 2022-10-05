import { BottomPlayerSkeleton } from '../jsx/bottomPlayer-skeleton'
import BottomPlayerCSS from '../css/bottomPlayer.module.css'
import Id from '../img/sprite.svg'
import { PrevIcon,NextIcon,ShuffleIcon,LikeIcon,DislikeIcon, RepeatIcon, VolumeIcon, PauseIcon, PlayIcon } from '../../icons.jsx'
import { useRef, useState } from 'react';
import { useThemeContext } from '../../theme/theme';
import mainSong from '../../../music.mp3';


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
    
    if (skeleton) {return <BottomPlayerSkeleton/>}
    return (
        <div>
             <audio controls ref={audioRef} className={BottomPlayerCSS.fake__player}>
                <source src={mainSong} type="audio/mpeg" />
            </audio>
        <div className={BottomPlayerCSS.bar}>
            <div className={`${BottomPlayerCSS.bar__content} ${BottomPlayerCSS.bar} ${BottomPlayerCSS[theme.name]}`}>
                    <div className={BottomPlayerCSS.bar__player_progress}>
                    <input ref={inputRef} className={`${BottomPlayerCSS.bar__progress_line} ${BottomPlayerCSS._btn}`} type="range" name="range" max={inputRef.current?.max} value={inputRef.current?.value ?? 0}/>
                    </div>
                        <div className={BottomPlayerCSS.bar__player_block}>
                            <div className={`${BottomPlayerCSS.bar__player} ${BottomPlayerCSS.player}`}>
                                <div className={BottomPlayerCSS.player__controls}>
                                    <div className={BottomPlayerCSS.player__btn_prev}>
                                        <svg className={BottomPlayerCSS.track__other_svg}>
                                            <PrevIcon className={BottomPlayerCSS[theme.color]}/>
                                        </svg>
                                    </div>
                                <div className={`${BottomPlayerCSS.player__btn_play} ${BottomPlayerCSS._btn}`} onClick={togglePlay}>
                                <svg className={BottomPlayerCSS.track__play_svg}>
                                    {playing?<PauseIcon className={BottomPlayerCSS[theme.color]}/>:<PlayIcon/>}
                                </svg>
                                </div>
                                <div className={BottomPlayerCSS.player__btn_next}>
                                    <svg className={BottomPlayerCSS.track__other_svg}>
                                        <NextIcon className={BottomPlayerCSS[theme.color]}/>
                                    </svg>  
                                </div>
                                <div className={`${BottomPlayerCSS.player__btn_repeat} ${BottomPlayerCSS._btn_icon}`}>
                                    <svg className={BottomPlayerCSS.track__other_svg}>
                                        <RepeatIcon className={BottomPlayerCSS[theme.color]}/>
                                    </svg>
                                </div>
                                <div className={`${BottomPlayerCSS.player__btn_shuffle} ${BottomPlayerCSS._btn_icon}`} >
                                    <svg className={BottomPlayerCSS.track__other_svg}>
                                        <ShuffleIcon className={BottomPlayerCSS[theme.color]}/>
                                    </svg>                              
                                </div>
                            </div>
                            <div className={`${BottomPlayerCSS.player__track_play} ${BottomPlayerCSS.track_play}`}>
                                <div className={BottomPlayerCSS.track__play_contain}>
                                    <div className={BottomPlayerCSS.track__play_image}>
                                        <svg className={BottomPlayerCSS.track__note_svg} alt="music">
                                            <use xlinkHref={`${Id}#icon-note`} />
                                        </svg>
                                    </div>
                                    <div className={BottomPlayerCSS.track__play_author}>
                                        <a className={BottomPlayerCSS.track__play_author_link} href="http://">Ты та...</a>
                                    </div>
                                    <div className={BottomPlayerCSS.track__play_album}>
                                        <a className={BottomPlayerCSS.track__play_album_link} href="http://">Баста</a>
                                    </div>
                                </div>

                                <div className={BottomPlayerCSS.track__play_like_dis}>
                                    <div className={`${BottomPlayerCSS.track__play_like} ${BottomPlayerCSS._btn__icon}`}>
                                        <svg className={BottomPlayerCSS.track__other_svg}>
                                            <LikeIcon className={BottomPlayerCSS[theme.color]}/>
                                        </svg>
                                    </div>
                                    <div className={`${BottomPlayerCSS.track__play_dislike} ${BottomPlayerCSS._btn__icon}`}>
                                        <svg className={BottomPlayerCSS.track__other_svg}>
                                            <DislikeIcon className={BottomPlayerCSS[theme.color]}/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${BottomPlayerCSS.bar__volume_block} ${BottomPlayerCSS.volume}`}>
                           <div className={BottomPlayerCSS.volume__content}>
                                <div className={BottomPlayerCSS.volume__image}>
                                    <svg className={BottomPlayerCSS.track__volume_svg}>
                                        <VolumeIcon className={BottomPlayerCSS[theme.color]}/>
                                    </svg>
                                </div>
                                <div className={`${BottomPlayerCSS.volume__progress} ${BottomPlayerCSS._btn}`}>
                                    <input className={`${BottomPlayerCSS.volume__progress_line} ${BottomPlayerCSS._btn}`} type="range" name="range" />
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) 

}