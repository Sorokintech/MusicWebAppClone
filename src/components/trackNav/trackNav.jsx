import styles from './trackNav.module.css'
import { useState } from 'react';
import { useThemeContext } from '../theme/theme';
import cn from 'classnames';

const initialState = {author: false, year: false, genre: false}
export function TrackNavBar () {

    const [visible, setVisible] = useState(initialState);

    const toggleVisibility = (key) => () => setVisible({...initialState, [key]: !visible[key]});
    const {theme} = useThemeContext();

    const header = cn(
        styles.h2,
        styles[theme.name]
    );
    const center = cn(
        styles.center,
        styles[theme.name]
    );
    const title = cn(
        styles.title
    );
    const buttonAuthor = cn(
        styles.button,
        styles.btnText,
        visible.author ? 'is-active': ''
    );
    const list = cn(
        styles.list
    );
    const listActual = cn(
        styles.listActual
    );
    const listItem = cn(
        styles.listItem,
        styles.btnText
    );
    const buttonYear = cn(
        styles.button,
        styles.btnText,
        visible.year ? 'is-active': ''
    );
    const yearFilter = cn(
        styles.year,
        styles.radio
    );
    const radio = cn(
        styles.radio
    );
    const radioFirst = cn(
        styles.firstRadio
    );
    const radioItem = cn(
        styles.btnText
    );
    const buttonGenre = cn(
        styles.button,
        styles.btnText,
        visible.genre ? 'is-active': ''
    );


    return (
        <div>
        <h2 className={header}>Треки</h2>
        <div className={center}>
        <div className={title}>Искать по:</div>
        <div>
        <div className={buttonAuthor} onClick={toggleVisibility('author')}>исполнителю</div>
        {visible.author && (
            <div className ={list}>
                <ul className={listActual}>
                    <li className ={listItem}>Michael Jackson</li>
                    <li className ={listItem}>Calvin Harris</li>
                    <li className ={listItem}>Frank Sinatra</li>
                    <li className ={listItem}>Zhu</li>
                    <li className ={listItem}>Arctic Monkeys</li>
                    <li className ={listItem}>Michael Jackson</li>
                    <li className ={listItem}>Frank Sinatra</li>
                    <li className ={listItem}>Calvin Harris</li>
                    <li className ={listItem}>Zhu</li>
                    <li className ={listItem}>Arctic Monkeys</li>
                    <li className ={listItem}>Michael Jackson</li>
                    <li className ={listItem}>Frank Sinatra</li>
                    <li className ={listItem}>Calvin Harris</li>
                    <li className ={listItem}>Zhu</li>
                    <li className ={listItem}>Arctic Monkeys</li>
                </ul>
            </div>
            )}
            </div>
            <div>
        <div className={buttonYear} onClick={toggleVisibility('year')}>году выпуска</div>
        {visible.year && (
            <div className ={yearFilter}>
                <div className={radio}>
                <input className ={radioItem} name="radio-btn"type="radio" id="new" value="Более новые"/>
                <label className={radioFirst} htmlFor="new">Более старые</label>
                <input className ={radioItem} name="radio-btn" type="radio" id="old" value="Более старые"/>
                <label htmlFor="old">Более старые</label>
                </div>
            </div>
            )}
        </div>
        <div>
        <div className={buttonGenre} onClick={toggleVisibility('genre')}>жанру</div>
        {visible.genre && (
            <div className ={list}>
                <ul className={listActual}>
                    <li className ={listItem}>Рок</li>
                    <li className ={listItem}>Хип-Хоп</li>
                    <li className ={listItem}>Поп-музыка</li>
                    <li className ={listItem}>Техно</li>
                    <li className ={listItem}>Инди</li>
                </ul>
            </div>
            )}
        </div>
        </div>
        </div>
    )
}