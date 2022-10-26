import styles from '../trackList.module.css'
import skeletonStyles from './trackList-skeleton.module.css'
import cn from 'classnames'

export function TrackListSkeleton() {

    return(
        <div className={cn(styles.content)}>
                            <div className={cn(styles.item)}>
                                <div className={cn(styles.track)}>
                                    <div className={cn(styles.title)}>
                                        <div className={cn(skeletonStyles.skeletonNote,styles.titleImage)}>
                                        </div>
                                        <div className={cn(skeletonStyles.skeletonTitle,styles.titleText)}>
                                        </div>
                                    </div>
                                    <div className={cn(skeletonStyles.skeletonName,styles.author)}>
                                    </div>
                                    <div className={cn(skeletonStyles.skeletonAlbum,styles.album)}>
                                    </div>
                                </div>
                            </div>
                            <div className={cn(styles.item)}>
                                <div className={cn(styles.track)}>
                                    <div className={cn(styles.title)}>
                                        <div className={cn(skeletonStyles.skeletonNote,styles.titleImage)}>
                                        </div>
                                        <div className={cn(skeletonStyles.skeletonTitle,styles.titleText)}>
                                        </div>
                                    </div>
                                    <div className={cn(skeletonStyles.skeletonName,styles.author)}>
                                    </div>
                                    <div className={cn(skeletonStyles.skeletonAlbum,styles.album)}>
                                    </div>
                                </div>
                            </div>
                            <div className={cn(styles.item)}>
                                <div className={cn(styles.track)}>
                                    <div className={cn(styles.title)}>
                                        <div className={cn(skeletonStyles.skeletonNote,styles.titleImage)}>
                                        </div>
                                        <div className={cn(skeletonStyles.skeletonTitle,styles.titleText)}>
                                        </div>
                                    </div>
                                    <div className={cn(skeletonStyles.skeletonName,styles.author)}>
                                    </div>
                                    <div className={cn(skeletonStyles.skeletonAlbum,styles.album)}>
                                    </div>
                                </div>
                            </div>
                            <div className={cn(styles.item)}>
                                <div className={cn(styles.track)}>
                                    <div className={cn(styles.title)}>
                                        <div className={cn(skeletonStyles.skeletonNote,styles.titleImage)}>
                                        </div>
                                        <div className={cn(skeletonStyles.skeletonTitle,styles.titleText)}>
                                        </div>
                                    </div>
                                    <div className={cn(skeletonStyles.skeletonName,styles.author)}>
                                    </div>
                                    <div className={cn(skeletonStyles.skeletonAlbum,styles.album)}>
                                    </div>
                                </div>
                            </div>
                            <div className={cn(styles.item)}>
                                <div className={cn(styles.track)}>
                                    <div className={cn(styles.title)}>
                                        <div className={cn(skeletonStyles.skeletonNote,styles.titleImage)}>
                                        </div>
                                        <div className={cn(skeletonStyles.skeletonTitle,styles.titleText)}>
                                        </div>
                                    </div>
                                    <div className={cn(skeletonStyles.skeletonName,styles.author)}>
                                    </div>
                                    <div className={cn(skeletonStyles.skeletonAlbum,styles.album)}>
                                    </div>
                                </div>
                            </div>
                            <div className={cn(styles.item)}>
                                <div className={cn(styles.track)}>
                                    <div className={cn(styles.title)}>
                                        <div className={cn(skeletonStyles.skeletonNote,styles.titleImage)}>
                                        </div>
                                        <div className={cn(skeletonStyles.skeletonTitle,styles.titleText)}>
                                        </div>
                                    </div>
                                    <div className={cn(skeletonStyles.skeletonName,styles.author)}>
                                    </div>
                                    <div className={cn(skeletonStyles.skeletonAlbum,styles.album)}>
                                    </div>
                                </div>
                            </div>
                            <div className={cn(styles.item)}>
                                <div className={cn(styles.track)}>
                                    <div className={cn(styles.title)}>
                                        <div className={cn(skeletonStyles.skeletonNote,styles.titleImage)}>
                                        </div>
                                        <div className={cn(skeletonStyles.skeletonTitle,styles.titleText)}>
                                        </div>
                                    </div>
                                    <div className={cn(skeletonStyles.skeletonName,styles.author)}>
                                    </div>
                                    <div className={cn(skeletonStyles.skeletonAlbum,styles.album)}>
                                    </div>
                                </div>
                            </div>
                            <div className={cn(styles.item)}>
                                <div className={cn(styles.track)}>
                                    <div className={cn(styles.title)}>
                                        <div className={cn(skeletonStyles.skeletonNote,styles.titleImage)}>
                                        </div>
                                        <div className={cn(skeletonStyles.skeletonTitle,styles.titleText)}>
                                        </div>
                                    </div>
                                    <div className={cn(skeletonStyles.skeletonName,styles.author)}>
                                    </div>
                                    <div className={cn(skeletonStyles.skeletonAlbum,styles.album)}>
                                    </div>
                                </div>
                            </div>
                            <div className={cn(styles.item)}>
                                <div className={cn(styles.track)}>
                                    <div className={cn(styles.title)}>
                                        <div className={cn(skeletonStyles.skeletonNote,styles.titleImage)}>
                                        </div>
                                        <div className={cn(skeletonStyles.skeletonTitle,styles.titleText)}>
                                        </div>
                                    </div>
                                    <div className={cn(skeletonStyles.skeletonName,styles.author)}>
                                    </div>
                                    <div className={cn(skeletonStyles.skeletonAlbum,styles.album)}>
                                    </div>
                                </div>
                            </div>
                            <div className={cn(styles.item)}>
                                <div className={cn(styles.track)}>
                                    <div className={cn(styles.title)}>
                                        <div className={cn(skeletonStyles.skeletonNote,styles.titleImage)}>
                                        </div>
                                        <div className={cn(skeletonStyles.skeletonTitle,styles.titleText)}>
                                        </div>
                                    </div>
                                    <div className={cn(skeletonStyles.skeletonName,styles.author)}>
                                    </div>
                                    <div className={cn(skeletonStyles.skeletonAlbum,styles.album)}>
                                    </div>
                                </div>
                            </div>
                            </div>
    )
}