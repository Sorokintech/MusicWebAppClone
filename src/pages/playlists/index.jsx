import { useParams } from 'react-router-dom';
import { PLAYLISTS } from '../../backend';

import Style from './style.module.css'

export const Playlists = () => {
    const params = useParams();

    const playlist = PLAYLISTS.find((playlist) => playlist.id === Number(params.id));
    return (
        <section>
        <h1 className={Style.center__playlist}>Страница подборок</h1>
        <p className={Style.center}>Текущий жанр: {playlist.topic}</p>
        console.log(playlist.id);
        console.log(playlist.topic);
        </section>
    );
};