import styles from './style.module.css'
import cn from 'classnames'

export function Tracks () {

    const center = cn(
        styles.center
    )
    return (
        <h1 className={center}>Страница треков</h1>
    )
};