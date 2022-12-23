import { Routes, Route} from 'react-router-dom';
import { Main } from './pages/main';
import { Login } from './pages/login';
import { Playlists } from './pages/playlists';
import { Tracks } from './pages/tracks';
import { Register } from './pages/register';
import { NotFound } from './pages/not-found';
import { MyCollection } from './pages/playlists/my-collection';
import { ProtectedRoute } from './components/protected-route';

export const AppRoutes = () => {
    
    return (
        <Routes>
            <Route path='/mycollection/playlists/:id' element={<ProtectedRoute redirectPath = '/login' protected> <Playlists/></ProtectedRoute>}/>
            <Route path='/mycollection' element={<ProtectedRoute redirectPath = '/login' protected> <MyCollection/></ProtectedRoute>}/>
            <Route path='/tracks' element={<ProtectedRoute redirectPath = '/login' protected> <Tracks/></ProtectedRoute>}/>
            <Route path='/' element={<ProtectedRoute redirectPath = '/login' protected> <Main/></ProtectedRoute>}/>
            <Route path='/login' element={<ProtectedRoute redirectPath = '/'> <Login/> </ProtectedRoute> }/>
            <Route path='/register' element={<ProtectedRoute redirectPath = '/'><Register/> </ProtectedRoute>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    );
};