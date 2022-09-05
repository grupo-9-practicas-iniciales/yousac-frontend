import { Routes, Route } from 'react-router-dom'
import { useCheckAuth } from '../hooks';
import { LandingPage, LoginPage, MainAppPage } from '../pages';
import { PublicRoute, PrivateRoute } from './';

export const AppRouter = () => {

  useCheckAuth();

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
