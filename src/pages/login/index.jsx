import styles from './style.module.css'
import logoLight from '../../components/navbar/img/logo__light.png'
import cn from 'classnames'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { setLogin, setToken } from '../../store/slices/auth';
import { useSignUpMutation, useGetTokenMutation } from '../../store/services';

export function Login () {
    const history = useNavigate();
    const [signUp, { data, isSuccess: isSuccessSingUp}]= useSignUpMutation();
    const [getToken, { data: token, isSuccess: isSuccessGetToken }] =
    useGetTokenMutation();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    function handleToRegister() {
        history('/register');
    }
    useEffect(() => {
        if(isSuccessSingUp) {
            getToken({email, password});
        }
    }, [isSuccessSingUp])
    useEffect(() => {
        if (isSuccessGetToken) {
          document.cookie = `username=${data?.username}`;
          dispatch(setToken(token?.access));
          document.cookie = `token=${token?.refresh}`;
          dispatch(setLogin());
          history('/');
        }
      }, [isSuccessGetToken]);
    const dispatch = useDispatch();
    function signingUp () {
        signUp({email, username:email, password})
    }
    return (
        <div className={cn(styles.main)}>
            <div className={cn(styles.menu)}>
                <div className={cn(styles.image)}>
                    <img src={logoLight} alt="" />
                </div>
                <div className={cn(styles.inputs)}>
                    <input className={cn(styles.login)} type="text" placeholder='Логин' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input className={cn(styles.password)} type="password" placeholder='Пароль' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className={cn(styles.loginButtons)}>
                    <button className={cn(styles.buttonLogin)} onClick={signingUp}>Войти</button>
                    <button className={cn(styles.buttonRegister)} onClick={handleToRegister} >Зарегистрироваться</button>
                </div>
            </div>
        </div>
    )
};