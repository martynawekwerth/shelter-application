import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import { Routes ,Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './components/Cats';
import Drugs from './components/Drugs';
import Cats from './components/Cats';
import Finance from './components/Finance';



function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='cats' element={<Cats />} />
        <Route path='finance' element={<Finance />}/>
        <Route path='drugs' element={<Drugs />}/>
      </Routes>
    </Router>
  )
}

export default App;