import { useParams } from 'react-router-dom';
import { PLAYLISTS } from '../../backend';
import styles from './style.module.css'
import cn from 'classnames'


export const Playlists = () => {
    const params = useParams();

    const playlist = PLAYLISTS.find((playlist) => playlist.id === Number(params.id));

    const center = cn(
        styles.center
    );
    const playlists = cn(
        styles.playlists
    );

    return (
        <section>
        <h1 className={playlists}>Страница подборок</h1>
        <p className={center}>Текущий жанр: {playlist.topic}</p>
        </section>
    );
};