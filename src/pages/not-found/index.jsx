import styles from './style.module.css'
import cn from 'classnames'

export function NotFound () {

    const center = cn(
        styles.center
    )
    return (
        <h1 className={center}> Page was not found :C</h1>
    )
};