import './App.css';
import './fonts/stylesheet.css';
import './components/sideBar/sideBar-skeleton.css';
import './components/bottomPlayer/bottomPlayer-skeleton.css'
import './components/trackList/trackList-skeleton.css'
import { BottomPlayer } from './components/bottomPlayer/bottomPlayer';
import { NavBar } from './components/navbar/navbar';
import { PlaylistTitle } from './components/playlistTitle';
import { SearchBar } from './components/search';
import { SideBar } from './components/sideBar/sideBar';
import { TrackList } from './components/trackList/trackList';
import { TrackNavBar } from './components/trackNav';
import { useEffect, useState } from 'react';



function App() {
  const [pending, setPending] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(setPending, 5000, false);
    return () => clearInterval(timerId)
    }, [])
  return (

    <div className='wrapper'>
      <div className='container'>
        <div className='main'>
              <NavBar />
              <div className="main__centerblock centerblock">
              <SearchBar />
              <h2 className='centerblock__h2'>Треки</h2>
              <TrackNavBar />
              <PlaylistTitle/>
              <TrackList skeleton = {pending}/>
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
