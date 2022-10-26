import skeletonStyles from './bottomPlayer-skeleton.module.css'
import styles from '../bottomPlayer.module.css'
import {  PrevIcon,NextIcon,ShuffleIcon, RepeatIcon, PlayIcon, LikeIcon, DislikeIcon, VolumeIcon } from '../../icons.jsx'
import cn from 'classnames'

export function BottomPlayerSkeleton() {
    // const bar = cn(
    //     styles.bar,
    // );
    // const playerProgress = cn(
    //     styles.playerProgress
    // );
    // const playerBlock = cn(
    //     styles.playerBlock
    // );
    // const player = cn(
    //     styles.player
    // );
    // const controls = cn(
    //     styles.controls
    // );
    // const btnPrev = cn(
    //     styles.btnPrev
    // );

    // const btnPlay = cn(
    //     styles.btnPlay
    // );

    // const btnNext = cn(
    //     styles.btnNext
    // );
    // const btnRepeat = cn(
    //     styles.btnRepeat,
    //     styles.btnIcon
    // );
    // const btnShuffle = cn(
    //     styles.btnShuffle,
    //     styles.btnIcon
    // );
    // const trackPlay = cn(
    //     styles.trackPlay
    // );
    // const playContain = cn(
    //     styles.playContain
    // );

    // const trackPlayImageSkeleton = cn(
    //     styles.trackPlayImage,
    //     skeletonStyles.skeletonNote
    // );

    // const playAuthorSkeleton = cn(
    //     styles.trackPlayAuthor,
    //     skeletonStyles.skeletonTitle
    // );

    // const authorLink = cn(
    //     styles.trackPlayAuthorLink
    // );

    // const playAlbumSkeleton = cn(
    //     styles.trackPlayAlbum,
    //     skeletonStyles.skeletonTitle
    // );
    // const albumLink = cn(
    //     styles.trackPlayAlbumLink
    // );
    // const playLikeDis = cn(
    //     styles.trackPlayLikeDis
    // );
    // const playLike = cn(
    //     styles.trackPlayLike,
    //     styles.btnIcon
    // );
    // const playDislike = cn(
    //     styles.trackPlayDislike,
    //     styles.btnIcon
    // );
    // const volumeBlock = cn (
    //     styles.volumeBlock
    // );
    // const volumeContent = cn(
    //     styles.volumeContent
    // );
    // const volumeImage = cn(
    //     styles.volumeImage
    // );
    // const volumeSvg = cn(
    //     styles.trackVolumeSvg
    // );
    // const volumeProgress = cn(
    //     styles.volumeProgress
    // );
    // const volumeProgressLine = cn(
    //     styles.volumeProgressLine
    // )
    // const trackPlaySvg = cn(
    //     skeletonStyles.trackPlaySvg
    // );




    return(
        <div className={cn(styles.bar)}>
        <div className={cn(styles.playerProgress)}></div>
        <div className={cn(styles.playerBlock)}>
                            <div className={cn(styles.player)}>
                                <div className={cn(styles.controls)}>
                                    <div className={cn(styles.btnPrev)}>
                                        <svg className={cn(skeletonStyles.trackPlaySvg)}>
                                            <PrevIcon />
                                        </svg>
                                </div>
                                <div className={cn(styles.btnPlay)}>
                                <svg className={cn(skeletonStyles.trackPlaySvg)}>
                                    <PlayIcon class/>
                                </svg>
                                </div>
                                <div className={cn(styles.btnNext)}>
                                <svg className={cn(skeletonStyles.trackPlaySvg)}>
                                    <NextIcon/>
                                </svg> 
                                </div>
                                <div className={cn(styles.btnRepeat,styles.btnIcon)}>
                                <svg className={cn(styles.trackPlaySvg)}>
                                    <RepeatIcon/>
                                </svg>
                                </div>
                                <div className={cn(styles.btnShuffle,styles.btnIcon)} >
                                <svg className={cn(styles.trackPlaySvg)}>
                                    <ShuffleIcon />
                                </svg> 
                                </div>
                            </div>
                            
                            <div className={cn(styles.trackPlay)}>
                                <div className={cn(styles.playContain)}>
                                    <div className={cn(styles.trackPlayImage,skeletonStyles.skeletonNote)}>
                                    <svg className={cn(skeletonStyles.trackPlaySvg)} alt="music">
                                        </svg>
                                    </div>
                                    <div className={cn(styles.trackPlayAuthor,skeletonStyles.skeletonTitle)}>
                                        <a className={cn(styles.trackPlayAuthorLink)} href="http://"></a>
                                    </div>
                                    <div className={cn(styles.trackPlayAlbum,skeletonStyles.skeletonTitle)}>
                                        <a className={cn(styles.trackPlayAlbumLink)}  href="http://"></a>
                                    </div>
                                </div>

                                <div className={cn(styles.trackPlayLikeDis)}>
                                    <div className={cn(styles.trackPlayLike,styles.btnIcon)}>
                                    <svg className={cn(skeletonStyles.trackPlaySvg)}>
                                            <LikeIcon/>
                                        </svg>
                                    </div>
                                    <div className={cn(styles.trackPlayDislike,styles.btnIcon)}>
                                    <svg className={cn(styles.trackPlaySvg)}>
                                            <DislikeIcon/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cn(styles.volumeBlock)}>
                           <div className={cn(styles.volumeContent)}>
                                <div className={cn(styles.volumeImage)}>
                                    <svg className={cn(skeletonStyles.trackPlaySvg)}>
                                        <VolumeIcon/>
                                    </svg>
                                </div>
                                <div className={cn(styles.volumeProgress)}>
                                    <input className={cn(styles.volumeProgressLine)} type="range" name="range" />
                                </div>
                                
                           </div>
                        </div>
                    </div>
                </div>
    )
}