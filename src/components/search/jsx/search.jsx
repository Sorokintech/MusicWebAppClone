import SearchCSS from '../css/search.module.css'
import {ReactComponent as Search} from '../img/search.svg'

export function SearchBar() {
    return (
    <div className={`${SearchCSS.centerblock__search} ${SearchCSS.search}`}>
    <svg className={SearchCSS.search__svg}>
            <Search />
    </svg>
    <input className={SearchCSS.search__text} type="search" placeholder="Поиск" name="search" />
</div>
    )
}