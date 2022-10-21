import skeletonStyles from './bottomPlayer-skeleton.module.css'
import styles from '../bottomPlayer.module.css'
import {  PrevIcon,NextIcon,ShuffleIcon, RepeatIcon, PlayIcon, LikeIcon, DislikeIcon, VolumeIcon } from '../../icons.jsx'
import cn from 'classnames'

export function BottomPlayerSkeleton() {
    const bar = cn(
        styles.bar,
    );
    const playerProgress = cn(
        styles.playerProgress
    );
    const playerBlock = cn(
        styles.playerBlock
    );
    const player = cn(
        styles.player
    );
    const controls = cn(
        styles.controls
    );
    const btnPrev = cn(
        styles.btnPrev
    );

    const btnPlay = cn(
        styles.btnPlay
    );

    const btnNext = cn(
        styles.btnNext
    );
    const btnRepeat = cn(
        styles.btnRepeat,
        styles.btnIcon
    );
    const btnShuffle = cn(
        styles.btnShuffle,
        styles.btnIcon
    );
    const trackPlay = cn(
        styles.trackPlay
    );
    const playContain = cn(
        styles.playContain
    );

    const trackPlayImageSkeleton = cn(
        styles.trackPlayImage,
        skeletonStyles.skeletonNote
    );

    const playAuthorSkeleton = cn(
        styles.trackPlayAuthor,
        skeletonStyles.skeletonTitle
    );

    const authorLink = cn(
        styles.trackPlayAuthorLink
    );

    const playAlbumSkeleton = cn(
        styles.trackPlayAlbum,
        skeletonStyles.skeletonTitle
    );
    const albumLink = cn(
        styles.trackPlayAlbumLink
    );
    const playLikeDis = cn(
        styles.trackPlayLikeDis
    );
    const playLike = cn(
        styles.trackPlayLike,
        styles.btnIcon
    );
    const playDislike = cn(
        styles.trackPlayDislike,
        styles.btnIcon
    );
    const volumeBlock = cn (
        styles.volumeBlock
    );
    const volumeContent = cn(
        styles.volumeContent
    );
    const volumeImage = cn(
        styles.volumeImage
    );
    const volumeSvg = cn(
        styles.trackVolumeSvg
    );
    const volumeProgress = cn(
        styles.volumeProgress
    );
    const volumeProgressLine = cn(
        styles.volumeProgressLine
    )
    const trackPlaySvg = cn(
        skeletonStyles.trackPlaySvg
    );




    return(
        <div className={bar}>
        <div className={playerProgress}></div>
        <div className={playerBlock}>
            <div className={player}>
                <div className={controls}>
                    <div className={btnPrev}>
                            <svg className={trackPlaySvg}>
                                    <PrevIcon />
                            </svg>
                                </div>
                                <div className={btnPlay}>
                                <svg className={trackPlaySvg}>
                                    <PlayIcon class/>
                                </svg>
                                </div>
                                <div className={btnNext}>
                                <svg className={trackPlaySvg}>
                                        <NextIcon/>
                                    </svg> 
                                </div>
                                <div className={btnRepeat}>
                                <svg className={trackPlaySvg}>
                                        <RepeatIcon/>
                                    </svg>
                                </div>
                                <div className={btnShuffle}>
                                <svg className={trackPlaySvg}>
                                        <ShuffleIcon />
                                    </svg> 
                                </div>
                            </div>
                            
                            <div className={trackPlay}>
                                <div className={playContain}>
                                    <div className={trackPlayImageSkeleton}>
                                    <svg className={trackPlaySvg} alt="music">
                                        </svg>
                                    </div>
                                    <div className={playAuthorSkeleton}>
                                        <a className={authorLink} href="http://"></a>
                                    </div>
                                    <div className={playAlbumSkeleton}>
                                        <a className={albumLink}  href="http://"></a>
                                    </div>
                                </div>

                                <div className={playLikeDis}>
                                    <div className={playLike}>
                                    <svg className={trackPlaySvg}>
                                            <LikeIcon/>
                                        </svg>
                                    </div>
                                    <div className={playDislike}>
                                    <svg className={trackPlaySvg}>
                                            <DislikeIcon/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={volumeBlock}>
                           <div className={volumeContent}>
                                <div className={volumeImage}>
                                <svg className={volumeSvg}>
                                        <VolumeIcon/>
                                    </svg>
                                </div>
                                <div className={volumeProgress}>
                                    <input className={volumeProgressLine} type="range" name="range" />
                                </div>
                                
                           </div>
                        </div>
                    </div>
                </div>
    )
}