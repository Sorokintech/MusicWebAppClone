import styles from './style.module.css'
import logoLight from '../../components/navbar/img/logo__light.png'
import cn from 'classnames'

export function Register () {

    return (
        <div className={cn(styles.main)}>
            <div className={cn(styles.menu)}>
                <div className={cn(styles.image)}>
                    <img src={logoLight} alt="" />
                </div>
                <div className={cn(styles.inputs)}>
                    <input className={cn(styles.login)} type="text" placeholder='Логин'/>
                    <input className={cn(styles.password)} type="text" placeholder='Пароль'/>
                    <input className={cn(styles.repeat)} type="text" placeholder='Повторите пароль'/>
                </div>
                <div className={cn(styles.button)}>
                    <button className={cn(styles.register)}>Зарегистрироваться</button>
                </div>
            </div>
        </div>
    )
};