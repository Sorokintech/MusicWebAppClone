import {ReactComponent as Search} from '../img/icon/search.svg'

export function SearchBar() {
    return (
    <div className="centerblock__search search">
    <svg className="search__svg">
            <Search />
    </svg>
    <input className="search__text" type="search" placeholder="Поиск" name="search" />
</div>
    )
}