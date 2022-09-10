import './App.css';
import './fonts/stylesheet.css';
import { ButtomPlayer } from './components/bottomPlayer';
import { NavBar } from './components/navbar';
import { PlaylistTitle } from './components/playlistTitle';
import { SearchBar } from './components/search';
import { SideBar } from './components/sideBar';
import { TrackList } from './components/trackList';
import { TrackNavBar } from './components/trackNav';

function App() {
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
              <TrackList/>
              </div>
              <SideBar />
              <div className="bar">
                <ButtomPlayer />
              </div>
              
              <footer className="footer"></footer>
        </div>
      </div>
    </div>
  )
}

export default App;
