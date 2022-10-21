import styles from '../trackList.module.css'
import skeletonStyles from './trackList-skeleton.module.css'
import cn from 'classnames'

export function TrackListSkeleton() {

    const content = cn(
        styles.content,
    );
    const item = cn(
        styles.item
    );
    const track = cn(
        styles.track
    );
    const title = cn(
        styles.title
    );

    const skeletonNote= cn(
        skeletonStyles.skeletonNote,
        styles.titleImage
    );
    const skeletonTitle= cn(
        skeletonStyles.skeletonTitle,
        styles.titleText
    );
    const skeletonName= cn(
        skeletonStyles.skeletonName,
        styles.author
    );
    const skeletonAlbum= cn(
        skeletonStyles.skeletonAlbum,
        styles.album
    );

    return(
        <div className={content}>
                            <div className={item}>
                                <div className={track}>
                                    <div className={title}>
                                        <div className={skeletonNote}>
                                        </div>
                                        <div className={skeletonTitle}>
                                        </div>
                                    </div>
                                    <div className={skeletonName}>
                                    </div>
                                    <div className={skeletonAlbum}>
                                    </div>
                                </div>
                            </div>
                            <div className={item}>
                                <div className={track}>
                                    <div className={title}>
                                        <div className={skeletonNote}>
                                        </div>
                                        <div className={skeletonTitle}>
                                        </div>
                                    </div>
                                    <div className={skeletonName}>
                                    </div>
                                    <div className={skeletonAlbum}>
                                    </div>
                                </div>
                            </div>
                            <div className={item}>
                                <div className={track}>
                                    <div className={title}>
                                        <div className={skeletonNote}>
                                        </div>
                                        <div className={skeletonTitle}>
                                        </div>
                                    </div>
                                    <div className={skeletonName}>
                                    </div>
                                    <div className={skeletonAlbum}>
                                    </div>
                                </div>
                            </div>
                            <div className={item}>
                                <div className={track}>
                                    <div className={title}>
                                        <div className={skeletonNote}>
                                        </div>
                                        <div className={skeletonTitle}>
                                        </div>
                                    </div>
                                    <div className={skeletonName}>
                                    </div>
                                    <div className={skeletonAlbum}>
                                    </div>
                                </div>
                            </div>
                            <div className={item}>
                                <div className={track}>
                                    <div className={title}>
                                        <div className={skeletonNote}>
                                        </div>
                                        <div className={skeletonTitle}>
                                        </div>
                                    </div>
                                    <div className={skeletonName}>
                                    </div>
                                    <div className={skeletonAlbum}>
                                    </div>
                                </div>
                            </div>
                            <div className={item}>
                                <div className={track}>
                                    <div className={title}>
                                        <div className={skeletonNote}>
                                        </div>
                                        <div className={skeletonTitle}>
                                        </div>
                                    </div>
                                    <div className={skeletonName}>
                                    </div>
                                    <div className={skeletonAlbum}>
                                    </div>
                                </div>
                            </div>
                            <div className={item}>
                                <div className={track}>
                                    <div className={title}>
                                        <div className={skeletonNote}>
                                        </div>
                                        <div className={skeletonTitle}>
                                        </div>
                                    </div>
                                    <div className={skeletonName}>
                                    </div>
                                    <div className={skeletonAlbum}>
                                    </div>
                                </div>
                            </div>
                            <div className={item}>
                                <div className={track}>
                                    <div className={title}>
                                        <div className={skeletonNote}>
                                        </div>
                                        <div className={skeletonTitle}>
                                        </div>
                                    </div>
                                    <div className={skeletonName}>
                                    </div>
                                    <div className={skeletonAlbum}>
                                    </div>
                                </div>
                            </div>
                            <div className={item}>
                                <div className={track}>
                                    <div className={title}>
                                        <div className={skeletonNote}>
                                        </div>
                                        <div className={skeletonTitle}>
                                        </div>
                                    </div>
                                    <div className={skeletonName}>
                                    </div>
                                    <div className={skeletonAlbum}>
                                    </div>
                                </div>
                            </div>
                            <div className={item}>
                                <div className={track}>
                                    <div className={title}>
                                        <div className={skeletonNote}>
                                        </div>
                                        <div className={skeletonTitle}>
                                        </div>
                                    </div>
                                    <div className={skeletonName}>
                                    </div>
                                    <div className={skeletonAlbum}>
                                    </div>
                                </div>
                            </div>
                            </div>
    )
}