import { Routes, Route } from 'react-router-dom'
import { AuthSpinner } from '../components';
import { useCheckAuth } from '../hooks';
import { LandingPage, LoginPage, MainAppPage } from '../pages';
import { PublicRoute, PrivateRoute } from './';

export const AppRouter = () => {

  const { status } = useCheckAuth();

  if (status === 'checking') {
    return (<AuthSpinner />)
  }

  return (
    <Routes>

      <Route path='/login' element={
        <PublicRoute>
          <LoginPage />
        </PublicRoute>
      } />

      <Route path='/app' element={
        <PrivateRoute>
          <MainAppPage />
        </PrivateRoute>
      } />

      <Route path='/*' element={
        <PublicRoute>
          <LandingPage />
        </PublicRoute>
      } />
    </Routes>
  )
}
