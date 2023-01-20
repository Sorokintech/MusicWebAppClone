import './fonts/stylesheet.css';
import Styles from './css/style.module.css'
import { AppRoutes } from './routes';
import { ThemeContext, themes } from './components/theme/theme';
import { useEffect, useState } from 'react';
import { useRefreshTokenMutation} from './store/services';
import { setToken } from './store/slices/auth';
import { useSelector, useDispatch } from 'react-redux';
import { BottomPlayer } from './components/bottomPlayer/bottomPlayer';



function App() {
  const [theme, setTheme] = useState(themes.dark);
  console.log(useRefreshTokenMutation);
  const [refreshToken, {data, isSuccess}]= useRefreshTokenMutation();
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();
  console.log(token);
  useEffect(() => {
    console.log(refreshToken);
    if(token) {
      refreshToken({refresh: token});

  }     
}, [])


  useEffect(() => {
    if(isSuccess) {
      dispatch(setToken(data?.access));
    }
  }, [data, isSuccess])


  return (
    <ThemeContext.Provider value = {{
      theme: theme,
      toggleTheme: () => {
        if(theme.name !== 'light')
        {setTheme(themes.light)}
        else {
        {setTheme(themes.dark)}}
      }       
    }}>
          <div className= {`${Styles.wrapper} ${Styles[theme.name]}`}>
      <div className={`${Styles.container} ${Styles[theme.name]}`}>
        <AppRoutes />
        <BottomPlayer/>
      </div>
    </div>
    </ThemeContext.Provider>
  )
  
}
export default App;

