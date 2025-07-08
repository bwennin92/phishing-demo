import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PhishingDemo from './PhishingDemo';

function App() {
  const [count, setCount] = useState(0)

  return (

      <><h1>Can you detect the Phish?</h1><PhishingDemo /></>
  )
}

export default App
