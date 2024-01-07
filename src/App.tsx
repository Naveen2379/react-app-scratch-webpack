import React from 'react'
import './App.css'
import reactPng from './react-png.png'
import reactSvg from './react-svg.svg'
import Counter from './Counter'

const App = () => {
  const nameNe1w = "dfdnaveen"
  return (
    <div>
      <h1>
        Edited New React App with Webpack template -{process.env.NODE_ENV}{' '}
        {process.env.name}
      </h1>
      <img src={reactPng} alt="react-logo-png" width="200px" height="200px" />
      <img src={reactSvg} alt="react-logo-svg" width="200px" height="200px" />
      <Counter />
    </div>
  )
}

export default App
