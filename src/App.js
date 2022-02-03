// src/App.js
import React, { Component, useContext } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header.js'
import About from './components/About/About'
import Intro from './components/Introduction/Intro.jsx';
import ProductList from './components/ProductList/ProductList.jsx';
import Contact from './components/Contact/Contact.jsx'
import Toggle from './components/Toggle/Toggle.jsx';
import { ThemeContext } from './context.js';


const App = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;

  return (
    <div style={{
      backgroundColor: darkMode ? "#222" : "white", 
      color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  )
}

export default App;