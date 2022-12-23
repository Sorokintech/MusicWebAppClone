import { TrackListSkeleton } from './skeleton/trackList-skeleton'
import { NoteIcon, LikeIcon } from '../icons.jsx'
import styles from './trackList.module.css'
import { useThemeContext } from '../theme/theme';
import { useGetAllTracksQuery } from '../../store/services';
// import { checkFavoriteTrack } from '../../utils/checkFavoriteTrack';
import { filterByYear } from '../../utils/filterByYear';
import { getAuthors, getGenres} from '../../store/slices/filter'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearTracksId, setTracksId, setCurrentTrack } from '../../store/slices/player';
import cn from 'classnames'

export function TrackList({loading}) {
    const {theme} = useThemeContext();
    const dispatch = useDispatch();
    const { data, isLoading, isSuccess } = useGetAllTracksQuery('');

    // const isPlaying = useSelector((state) => state.player.isPlaying);
    
    // const trackId = useSelector((state) => state.player.id);
    // const isShow = useSelector((state) => state.player.showPlayer);

    const trackTitle = useSelector((state) => state.search.searchValue);
    const filterValue = useSelector((state) => state.filter.filterYearValue);
    const genresValue = useSelector((state) => state.filter.filterGenresValue);
    const authorsValue = useSelector((state) => state.filter.filterAuthorsValue);

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



    if(loading || isLoading) {return <TrackListSkeleton/>}
    return(
        <div className={cn(styles.content,styles[theme.name])}>


        {data
                ?.filter(({ name }) =>
                    name.toLowerCase().includes(trackTitle)
                )
                .filter(({ genre }) => {
                    return genresValue.length ? genresValue.includes(genre) : genre;
                })
                .filter(({ author }) => {
                    return authorsValue.length ? authorsValue.includes(author) : author;
                })
                .sort((a, b) =>
                    filterByYear(a, b, filterValue)
                )
                .map(
                    ({
                    id,
                    name,
                    author,
                    album,
                    track_file,
                    duration_in_seconds,
                    release_date
                    // stared_user
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
                                            <a className={cn(styles.titleLink)} href={track_file}>{name} 
                                                <span className={cn(styles.titleSpan)}></span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className={cn(styles.author)}>
                                        <a className={cn(styles.authorLink)} href={track_file}>{author}</a>
                                    </div>
                                    <div className={cn(styles.album)}>
                                        <a className={cn(styles.albumLink)} href={track_file}>{album}</a>
                                    </div>
                                    <div className={cn(styles.time)}>
                                        <svg className={cn(styles.timeSvg)} alt="time">
                                            <LikeIcon className={cn(styles[theme.color])}/>
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