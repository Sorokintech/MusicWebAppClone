import styles from './trackNav.module.css'
import { useState } from 'react';
import { useThemeContext } from '../theme/theme';
import { filterByYear } from '../../store/slices/filter';
import { useDispatch } from 'react-redux';
import cn from 'classnames';

const initialState = {author: false, year: false, genre: false}
export function TrackNavBar () {

    const [visible, setVisible] = useState(initialState);

    const toggleVisibility = (key) => () => setVisible({...initialState, [key]: !visible[key]});
    const {theme} = useThemeContext();

    const dispatch = useDispatch();
    const onYearFilter = (e) => {
        dispatch(filterByYear((e.target).value));
    };

    return (
        <div>
        <h2 className={cn(styles.h2,styles[theme.name])}>Треки</h2>
        <div className={cn(styles.center,styles[theme.name])}>
        <div className={cn(styles.title)}>Искать по:</div>
        <div>
        <div className={cn(styles.button,styles.btnText,{[styles.isActive]:visible.author})} onClick={toggleVisibility('author')}>исполнителю</div>
        {visible.author && (
            <div className ={cn(styles.list)}>
                <ul className={cn(styles.listActual)}>
                    <li className ={cn(styles.listItem,styles.btnText)}>Michael Jackson</li>
                    <li className ={cn(styles.listItem,styles.btnText)}>Calvin Harris</li>
                    <li className ={cn(styles.listItem,styles.btnText)}>Frank Sinatra</li>
                    <li className ={cn(styles.listItem,styles.btnText)}>Zhu</li>
                    <li className ={cn(styles.listItem,styles.btnText)}>Arctic Monkeys</li>
                    <li className ={cn(styles.listItem,styles.btnText)}>Michael Jackson</li>
                    <li className ={cn(styles.listItem,styles.btnText)}>Frank Sinatra</li>
                    <li className ={cn(styles.listItem,styles.btnText)}>Calvin Harris</li>
                    <li className ={cn(styles.listItem,styles.btnText)}>Zhu</li>
                    <li className ={cn(styles.listItem,styles.btnText)}>Arctic Monkeys</li>
                    <li className ={cn(styles.listItem,styles.btnText)}>Michael Jackson</li>
                    <li className ={cn(styles.listItem,styles.btnText)}>Frank Sinatra</li>
                    <li className ={cn(styles.listItem,styles.btnText)}>Calvin Harris</li>
                    <li className ={cn(styles.listItem,styles.btnText)}>Zhu</li>
                    <li className ={cn(styles.listItem,styles.btnText)}>Arctic Monkeys</li>
                </ul>
            </div>
            )}
            </div>
            <div>
        <div className={cn(styles.button,styles.btnText,{[styles.isActive]:visible.year})} onClick={toggleVisibility('year')}>году выпуска</div>
        {visible.year && (
            <div className ={cn(styles.year,styles.radio)}>
                <div className={cn(styles.radio)}>
                <input className ={cn(styles.btnText)} name="radio-btn" type="radio" id="new" value="newest" onClick={onYearFilter}/>
                <label className={cn(styles.firstRadio)} htmlFor="new">Более новые</label>
                <input className ={cn(styles.btnText)} name="radio-btn" type="radio" id="old" value="oldest" onClick={onYearFilter}/>
                <label htmlFor="old">Более старые</label>
                </div>
            </div>
            )}
        </div>
        <div>
        <div className={cn(styles.button,styles.btnText,{[styles.isActive]:visible.genre})} onClick={toggleVisibility('genre')}>жанру</div>
        {visible.genre && (
            <div className ={cn(styles.list)}>
                <ul className={cn(styles.listActual)}>
                    <li className ={cn(styles.listItem,styles.btnText)}>Рок</li>
                    <li className ={cn(styles.listItem,styles.btnText)}>Хип-Хоп</li>
                    <li className ={cn(styles.listItem,styles.btnText)}>Поп-музыка</li>
                    <li className ={cn(styles.listItem,styles.btnText)}>Техно</li>
                    <li className ={cn(styles.listItem,styles.btnText)}>Инди</li>
                </ul>
            </div>
            )}
        </div>
        </div>
        </div>
    )
}