import { PLAYLISTS } from '../../backend';
import { PlaylistList } from './playlist-list';
import styles from './style.module.css'
import cn from 'classnames'

export const MyCollection = () => {

  return (
    <div>
    <h1 className={cn(styles.playlists)}>Ваши подборки</h1>
    <PlaylistList playlists={PLAYLISTS}/>
    </div>
    )
}

