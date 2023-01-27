import styles from './bottomPlayer.module.css'
import { NoteIcon, PrevIcon,NextIcon,ShuffleIcon,LikeIcon,DislikeIcon, RepeatIcon, VolumeIcon, PauseIcon, PlayIcon } from '../icons.jsx'
import { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useThemeContext } from '../theme/theme';
import { playNextTrack, setCurrentTrack, play, playPrevTrack, shuffleTracks, sortTracks, repeatTrack } from '../../store/slices/player';
import { useGetAllTracksQuery, useAddFavoriteTracksMutation, useDeleteFavoriteTracksMutation} from '../../store/services';
// useGetFavoriteTracksQuery 
import cn from 'classnames';

export function BottomPlayer () {
    const { data, refetch} = useGetAllTracksQuery('');
    // const { refetch : refetchFavorite} = useGetFavoriteTracksQuery('');
    const [playing, setPlaying] = useState(false);
    const audioRef = useRef(null);
    const inputRef = useRef(null);
    const timer = useRef(null);
    const auth = useSelector(state => state.auth)

    useEffect(() => {
        refetch();
    }, [auth.token]);

    const trackId = useSelector((state) => state.player.id)
    const trackIds = useSelector((state) => state.player.ids);
    const [pointer, setPointer] = useState(0);
    useEffect(() => {
        setPointer(trackIds.indexOf(trackId));
    }, [trackId, trackIds])
    let isPlaying = useSelector((state) => state.player.isPlaying);
    if (isPlaying) {
        audioRef.autoplay = true;
      }
    const dispatch = useDispatch();
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
    

    const Prev = () => {
        console.log({pointer})
        const newPointer = pointer <= 0 ? trackIds.length - 1 : (pointer - 1) % (trackIds.length - 1);
        setPointer(newPointer);
        console.log('Prev button clicked');  
        let newSong = data.find(track => track.id === trackIds[newPointer]);
        dispatch(playPrevTrack(trackIds.indexOf(trackId)))
        dispatch(setCurrentTrack(newSong));
        dispatch(play(newSong));
    };
    // console.log({trackIds, trackId, pointer})
    const Next = () => {
        const newPointer = (pointer + 1) % trackIds.length;
        setPointer(newPointer);
        console.log('Next button clicked');  
        let newSong = data.find(track => track.id === trackIds[newPointer]);
        dispatch(playNextTrack(trackIds.indexOf(trackId)))
        dispatch(setCurrentTrack(newSong));
        dispatch(play(newSong));
        
    };
    const shuffle = () => {
        console.log('Tracks has been shuffled');
        dispatch(shuffleTracks());
    };
    const sort = () => {
        console.log('Tracks has been sorted');
        dispatch(sortTracks());
    }
    const isShuffle = useSelector((state) => state.player.isShuffle)
    const shuffleHandler = () => {
        isShuffle ? sort() : shuffle();
    }
    const ifRepeat = useSelector((state) => state.player.isRepeat)
    const onRepeat = () => {
        console.log('Track is now on repeat');
        audioRef.current.loop = true;
        dispatch(repeatTrack());
        console.log(audioRef);
    };
    const offRepeat = () => {
        console.log('Track is now not on repeat')
        dispatch(repeatTrack());
        audioRef.current.loop = false;
    }
    const repeatHandler = () => {
        ifRepeat ? offRepeat() : onRepeat();
    }


    const [addFavorite] = useAddFavoriteTracksMutation();
    const [deleteFavorite] = useDeleteFavoriteTracksMutation();
    const myUser = useSelector((state) => state.auth.id)
 // идея в том, чтобы достать список юзеров из обшего стейта, а не из стейта плеера. 
    // const stars = data;
    // console.log(stars);
    // const currentTrackStaredUsers = () => {return data.find(({track}) => track.id === trackId)};
    // console.log(currentTrackStaredUsers())
    let currentTrackStaredUsers = null;
    const dataCheck = () => {
        if(data) {
            currentTrackStaredUsers =  data.find(track => track.id === trackId);
        }
    }
    const isFavorite = (myUser) => {
        dataCheck();
        return currentTrackStaredUsers.stared_user.find(({id}) =>  id === (+myUser))
    };
    // const HandleFavoriteClick = (trackId) => () => {
    //     if (isFavorite()) {
    //         deleteFavorite(trackId);
    //         console.log('Track has been deleted from Favorite')
    //        } else {
    //         addFavorite(trackId);
    //         console.log('Track has been added to Favorite')
    //        }
    //        refetch();
    // };
    const likeClickHandler = (trackId) => {
            addFavorite(trackId);
            console.log('Track has been added to Favorite')
            refetch();
    
    };
    const dislikeClickHandler = (trackId) => {
            deleteFavorite(trackId);
            console.log('Track has been deleted from Favorite')
            refetch();
           
    };
    const likeHandler = (trackId) => () => {
        isFavorite(myUser);
        console.log(isFavorite())
        isFavorite ?  likeClickHandler(trackId) : dislikeClickHandler(trackId);
    }


    if (!currentSong.name && window.BeforeUnloadEvent) {return ''}
    return (
        <div>
             <audio controls autoPlay="0"  ref={audioRef} src={currentSong.track_file} className={cn(styles.fake)}>
            </audio>
        <div className={cn(styles.bar)}>
            <div className={cn(styles.content,styles.bar,styles[theme.name])}>
                    <div className={cn(styles.playerProgress)}>
                    <input ref={inputRef} className={cn(styles.barProgressLine)} type="range" name="range" max={inputRef.current?.max} defaultValue={inputRef.current?.value ?? 0}/>
                    </div>
                        <div className={cn(styles.playerBlock)}>
                            <div className={cn(styles.player)}>
                                <div className={cn(styles.controls)}>
                                    <div className={cn(styles.btnPrev)} onClick={Prev}>
                                        <svg className={cn(styles.trackPlaySvg)}>
                                            <PrevIcon className={cn(styles[theme.color])}/>
                                        </svg>
                                    </div>
                                <div className={cn(styles.btnPlay)} onClick={togglePlay}>
                                <svg className={cn(styles.trackPlaySvg)}>
                                    {playing?<PauseIcon className={cn(styles[theme.color])}/>:<PlayIcon/>}
                                </svg>
                                </div>
                                <div className={cn(styles.btnNext)} onClick={Next}>
                                    <svg className={cn(styles.trackPlaySvg)}>
                                        <NextIcon className={cn(styles[theme.color])}/>
                                    </svg>  
                                </div>
                                <div className={cn(styles.btnRepeat,styles.btnIcon)} onClick={repeatHandler}>
                                    <svg className={cn(styles.trackPlaySvg)}>
                                        <RepeatIcon className={cn(styles[theme.color])}/>
                                    </svg>
                                </div>
                                <div className={cn(styles.btnShuffle,styles.btnIcon)} onClick={shuffleHandler}>
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
                                    <div className={cn(styles.trackPlayLike,styles.btnIcon)} onClick={likeHandler(trackId)}>
                                        <svg className={cn(styles.trackPlaySvg)}>
                                            <LikeIcon className={cn(styles[theme.color])}/>
                                        </svg>
                                    </div>
                                    <div className={cn(styles.trackPlayDislike,styles.btnIcon)} onClick={likeHandler(trackId)}>
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

};