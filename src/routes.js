import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Login from './pages/login';
import SignUp from './pages/SignUp';
import Main from './pages/Main';
// import { getItem } from '../src/utils/storage';

// function ProtectedRoutes({ redirectTo }) {
//     const isAuthenticated = getItem('token');

//     return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />
// }

function MainRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/SignUp' element={<SignUp />} />
            <Route path='/Main' element={<Main />} />

            {/* <Route element={<ProtectedRoutes redirectTo='/' />}> */}
            {/* <Route path='/SignUp' element={<SignUp />} />
            <Route path='/Main' element={<Main />} /> */}

            {/* </Route> */}
        </Routes>
    )


}

export default MainRoutes;