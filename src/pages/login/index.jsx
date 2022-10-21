import styles from './style.module.css'
import logoLight from '../../components/navbar/img/logo__light.png'
import cn from 'classnames'

export function Login () {

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
    const loginButtons = cn(
        styles.loginButtons
    );
    const buttonLogin = cn(
        styles.buttonLogin
    );
    const buttonRegister = cn(
        styles.buttonRegister
    );

    return (
        <div className={main}>
            <div className={menu}>
                <div className={image}>
                    <img src={logoLight} alt="" />
                </div>
                <div className={inputs}>
                    <input className={login} type="text" placeholder='Логин'/>
                    <input className={password} type="text" placeholder='Пароль'/>
                </div>
                <div className={loginButtons}>
                    <button className={buttonLogin}>Войти</button>
                    <button className={buttonRegister} >Зарегистрироваться</button>
                </div>
            </div>
        </div>
    )
};