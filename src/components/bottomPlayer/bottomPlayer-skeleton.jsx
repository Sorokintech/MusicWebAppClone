import Id from './img/sprite.svg'

export function BottomPlayerSkeleton() {
    return(
        <div className="bar__content">
                    <div className="bar__player-progress"></div>
                    <div className="bar__player-block">
                        <div className="bar__player player">
                            <div className="player__controls">
                                <div className="player__btn-prev">
                                    <svg className="player__btn-prev-svg" alt="prev">
                                        <use xlinkHref={`${Id}#icon-prev`} />
                                    </svg>
                                </div>
                                <div className="player__btn-play _btn">
                                    <svg className="player__btn-play-svg" alt="play">
                                    <use xlinkHref={`${Id}#icon-play`} />
                                    </svg>
                                </div>
                                <div className="player__btn-next">
                                    <svg className="player__btn-next-svg" alt="next">
                                    <use xlinkHref={`${Id}#icon-next`} />
                                    </svg>
                                </div>
                                <div className="player__btn-repeat _btn-icon">
                                    <svg className="player__btn-repeat-svg" alt="repeat">
                                        <use xlinkHref={`${Id}#icon-repeat`} />
                                    </svg>
                                </div>
                                <div className="player__btn-shuffle _btn-icon">
                                    <svg className="player__btn-shuffle-svg" alt="shuffle">
                                    <use xlinkHref={`${Id}#icon-shuffle`} />
                                    </svg>
                                </div>
                            </div>
                            
                            <div className="player__track-play track-play">
                                <div className="track-play__contain">
                                    <div className="track-play__image skeleton-note">
                                        <svg className="track-play__svg" alt="music">
                                        </svg>
                                    </div>
                                    <div className="track-play__author skeleton-title">
                                        <a className="track-play__author-link" href="http://"></a>
                                    </div>
                                    <div className="track-play__album skeleton-title">
                                        <a className="track-play__album-link" href="http://"></a>
                                    </div>
                                </div>

                                <div className="track-play__like-dis">
                                    <div className="track-play__like _btn-icon">
                                        <svg className="track-play__like-svg" alt="like">
                                        <use xlinkHref={`${Id}#icon-like`} />
                                        </svg>
                                    </div>
                                    <div className="track-play__dislike _btn-icon">
                                        <svg className="track-play__dislike-svg" alt="dislike">
                                        <use xlinkHref={`${Id}#icon-dislike`} />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bar__volume-block volume">
                           <div className="volume__content">
                                <div className="volume__image">
                                    <svg className="volume__svg" alt="volume">
                                    <use xlinkHref={`${Id}#icon-volume`} />
                                    </svg>
                                </div>
                                <div className="volume__progress _btn">
                                    <input className="volume__progress-line _btn" type="range" name="range" />
                                </div>
                                
                           </div>
                        </div>
                    </div>
                </div>
    )
}