import styles from './style.module.css'
import logoLight from '../../components/navbar/img/logo__light.png'
import cn from 'classnames'

export function Login () {

    return (
        <div className={cn(styles.main)}>
            <div className={cn(styles.menu)}>
                <div className={cn(styles.image)}>
                    <img src={logoLight} alt="" />
                </div>
                <div className={cn(styles.inputs)}>
                    <input className={cn(styles.login)} type="text" placeholder='Логин'/>
                    <input className={cn(styles.password)} type="text" placeholder='Пароль'/>
                </div>
                <div className={cn(styles.loginButtons)}>
                    <button className={cn(styles.buttonLogin)}>Войти</button>
                    <button className={cn(styles.buttonRegister)} >Зарегистрироваться</button>
                </div>
            </div>
        </div>
    )
};