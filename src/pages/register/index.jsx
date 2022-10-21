import styles from './style.module.css'
import logoLight from '../../components/navbar/img/logo__light.png'
import cn from 'classnames'

export function Register () {

    const main = cn(
        styles.main
    );
    const menu = cn(
        styles.menu
    );
    const image = cn(
        styles.image
    );
    const inputs = cn(
        styles.inputs
    );
    const login = cn(
        styles.login
    );
    const password = cn(
        styles.password
    );
    const button = cn(
        styles.button
    );
    const register = cn(
        styles.register
    );
    const repeat = cn(
        styles.repeat
    )
    return (
        <div className={main}>
            <div className={menu}>
                <div className={image}>
                    <img src={logoLight} alt="" />
                </div>
                <div className={inputs}>
                    <input className={login} type="text" placeholder='Логин'/>
                    <input className={password} type="text" placeholder='Пароль'/>
                    <input className={repeat} type="text" placeholder='Повторите пароль'/>
                </div>
                <div className={button}>
                    <button className={register}>Зарегистрироваться</button>
                </div>
            </div>
        </div>
    )
};