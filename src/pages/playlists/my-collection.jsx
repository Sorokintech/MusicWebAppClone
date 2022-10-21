import { PLAYLISTS } from '../../backend';
import { PlaylistList } from './playlist-list';
import styles from './style.module.css'
import cn from 'classnames'

export const MyCollection = () => {
  const playlists = cn(
    styles.playlists
);
  return (
    <div>
    <h1 className={playlists}>Ваши подборки</h1>
    <PlaylistList playlists={PLAYLISTS}/>
    </div>
    )
}

