import styles from './search.module.css'
import { useThemeContext } from '../theme/theme';
import { SearchIcon } from '../icons.jsx'
import cn from 'classnames'

export function SearchBar() {
    const {theme} = useThemeContext();

    return (
    <div className={cn(styles.search,styles[theme.name])}>
    <svg className={cn(styles.searchSvg)}>
            <SearchIcon className={cn(styles[theme.color])} />
    </svg>
    <input className={cn(styles.searchText)} type="search" placeholder="Поиск" name="search" />
</div>
    )
}