import React from 'react'
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Reviews from './Reviews';
import Contact from './Contact';
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/about' Component={About}></Route>
        <Route path='/service' Component={Services}></Route>
        <Route path='/reviews' Component={Reviews}></Route>
        <Route path='/contact' Component={Contact}></Route>
      </Routes>
    </>
  )
}

export default App;