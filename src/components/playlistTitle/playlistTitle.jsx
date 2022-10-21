import { WatchIcon } from '../icons.jsx'
import styles from './playlistTitle.module.css'
import { useThemeContext } from '../theme/theme';
import cn from'classnames'

export function PlaylistTitle () {
    const {theme} = useThemeContext();

    const content = cn(
        styles.content,
        styles.playlist,
        styles[theme.name]
    );
    const titleSvg = cn(
        styles.titleSvg
    );
    const track = cn(
        styles.col01,
    );
    const author = cn(
        styles.col02
    );
    const album = cn(
        styles.col03
    );
    const column = cn(
        styles.col04
    )
    const themeColor = cn(
        styles[theme.color]
    )

    return(
        <div className={content}>
                            <div className={track}>Трек</div>
                            <div className={author}>ИСПОЛНИТЕЛЬ</div>
                            <div className={album}>АЛЬБОМ</div>
                            <div className={column}>
                                <svg className={titleSvg} alt="time">
                                <WatchIcon className={themeColor}/>
                                </svg>
                            </div>
                        </div>
    )
}