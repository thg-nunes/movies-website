import { Navigate } from 'react-router'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import { HomePage } from './pages/home'
import { MovieDetail } from './pages/movie/details'
import { MoviesByGenre } from './pages/movie/byGenre'
import { SearchMovie } from './pages/movie/search'

export default function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/search/movie' element={<SearchMovie />} />
        <Route path='/movie/:id/details' element={<MovieDetail />} />
        <Route path='/movie/genre/:id' element={<MoviesByGenre />} />
        <Route path='*' element={<Navigate to='/'/>} />
      </Routes>
    </BrowserRouter>
  )
}
