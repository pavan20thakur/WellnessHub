import { Route, Routes } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import HomePage from './pages/HomePage';
import Dashboard from './pages/user/Dashboard';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import {CommunityComponent, HomeComponent, GamesComponent, RelaxActivities, FitnessComponents} from "./components/DashboardComponents"
import GoogleAuthPage from './pages/GoogleAuthPage';
import EbbAndFlowPage from './pages/games/EbbAndFlowPage';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/privacy' element={<PrivacyPolicyPage/>} />
      <Route path='/temp' element={<GoogleAuthPage/>} />
      <Route path='/dashboard' element={<Dashboard />} >
        <Route path='home' element={<HomeComponent />}/>
        <Route path='games' element={<GamesComponent />}/>
        <Route path='relax' element={<RelaxActivities />}/>
        <Route path='fitness' element={<FitnessComponents />}/>
        <Route path='community' element={<CommunityComponent />}/>
        <Route path ='games/ebb-and-flow' element={<EbbAndFlowPage />}></Route>
      </Route>
      
      <Route path='*' element={<PageNotFound />} />
    </Routes>
    </>
  );
}

export default App;
