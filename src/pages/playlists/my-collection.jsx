import { PLAYLISTS } from '../../backend';
import { PlaylistList } from './playlist-list';
import Style from './style.module.css'

export const MyCollection = () => {
  return (
    <div>
    <h1 className={Style.center__playlist}>Ваши подборки</h1>
    <PlaylistList playlists={PLAYLISTS}/>
    </div>
    )
}

