import Style from './style.module.css'
import logoLight from '../../components/navbar/img/logo__light.png'

export function Login () {
    return (
        <div className={Style.center__main}>
            <div className={Style.login__menu}>
                <div className={Style.center__image}>
                    <img src={logoLight} alt="" />
                </div>
                <div className={Style.login__inputs}>
                    <input className={Style.login} type="text" placeholder='Логин'/>
                    <input className={Style.password} type="text" placeholder='Пароль'/>
                </div>
                <div className={Style.login__buttons}>
                    <button className={Style.button__login}>Войти</button>
                    <button className={Style.button__register} >Зарегистрироваться</button>
                </div>
            </div>
        </div>
    )
};