import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NewsDetails from './pages/NewsDetails'
import './assests/scss/main.scss'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:type/:id" element={<NewsDetails />} />
      </Routes>
    </Router>
  )
}

export default App
