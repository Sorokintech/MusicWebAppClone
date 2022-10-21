import styles from './search.module.css'
import { useThemeContext } from '../theme/theme';
import { SearchIcon } from '../icons.jsx'
import cn from 'classnames'

export function SearchBar() {
    const {theme} = useThemeContext();

    const center = cn(
        styles.search,
        styles[theme.name]
    );
    const searchSvg = cn(
        styles.searchSvg
    );
    const themeColor = cn(
        styles[theme.color]
    );
    const searchText = cn(
        styles.searchText
    )


    return (
    <div className={center}>
    <svg className={searchSvg}>
            <SearchIcon className={themeColor} />
    </svg>
    <input className={searchText} type="search" placeholder="Поиск" name="search" />
</div>
    )
}