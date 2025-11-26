import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  return (
    <div className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
      <div className="content">
        <h1 className="main-text">Текст для наглядности</h1>
        <button className="ChangeTheme" onClick={toggleTheme}></button>
      </div>
    </div>
  )
}

export default App