import './fonts/stylesheet.css';
import StyleCSS from './css/style.module.css'
import { BottomPlayer } from './components/bottomPlayer/jsx/bottomPlayer';
import { NavBar } from './components/navbar/jsx/navbar';
import { PlaylistTitle } from './components/playlistTitle/jsx/playlistTitle';
import { SearchBar } from './components/search/jsx/search';
import { SideBar } from './components/sideBar/jsx/sideBar';
import { TrackList } from './components/trackList/jsx/trackList';
import { TrackNavBar } from './components/trackNav/jsx/trackNav';
import { useEffect, useState } from 'react';




function App() {
  const [pending, setPending] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(setPending, 5000, false);
    return () => clearInterval(timerId)
    }, [])
  return (

    <div className={StyleCSS.wrapper}>
      <div className={StyleCSS.container}>
        <div className={StyleCSS.main}>
              <NavBar />
              <div className={`${StyleCSS.main__centerBlock} ${StyleCSS.centerBlock}`}>
              <SearchBar />
              <h2 className={StyleCSS.centerBlock__h2}>Треки</h2>
              <TrackNavBar />
              <PlaylistTitle/>
              <TrackList skeleton = {pending} />
              </div>
              <SideBar skeleton = {pending}/>
              <div className="bar">
                <BottomPlayer skeleton = {pending}/>
              </div>
              <footer className="footer"></footer>
        </div>
      </div>
    </div>
  )
}
export default App;

