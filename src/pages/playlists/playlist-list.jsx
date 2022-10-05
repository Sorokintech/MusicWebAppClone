import { NavLink } from 'react-router-dom';
import Style from './style.module.css'

export const PlaylistList = ({playlists}) => {
  return (<ul>
        {playlists.map((playlist) => (
            <li key={playlist.id}>
                <NavLink className={Style.playlist__item} to={`playlists/${playlist.id}`}>
                    {playlist.topic} {playlist.year}
                </NavLink>
            </li>
        ))}
    </ul>
      
    )
}