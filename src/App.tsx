import { Navigate } from 'react-router'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import { HomePage } from './pages/home'

export default function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<HomePage />} />

        <Route path='*' element={<Navigate to='/'/>} />
      </Routes>
    </BrowserRouter>
  )
}
