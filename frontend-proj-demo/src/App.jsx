import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './header'
import Footer from './Footer'
import SearchBar from './SearchBar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <SearchBar />
      <Footer />
    </div>
    
  )
}

export default App;
