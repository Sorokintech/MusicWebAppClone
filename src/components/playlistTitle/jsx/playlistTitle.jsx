import Id from '../img/sprite.svg'
import PlaylistTitleCSS from '../css/playlistTitle.module.css'
export function PlaylistTitle () {
    return(
        <div className={`${PlaylistTitleCSS.content__title}  ${PlaylistTitleCSS.playlist__title}`}>
                            <div className={`${PlaylistTitleCSS.playlist__title_col} ${PlaylistTitleCSS.col01}`}>Трек</div>
                            <div className={`${PlaylistTitleCSS.playlist__title_col} ${PlaylistTitleCSS.col02}`}>ИСПОЛНИТЕЛЬ</div>
                            <div className={`${PlaylistTitleCSS.playlist__title_col} ${PlaylistTitleCSS.col03}`}>АЛЬБОМ</div>
                            <div className={`${PlaylistTitleCSS.playlist__title_col} ${PlaylistTitleCSS.col04}`}>
                                <svg className={PlaylistTitleCSS.playlist__title_svg} alt="time">
                                <use xlinkHref={`${Id}#icon-watch`} />
                                </svg>
                            </div>
                        </div>
    )
}