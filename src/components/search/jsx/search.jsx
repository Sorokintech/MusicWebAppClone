import SearchCSS from '../css/search.module.css'
import { useThemeContext } from '../../theme/theme';
import { SearchIcon } from '../../icons.jsx'

export function SearchBar() {
    const {theme} = useThemeContext();

    return (
    <div className={`${SearchCSS.centerblock__search} ${SearchCSS.search} ${SearchCSS[theme.name]}`}>
    <svg className={SearchCSS.search__svg}>
            <SearchIcon className={SearchCSS[theme.color]} />
    </svg>
    <input className={SearchCSS.search__text} type="search" placeholder="Поиск" name="search" />
</div>
    )
}