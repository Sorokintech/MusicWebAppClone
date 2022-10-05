import { WatchIcon } from '../../icons.jsx'
import PlaylistTitleStyles from '../css/playlistTitle.module.css'
import { useThemeContext } from '../../theme/theme';
export function PlaylistTitle () {
    const {theme} = useThemeContext();
    return(
        <div className={`${PlaylistTitleStyles.content__title}  ${PlaylistTitleStyles.playlist__title} ${PlaylistTitleStyles[theme.name]}`}>
                            <div className={`${PlaylistTitleStyles.playlist__title_col} ${PlaylistTitleStyles.col01}`}>Трек</div>
                            <div className={`${PlaylistTitleStyles.playlist__title_col} ${PlaylistTitleStyles.col02}`}>ИСПОЛНИТЕЛЬ</div>
                            <div className={`${PlaylistTitleStyles.playlist__title_col} ${PlaylistTitleStyles.col03}`}>АЛЬБОМ</div>
                            <div className={`${PlaylistTitleStyles.playlist__title_col} ${PlaylistTitleStyles.col04}`}>
                                <svg className={PlaylistTitleStyles.playlist__title_svg} alt="time">
                                <WatchIcon className={PlaylistTitleStyles[theme.color]}/>
                                </svg>
                            </div>
                        </div>
    )
}