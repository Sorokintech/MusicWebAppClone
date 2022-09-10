import { useState } from 'react';

const initialState = {author: false, year: false, genre: false}
export function TrackNavBar () {
    const [visible, setVisible] = useState(initialState);

    const toggleVisibility = (key) => () => setVisible({...initialState, [key]: !visible[key]});
   
    return (
        <div className="centerblock__filter filter">
        <div className="filter__title">Искать по:</div>
        <div>
        <div className={`filter__button button-author _btn-text ${visible.author ? 'is-active': ''}`} onClick={toggleVisibility('author')}>исполнителю</div>
        {visible.author && (
            <div className ="author-list button-author">
                <ul className='experiment author-list-actual'>
                    <li className ="button-author _btn-text author-list-item">Michael Jackson</li>
                    <li className ="button-author _btn-text author-list-item">Frank Sinatra</li>
                    <li className ="button-author _btn-text author-list-item">Calvin Harris</li>
                    <li className ="button-author _btn-text author-list-item">Zhu</li>
                    <li className ="button-author _btn-text author-list-item">Arctic Monkeys</li>
                    <li className ="button-author _btn-text author-list-item">Michael Jackson</li>
                    <li className ="button-author _btn-text author-list-item">Frank Sinatra</li>
                    <li className ="button-author _btn-text author-list-item">Calvin Harris</li>
                    <li className ="button-author _btn-text author-list-item">Zhu</li>
                    <li className ="button-author _btn-text author-list-item">Arctic Monkeys</li>
                    <li className ="button-author _btn-text author-list-item">Michael Jackson</li>
                    <li className ="button-author _btn-text author-list-item">Frank Sinatra</li>
                    <li className ="button-author _btn-text author-list-item">Calvin Harris</li>
                    <li className ="button-author _btn-text author-list-item">Zhu</li>
                    <li className ="button-author _btn-text author-list-item">Arctic Monkeys</li>
                </ul>
            </div>
            )}
            </div>
            <div>
        <div className={`filter__button button-author _btn-text ${visible.year ? 'is-active': ''}`} onClick={toggleVisibility('year')}>году выпуска</div>
        {visible.year && (
            <div className ="button-author filter-year filter-radio">
                <div className="filter-radio">
                <input className ="button-author _btn-text" name="radio-btn"type="radio" id="new" value="Более новые"/>
                <label className='first-radio' htmlFor="new">Более старые</label>
                <input className ="button-author _btn-text" name="radio-btn" type="radio" id="old" value="Более старые"/>
                <label htmlFor="old">Более старые</label>

                </div>
                    {/* <li className ="button-author _btn-text author-list-item">Michael Jackson</li>
                    <li className ="button-author _btn-text author-list-item">Frank Sinatra</li> */}
            </div>
            )}
        </div>
        <div>
        <div className={`filter__button button-author _btn-text ${visible.genre ? 'is-active': ''}`} onClick={toggleVisibility('genre')}>жанру</div>
        {visible.genre && (
            <div className ="author-list button-author">
                <ul className="author-list-actual">
                    <li className ="button-author _btn-text author-list-item">Рок</li>
                    <li className ="button-author _btn-text author-list-item">Хип-Хоп</li>
                    <li className ="button-author _btn-text author-list-item">Поп-музыка</li>
                    <li className ="button-author _btn-text author-list-item">Техно</li>
                    <li className ="button-author _btn-text author-list-item">Инди</li>
                </ul>
            </div>
            )}
        </div>
        </div>
    )
}