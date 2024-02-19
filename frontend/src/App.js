import { Route, Routes } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
    </>
  );
}

export default App;
