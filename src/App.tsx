import React from 'react'
import './App.css';
import reactPng from './react-png.png';
import reactSvg from './react-svg.svg';

const App = () => {

  return (
    <div>
      <h1>React App with Webpack template -{process.env.NODE_ENV} {process.env.name}
       </h1>
      <img src={reactPng} alt="react-logo-png" width="200px" height="200px" />
      <img src={reactSvg} alt="react-logo-svg" width="200px" height="200px" />
    </div>
  )
}

export default App