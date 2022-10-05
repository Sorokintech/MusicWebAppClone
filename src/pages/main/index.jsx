import MainStyle from './main.module.css';
import { PlaylistTitle } from '../../components/playlistTitle/jsx/playlistTitle';
import { SearchBar } from '../../components/search/jsx/search';
import { TrackList } from '../../components/trackList/jsx/trackList';
import { TrackNavBar } from '../../components/trackNav/jsx/trackNav.jsx';
import { NavBar } from '../../components/navbar/jsx/navbar';
import { SideBar } from '../../components/sideBar/jsx/sideBar';
import { BottomPlayer } from '../../components/bottomPlayer/jsx/bottomPlayer';
import { Footer } from '../../components/footer/footer';
import { useEffect, useState } from 'react';
import { useThemeContext } from '../../components/theme/theme';



export const Main = () => {

    const [pending, setPending] = useState(true);
        useEffect(() => {
            const timerId = setTimeout(setPending, 1000, false);
            return () => clearInterval(timerId)
            }, [])

            const {theme} = useThemeContext();

    return (
        <div className={`${MainStyle.container} ${MainStyle[theme.name]}`}>
            <div className={`${MainStyle.main} ${MainStyle[theme.name]}`}>
                <NavBar />
                    <div className={`${MainStyle.main__centerBlock} ${MainStyle.centerBlock} ${MainStyle[theme.name]}`}>
                        <SearchBar />
                        <TrackNavBar />
                        <PlaylistTitle/>
                        <TrackList skeleton = {pending} />
                    </div>
                        <SideBar skeleton = {pending}/>
                        <BottomPlayer skeleton = {pending}/>
                        <Footer />
                    </div>
        </div>
    // export const Main =  () => {
//     return (

//         <div className={`${MainStyle.main__centerBlock} ${MainStyle.centerBlock}`}>
//             <SearchBar />
//               <TrackNavBar />
//               <PlaylistTitle/>
//               <TrackList skeleton = {pending} />
//         </div>
//     )
// }
    )
}









