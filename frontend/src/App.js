import { Route, Routes } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import HomePage from './pages/HomePage';
import Dashboard from './pages/user/Dashboard';
import {CommunityComponent, HomeComponent, GamesComponent, RelaxActivities, FitnessComponents} from "./components/DashboardComponents"

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} >
        <Route path='home' element={<HomeComponent />}/>
        <Route path='games' element={<GamesComponent />}/>
        <Route path='relax' element={<RelaxActivities />}/>
        <Route path='fitness' element={<FitnessComponents />}/>
        <Route path='community' element={<CommunityComponent />}/>
      </Route>
      <Route path='*' element={<PageNotFound />} />
    </Routes>
    </>
  );
}

export default App;
