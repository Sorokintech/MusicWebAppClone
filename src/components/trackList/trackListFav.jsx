import { TrackListSkeleton } from './skeleton/trackList-skeleton'
import { NoteIcon, DislikeIcon } from '../icons.jsx'
import styles from './trackList.module.css'
import { useThemeContext } from '../theme/theme';
import { useGetFavoriteTracksQuery, useDeleteFavoriteTracksMutation} from '../../store/services';
// import { checkFavoriteTrack } from '../../utils/checkFavoriteTrack';
import { getAuthors, getGenres} from '../../store/slices/filter'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearTracksId, setTracksId, setCurrentTrack } from '../../store/slices/player';
import cn from 'classnames';

export function TrackListFav({loading}) {
    const {theme} = useThemeContext();
    const dispatch = useDispatch();
    const { data, isLoading, isSuccess, refetch } = useGetFavoriteTracksQuery('');
    // const myUser = useSelector((state) => state.auth.id)
    const auth = useSelector(state => state.auth)
    const [deleteFavorite, {isLoading: deleteLoading}] = useDeleteFavoriteTracksMutation();
    
    useEffect(() => {
        refetch();
    }, [auth.token]);

    useEffect(() => {
        dispatch(clearTracksId());
        
        if (isSuccess) {
          data?.map((track) => dispatch(setTracksId(track.id)));
          data?.map((track) => dispatch(getGenres(track.genre)));
          data?.map((track) => dispatch(getAuthors(track.author)));
        }
      }, [data]);
    
    const formatDuration = (durationInSeconds) => {
        const minutes = (durationInSeconds / 60).toFixed(0);
        durationInSeconds = durationInSeconds % 60
        const seconds = durationInSeconds.toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
      };
      const toggleSongHandler = (source) => {
            return () => {
                dispatch(setCurrentTrack(source));
            }
      }

      const HandleFavoriteClick = (id) => () => {
        if(deleteLoading) {
            return
        }
        const idArray = [];
        data.forEach(({id}) => idArray.push(id))
        if (idArray.includes(id)) {
            idArray.pop(id);
            deleteFavorite(id);
            refetch()
           }
    };


    if(loading || isLoading) {return <TrackListSkeleton/>}
    return(
        <div className={cn(styles.content,styles[theme.name])}>


        {data?.map(
                    ({
                    id,
                    name,
                    author,
                    album,
                    track_file,
                    duration_in_seconds,
                    release_date
                    }) => (
                        <div key={id} className={cn(styles.item)}>
                                <div className={cn(styles.track)}>
                                    <div className={cn(styles.title)}>
                                        <div className={cn(styles.titleImage)} onClick={toggleSongHandler({ track_file, name, author, duration_in_seconds, release_date })}>
                                            <svg className={cn(styles.titleSvg)} alt="music">
                                            <NoteIcon className={cn(styles[theme.color])}/>
                                            </svg>
                                        </div>
                                        <div className={cn(styles.titleText)}>
                                            <a className={cn(styles.titleLink)} onClick={toggleSongHandler({ track_file, name, author, duration_in_seconds, release_date })}>{name} 
                                                <span className={cn(styles.titleSpan)}></span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className={cn(styles.author)}>
                                        <a className={cn(styles.authorLink)} onClick={toggleSongHandler({ track_file, name, author, duration_in_seconds, release_date })}>{author}</a>
                                    </div>
                                    <div className={cn(styles.album)}>
                                        <a className={cn(styles.albumLink)} onClick={toggleSongHandler({ track_file, name, author, duration_in_seconds, release_date })}>{album}</a>
                                    </div>
                                    <div className={cn(styles.time)} onClick={HandleFavoriteClick( id)}>
                                        <svg className={cn(styles.timeSvg)} alt="time">
                                        <DislikeIcon  className={cn(styles[theme.color])}/>
                                        </svg>
                                        <span className={cn(styles.timeText)}>{formatDuration(duration_in_seconds)}</span>
                                    </div>
                                </div>
                            </div>
                    )
                )}
                        

                            </div>
    )
}