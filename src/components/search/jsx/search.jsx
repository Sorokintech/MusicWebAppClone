import SearchStyles from '../css/search.module.css'
import { useThemeContext } from '../../theme/theme';
import { SearchIcon } from '../../icons.jsx'

export function SearchBar() {
    const {theme} = useThemeContext();

    return (
    <div className={`${SearchStyles.centerblock__search} ${SearchStyles.search} ${SearchStyles[theme.name]}`}>
    <svg className={SearchStyles.search__svg}>
            <SearchIcon className={SearchStyles[theme.color]} />
    </svg>
    <input className={SearchStyles.search__text} type="search" placeholder="Поиск" name="search" />
</div>
    )
}