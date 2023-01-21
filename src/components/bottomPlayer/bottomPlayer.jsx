import styles from './bottomPlayer.module.css'
import { NoteIcon, PrevIcon,NextIcon,ShuffleIcon,LikeIcon,DislikeIcon, RepeatIcon, VolumeIcon, PauseIcon, PlayIcon } from '../icons.jsx'
import { useRef, useState, useEffect } from 'react';
import { useSelector, 
    // useDispatch
} from 'react-redux';
import { useThemeContext } from '../theme/theme';
import { useGetAllTracksQuery, 
    // useAddFavoriteTracksMutation, 
    // useDeleteFavoriteTracksMutation,
} from '../../store/services';
// import { playNextTrack } from '../../store/slices/player';
// , playPrevTrack, shuffleTracks, sortTracks, repeatTrack
import cn from 'classnames';

export function BottomPlayer () {
    const { data } = useGetAllTracksQuery('');
    console.log(data);
    const [playing, setPlaying] = useState(false);
    const audioRef = useRef(null);
    const inputRef = useRef(null);
    const timer = useRef(null);
    let isPlaying = useSelector((state) => state.player.isPlaying);
    if (isPlaying) {
        audioRef.autoplay = true;
      };
    const trackId = useSelector((state) => state.player.id)
    // const dispatch = useDispatch();

    const handleStart = () => {
        timer.current = setInterval(playChange, 1000); 
        setPlaying(true);
        audioRef.current.play();
    };
  
    const handlePause = () => {
        clearInterval(timer.current)
        setPlaying(false);
        audioRef.current.pause();
    };
    const handleNext = (id) => {
        console.log(id);
    };

    const togglePlay = playing ? handlePause : handleStart;

    function playChange() {
        inputRef.current.max = audioRef.current.duration;
        inputRef.current.value = audioRef.current.currentTime;
    }
    const {theme} = useThemeContext();

    const currentSong = useSelector((state) => state.player.currentTrackLink);
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.src = currentSong.track_file;
            handleStart();
            isPlaying = true;
        }
    }, [currentSong, audioRef.current]);


    if (!currentSong.name && window.BeforeUnloadEvent) {return ''}
    return (
        <div>
             <audio controls ref={audioRef} src={currentSong.track_file} className={cn(styles.fake)}>
            </audio>
        <div className={cn(styles.bar)}>
            <div className={cn(styles.content,styles.bar,styles[theme.name])}>
                    <div className={cn(styles.playerProgress)}>
                    <input ref={inputRef} className={cn(styles.barProgressLine)} type="range" name="range" max={inputRef.current?.max} value={inputRef.current?.value ?? 0}/>
                    </div>
                        <div className={cn(styles.playerBlock)}>
                            <div className={cn(styles.player)}>
                                <div className={cn(styles.controls)}>
                                    <div className={cn(styles.btnPrev)}>
                                        <svg className={cn(styles.trackPlaySvg)}>
                                            <PrevIcon className={cn(styles[theme.color])}/>
                                        </svg>
                                    </div>
                                <div className={cn(styles.btnPlay)} >
                                <svg className={cn(styles.trackPlaySvg)} onClick={togglePlay}>
                                    {playing?<PauseIcon className={cn(styles[theme.color])}/>:<PlayIcon/>}
                                </svg>
                                </div>
                                <div className={cn(styles.btnNext)} onClick={handleNext(trackId )}>
                                    <svg className={cn(styles.trackPlaySvg)}>
                                        <NextIcon className={cn(styles[theme.color])}/>
                                    </svg>  
                                </div>
                                <div className={cn(styles.btnRepeat,styles.btnIcon)}>
                                    <svg className={cn(styles.trackPlaySvg)}>
                                        <RepeatIcon className={cn(styles[theme.color])}/>
                                    </svg>
                                </div>
                                <div className={cn(styles.btnShuffle,styles.btnIcon)} >
                                    <svg className={cn(styles.trackPlaySvg)}>
                                        <ShuffleIcon className={cn(styles[theme.color])}/>
                                    </svg>                              
                                </div>
                            </div>
                            <div className={cn(styles.trackPlay)}>
                                <div className={cn(styles.playContain)}>
                                    <div className={cn(styles.trackPlayImage)}>
                                        <svg className={cn(styles.trackNoteSvg)} alt="music">
                                        <NoteIcon className={cn(styles[theme.color])}/>
                                        </svg>
                                    </div>
                                    <div className={cn(styles.trackPlayAuthor)}>
                                        <a className={cn(styles.trackPlayAuthorLink)} href="http://">{currentSong.name}</a>
                                    </div>
                                    <div className={cn(styles.trackPlayAlbum)}>
                                        <a className={cn(styles.trackPlayAlbumLink)} href="http://">{currentSong.author}</a>
                                    </div>
                                </div>

                                <div className={cn(styles.trackPlayLikeDis)}>
                                    <div className={cn(styles.trackPlayLike,styles.btnIcon)}>
                                        <svg className={cn(styles.trackPlaySvg)}>
                                            <LikeIcon className={cn(styles[theme.color])}/>
                                        </svg>
                                    </div>
                                    <div className={cn(styles.trackPlayDislike,styles.btnIcon)}>
                                        <svg className={cn(styles.trackPlaySvg)}>
                                            <DislikeIcon className={cn(styles[theme.color])}/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cn(styles.volumeBlock)}>
                           <div className={cn(styles.volumeContent)}>
                                <div className={cn(styles.volumeImage)}>
                                    <svg className={cn(styles.trackVolumeSvg)}>
                                        <VolumeIcon className={cn(styles[theme.color])}/>
                                    </svg>
                                </div>
                                <div className={cn(styles.volumeProgress)}>
                                    <input className={cn(styles.volumeProgressLine)} type="range" name="range" />
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) 

}