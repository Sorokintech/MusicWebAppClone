import Id from '../img/sprite.svg'
import BottomPlayerSkeletonStyles from '../css/bottomPlayer-skeleton.module.css'
import BottomPlayerStyles from '../css/bottomPlayer.module.css'

export function BottomPlayerSkeleton() {
    return(
        <div className={`${BottomPlayerStyles.bar__content} ${BottomPlayerStyles.bar}`}>
        <div className={BottomPlayerStyles.bar__player_progress}></div>
        <div className={BottomPlayerStyles.bar__player_block}>
            <div className={`${BottomPlayerStyles.bar__player} ${BottomPlayerStyles.player}`}>
                <div className={BottomPlayerStyles.player__controls}>
                    <div className={BottomPlayerStyles.player__btn_prev}>
                        <svg className={BottomPlayerStyles.player__btn_prev_svg} alt="prev">
                                        <use xlinkHref={`${Id}#icon-prev`} />
                                    </svg>
                                </div>
                                <div className={`${BottomPlayerStyles.player__btn_play} ${BottomPlayerStyles._btn}`}>
                                    <svg className={BottomPlayerStyles.player__btn_play_svg} alt="play">
                                    <use xlinkHref={`${Id}#icon-play`} />
                                    </svg>
                                </div>
                                <div className={BottomPlayerStyles.player__btn_next}>
                                    <svg className={BottomPlayerStyles.player__btn_next_svg} alt="next">
                                    <use xlinkHref={`${Id}#icon-next`} />
                                    </svg>
                                </div>
                                <div className={`${BottomPlayerStyles.player__btn_repeat} ${BottomPlayerStyles._btn_icon}`}>
                                    <svg className={BottomPlayerStyles.player__btn_repeat_svg} alt="repeat">
                                        <use xlinkHref={`${Id}#icon-repeat`} />
                                    </svg>
                                </div>
                                <div className={`${BottomPlayerStyles.player__btn_shuffle} ${BottomPlayerStyles._btn_icon}`}>
                                    <svg className={BottomPlayerStyles.player__btn_shuffle_svg} alt="shuffle">
                                    <use xlinkHref={`${Id}#icon-shuffle`} />
                                    </svg>
                                </div>
                            </div>
                            
                            <div className={`${BottomPlayerStyles.player__track_play} ${BottomPlayerStyles.track_play}`}>
                                <div className={BottomPlayerStyles.track__play_contain}>
                                    <div className={`${BottomPlayerStyles.track__play_image} ${BottomPlayerSkeletonStyles.skeleton__note}`}>
                                    <svg className={BottomPlayerStyles.track__play_svg} alt="music">
                                        </svg>
                                    </div>
                                    <div className={`${BottomPlayerStyles.track__play_author} ${BottomPlayerSkeletonStyles.skeleton__title}`}>
                                        <a className={BottomPlayerStyles.track__play_author_link} href="http://"></a>
                                    </div>
                                    <div className={`${BottomPlayerStyles.track__play_album} ${BottomPlayerSkeletonStyles.skeleton__title}`}>
                                        <a className={BottomPlayerStyles.track__play_album_link}  href="http://"></a>
                                    </div>
                                </div>

                                <div className={BottomPlayerStyles.track__play_like_dis}>
                                    <div className={`${BottomPlayerStyles.track__play_like} ${BottomPlayerStyles._btn__icon}`}>
                                        <svg className={BottomPlayerStyles.track__play_like_svg} alt="like">
                                        <use xlinkHref={`${Id}#icon-like`} />
                                        </svg>
                                    </div>
                                    <div className={`${BottomPlayerStyles.track__play_dislike} ${BottomPlayerStyles._btn__icon}`}>
                                        <svg className={BottomPlayerStyles.track__play_dislike_svg} alt="dislike">
                                        <use xlinkHref={`${Id}#icon-dislike`} />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${BottomPlayerStyles.bar__volume_block} ${BottomPlayerStyles.volume}`}>
                           <div className={BottomPlayerStyles.volume__content}>
                                <div className={BottomPlayerStyles.volume__image}>
                                    <svg className={BottomPlayerStyles.volume__svg} alt="volume">
                                    <use xlinkHref={`${Id}#icon-volume`} />
                                    </svg>
                                </div>
                                <div className={`${BottomPlayerStyles.volume__progress} ${BottomPlayerStyles._btn}`}>
                                    <input className={`${BottomPlayerStyles.volume__progress_line} ${BottomPlayerStyles._btn}`} type="range" name="range" />
                                </div>
                                
                           </div>
                        </div>
                    </div>
                </div>
    )
}