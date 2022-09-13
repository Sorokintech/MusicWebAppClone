import TrackNavCSS from '../css/trackNav.module.css'
import { useState } from 'react';

const initialState = {author: false, year: false, genre: false}
export function TrackNavBar () {
    const [visible, setVisible] = useState(initialState);

    const toggleVisibility = (key) => () => setVisible({...initialState, [key]: !visible[key]});
   
    return (
        <div className={`${TrackNavCSS.centerblock__filter} ${TrackNavCSS.filter}`}>
        <div className={TrackNavCSS.filter__title}>Искать по:</div>
        <div>
        <div className={`${TrackNavCSS.filter__button} ${TrackNavCSS.button__author} ${TrackNavCSS._btn__text} ${visible.author ? 'is-active': ''}`} onClick={toggleVisibility('author')}>исполнителю</div>
        {visible.author && (
            <div className ={`${TrackNavCSS.author__list} ${TrackNavCSS.button__author}`}>
                <ul className={TrackNavCSS.author__list_actual}>
                    <li className ={`${TrackNavCSS.button__author} ${TrackNavCSS._btn__text} ${TrackNavCSS.author__list_item}`}>Michael Jackson</li>
                    <li className ={`${TrackNavCSS.button__author} ${TrackNavCSS._btn__text} ${TrackNavCSS.author__list_item}`}>Calvin Harris</li>
                    <li className ={`${TrackNavCSS.button__author} ${TrackNavCSS._btn__text} ${TrackNavCSS.author__list_item}`}>Frank Sinatra</li>
                    <li className ={`${TrackNavCSS.button__author} ${TrackNavCSS._btn__text} ${TrackNavCSS.author__list_item}`}>Zhu</li>
                    <li className ={`${TrackNavCSS.button__author} ${TrackNavCSS._btn__text} ${TrackNavCSS.author__list_item}`}>Arctic Monkeys</li>
                    <li className ={`${TrackNavCSS.button__author} ${TrackNavCSS._btn__text} ${TrackNavCSS.author__list_item}`}>Michael Jackson</li>
                    <li className ={`${TrackNavCSS.button__author} ${TrackNavCSS._btn__text} ${TrackNavCSS.author__list_item}`}>Frank Sinatra</li>
                    <li className ={`${TrackNavCSS.button__author} ${TrackNavCSS._btn__text} ${TrackNavCSS.author__list_item}`}>Calvin Harris</li>
                    <li className ={`${TrackNavCSS.button__author} ${TrackNavCSS._btn__text} ${TrackNavCSS.author__list_item}`}>Zhu</li>
                    <li className ={`${TrackNavCSS.button__author} ${TrackNavCSS._btn__text} ${TrackNavCSS.author__list_item}`}>Arctic Monkeys</li>
                    <li className ={`${TrackNavCSS.button__author} ${TrackNavCSS._btn__text} ${TrackNavCSS.author__list_item}`}>Michael Jackson</li>
                    <li className ={`${TrackNavCSS.button__author} ${TrackNavCSS._btn__text} ${TrackNavCSS.author__list_item}`}>Frank Sinatra</li>
                    <li className ={`${TrackNavCSS.button__author} ${TrackNavCSS._btn__text} ${TrackNavCSS.author__list_item}`}>Calvin Harris</li>
                    <li className ={`${TrackNavCSS.button__author} ${TrackNavCSS._btn__text} ${TrackNavCSS.author__list_item}`}>Zhu</li>
                    <li className ={`${TrackNavCSS.button__author} ${TrackNavCSS._btn__text} ${TrackNavCSS.author__list_item}`}>Arctic Monkeys</li>
                </ul>
            </div>
            )}
            </div>
            <div>
        <div className={`${TrackNavCSS.filter__button} ${TrackNavCSS.button__author} ${TrackNavCSS._btn__text} ${visible.year ? 'is-active': ''}`} onClick={toggleVisibility('year')}>году выпуска</div>
        {visible.year && (
            <div className ={`${TrackNavCSS.button__author} ${TrackNavCSS.filter__year} ${TrackNavCSS.filter__radio}`}>
                <div className={TrackNavCSS.filter__radio}>
                <input className ={`${TrackNavCSS.button__author} ${TrackNavCSS._btn__text}`} name="radio-btn"type="radio" id="new" value="Более новые"/>
                <label className={TrackNavCSS.first__radio} htmlFor="new">Более старые</label>
                <input className ={`${TrackNavCSS.button__author} ${TrackNavCSS._btn__text}`} name="radio-btn" type="radio" id="old" value="Более старые"/>
                <label htmlFor="old">Более старые</label>
                </div>
            </div>
            )}
        </div>
        <div>
        <div className={`${TrackNavCSS.filter__button} ${TrackNavCSS.button__author} ${TrackNavCSS._btn__text} ${visible.genre ? 'is-active': ''}`} onClick={toggleVisibility('genre')}>жанру</div>
        {visible.genre && (
            <div className ={`${TrackNavCSS.author__list} ${TrackNavCSS.button__author}`}>
                <ul className={TrackNavCSS.author__list_actual}>
                    <li className ={`${TrackNavCSS.button__author} ${TrackNavCSS._btn__text} ${TrackNavCSS.author__list_item}`}>Рок</li>
                    <li className ={`${TrackNavCSS.button__author} ${TrackNavCSS._btn__text} ${TrackNavCSS.author__list_item}`}>Хип-Хоп</li>
                    <li className ={`${TrackNavCSS.button__author} ${TrackNavCSS._btn__text} ${TrackNavCSS.author__list_item}`}>Поп-музыка</li>
                    <li className ={`${TrackNavCSS.button__author} ${TrackNavCSS._btn__text} ${TrackNavCSS.author__list_item}`}>Техно</li>
                    <li className ={`${TrackNavCSS.button__author} ${TrackNavCSS._btn__text} ${TrackNavCSS.author__list_item}`}>Инди</li>
                </ul>
            </div>
            )}
        </div>
        </div>
    )
}