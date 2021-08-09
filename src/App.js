import './App.css';
import Navbar from './components/Navbar';
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react';

function App() {
  const [ showNav, setShowNav ] = useState(false)
  return (
    <div className="App">
      <header>
        <GiHamburgerMenu  onClick = {() => setShowNav(!showNav)}/>
      </header>

      <Navbar show = {showNav}/>
    </div>
  );
}

export default App;
