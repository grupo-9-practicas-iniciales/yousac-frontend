import { Routes, Route } from 'react-router-dom'
import { LandingPage } from '../pages';

export const AppRouter = () => {

  // ! Validate the auth state

  return (
    <Routes>
      <Route path='/auth/login' element={<></>} />
      <Route path='/*' element={<LandingPage />} />
    </Routes>
  )
}
