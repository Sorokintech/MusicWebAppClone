import { NavLink } from 'react-router-dom';
import styles from './style.module.css'
import cn from 'classnames'

export const PlaylistList = ({playlists}) => {
    
    const item = cn(
        styles.item
    );

  return (<ul>
        {playlists.map((playlist) => (
            <li key={playlist.id}>
                <NavLink className={item} to={`playlists/${playlist.id}`}>
                    {playlist.topic} {playlist.year}
                </NavLink>
            </li>
        ))}
    </ul>
      
    )
}