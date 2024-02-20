import { Route, Routes } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import HomePage from './pages/HomePage';
import Dashboard from './pages/user/Dashboard';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/privacy' element={<PrivacyPolicyPage/>}></Route>
      <Route path='*' element={<PageNotFound />} />
    </Routes>
    </>
  );
}

export default App;
