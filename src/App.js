import './fonts/stylesheet.css';
import Styles from './css/style.module.css'
import { AppRoutes } from './routes';
import { ThemeContext, themes } from './components/theme/theme';
import { useState} from 'react';



function App() {
  const [theme, setTheme] = useState(themes.dark);

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
      </div>
    </div>
    </ThemeContext.Provider>
  )
  
}
export default App;

