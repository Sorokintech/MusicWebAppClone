import { BottomPlayerSkeleton } from '../jsx/bottomPlayer-skeleton'
import BottomPlayerStyles from '../css/bottomPlayer.module.css'
// import Id from '../img/sprite.svg'
import { NoteIcon, PrevIcon,NextIcon,ShuffleIcon,LikeIcon,DislikeIcon, RepeatIcon, VolumeIcon, PauseIcon, PlayIcon } from '../../icons.jsx'
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
             <audio controls ref={audioRef} className={BottomPlayerStyles.fake__player}>
                <source src={mainSong} type="audio/mpeg" />
            </audio>
        <div className={BottomPlayerStyles.bar}>
            <div className={`${BottomPlayerStyles.bar__content} ${BottomPlayerStyles.bar} ${BottomPlayerStyles[theme.name]}`}>
                    <div className={BottomPlayerStyles.bar__player_progress}>
                    <input ref={inputRef} className={`${BottomPlayerStyles.bar__progress_line} ${BottomPlayerStyles._btn}`} type="range" name="range" max={inputRef.current?.max} value={inputRef.current?.value ?? 0}/>
                    </div>
                        <div className={BottomPlayerStyles.bar__player_block}>
                            <div className={`${BottomPlayerStyles.bar__player} ${BottomPlayerStyles.player}`}>
                                <div className={BottomPlayerStyles.player__controls}>
                                    <div className={BottomPlayerStyles.player__btn_prev}>
                                        <svg className={BottomPlayerStyles.track__other_svg}>
                                            <PrevIcon className={BottomPlayerStyles[theme.color]}/>
                                        </svg>
                                    </div>
                                <div className={`${BottomPlayerStyles.player__btn_play} ${BottomPlayerStyles._btn}`} onClick={togglePlay}>
                                <svg className={BottomPlayerStyles.track__play_svg}>
                                    {playing?<PauseIcon className={BottomPlayerStyles[theme.color]}/>:<PlayIcon/>}
                                </svg>
                                </div>
                                <div className={BottomPlayerStyles.player__btn_next}>
                                    <svg className={BottomPlayerStyles.track__other_svg}>
                                        <NextIcon className={BottomPlayerStyles[theme.color]}/>
                                    </svg>  
                                </div>
                                <div className={`${BottomPlayerStyles.player__btn_repeat} ${BottomPlayerStyles._btn_icon}`}>
                                    <svg className={BottomPlayerStyles.track__other_svg}>
                                        <RepeatIcon className={BottomPlayerStyles[theme.color]}/>
                                    </svg>
                                </div>
                                <div className={`${BottomPlayerStyles.player__btn_shuffle} ${BottomPlayerStyles._btn_icon}`} >
                                    <svg className={BottomPlayerStyles.track__other_svg}>
                                        <ShuffleIcon className={BottomPlayerStyles[theme.color]}/>
                                    </svg>                              
                                </div>
                            </div>
                            <div className={`${BottomPlayerStyles.player__track_play} ${BottomPlayerStyles.track_play}`}>
                                <div className={BottomPlayerStyles.track__play_contain}>
                                    <div className={BottomPlayerStyles.track__play_image}>
                                        <svg className={BottomPlayerStyles.track__note_svg} alt="music">
                                        <NoteIcon className={BottomPlayerStyles[theme.color]}/>
                                        </svg>
                                    </div>
                                    <div className={BottomPlayerStyles.track__play_author}>
                                        <a className={BottomPlayerStyles.track__play_author_link} href="http://">Ты та...</a>
                                    </div>
                                    <div className={BottomPlayerStyles.track__play_album}>
                                        <a className={BottomPlayerStyles.track__play_album_link} href="http://">Баста</a>
                                    </div>
                                </div>

                                <div className={BottomPlayerStyles.track__play_like_dis}>
                                    <div className={`${BottomPlayerStyles.track__play_like} ${BottomPlayerStyles._btn__icon}`}>
                                        <svg className={BottomPlayerStyles.track__other_svg}>
                                            <LikeIcon className={BottomPlayerStyles[theme.color]}/>
                                        </svg>
                                    </div>
                                    <div className={`${BottomPlayerStyles.track__play_dislike} ${BottomPlayerStyles._btn__icon}`}>
                                        <svg className={BottomPlayerStyles.track__other_svg}>
                                            <DislikeIcon className={BottomPlayerStyles[theme.color]}/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${BottomPlayerStyles.bar__volume_block} ${BottomPlayerStyles.volume}`}>
                           <div className={BottomPlayerStyles.volume__content}>
                                <div className={BottomPlayerStyles.volume__image}>
                                    <svg className={BottomPlayerStyles.track__volume_svg}>
                                        <VolumeIcon className={BottomPlayerStyles[theme.color]}/>
                                    </svg>
                                </div>
                                <div className={`${BottomPlayerStyles.volume__progress} ${BottomPlayerStyles._btn}`}>
                                    <input className={`${BottomPlayerStyles.volume__progress_line} ${BottomPlayerStyles._btn}`} type="range" name="range" />
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) 

}