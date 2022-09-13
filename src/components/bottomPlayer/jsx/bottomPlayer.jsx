import { BottomPlayerSkeleton } from '../jsx/bottomPlayer-skeleton'
import BottomPlayerCSS from '../css/bottomPlayer.module.css'
import Id from '../img/sprite.svg'

export function BottomPlayer({skeleton}) {
    if (skeleton) {return <BottomPlayerSkeleton/>}
    return(
        <div className={`${BottomPlayerCSS.bar__content} ${BottomPlayerCSS.bar}`}>
                    <div className={BottomPlayerCSS.bar__player_progress}></div>
                    <div className={BottomPlayerCSS.bar__player_block}>
                        <div className={`${BottomPlayerCSS.bar__player} ${BottomPlayerCSS.player}`}>
                            <div className={BottomPlayerCSS.player__controls}>
                                <div className={BottomPlayerCSS.player__btn_prev}>
                                    <svg className={BottomPlayerCSS.player__btn_prev_svg} alt="prev">
                                        <use xlinkHref={`${Id}#icon-prev`} />
                                    </svg>
                                </div>
                                <div className={`${BottomPlayerCSS.player__btn_play} ${BottomPlayerCSS._btn}`}>
                                    <svg className={BottomPlayerCSS.player__btn_play_svg} alt="play">
                                    <use xlinkHref={`${Id}#icon-play`} />
                                    </svg>
                                </div>
                                <div className={BottomPlayerCSS.player__btn_next}>
                                    <svg className={BottomPlayerCSS.player__btn_next_svg} alt="next">
                                    <use xlinkHref={`${Id}#icon-next`} />
                                    </svg>
                                </div>
                                <div className={`${BottomPlayerCSS.player__btn_repeat} ${BottomPlayerCSS._btn_icon}`}>
                                    <svg className={BottomPlayerCSS.player__btn_repeat_svg} alt="repeat">
                                        <use xlinkHref={`${Id}#icon-repeat`} />
                                    </svg>
                                </div>
                                <div className={`${BottomPlayerCSS.player__btn_shuffle} ${BottomPlayerCSS._btn_icon}`}>
                                    <svg className={BottomPlayerCSS.player__btn_shuffle_svg} alt="shuffle">
                                    <use xlinkHref={`${Id}#icon-shuffle`} />
                                    </svg>
                                </div>
                            </div>
                            
                            <div className={`${BottomPlayerCSS.player__track_play} ${BottomPlayerCSS.track_play}`}>
                                <div className={BottomPlayerCSS.track__play_contain}>
                                    <div className={BottomPlayerCSS.track__play_image}>
                                        <svg className={BottomPlayerCSS.track__play_svg} alt="music">
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
                                        <svg className={BottomPlayerCSS.track__play_like_svg} alt="like">
                                        <use xlinkHref={`${Id}#icon-like`} />
                                        </svg>
                                    </div>
                                    <div className={`${BottomPlayerCSS.track__play_dislike} ${BottomPlayerCSS._btn__icon}`}>
                                        <svg className={BottomPlayerCSS.track__play_dislike_svg} alt="dislike">
                                        <use xlinkHref={`${Id}#icon-dislike`} />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${BottomPlayerCSS.bar__volume_block} ${BottomPlayerCSS.volume}`}>
                           <div className={BottomPlayerCSS.volume__content}>
                                <div className={BottomPlayerCSS.volume__image}>
                                    <svg className={BottomPlayerCSS.volume__svg} alt="volume">
                                    <use xlinkHref={`${Id}#icon-volume`} />
                                    </svg>
                                </div>
                                <div className={`${BottomPlayerCSS.volume__progress} ${BottomPlayerCSS._btn}`}>
                                    <input className={`${BottomPlayerCSS.volume__progress_line} ${BottomPlayerCSS._btn}`} type="range" name="range" />
                                </div>
                                
                           </div>
                        </div>
                    </div>
                </div>
    ) 

}