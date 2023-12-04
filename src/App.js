import { useEffect, useState } from 'react';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import AlertBox from './components/AlertBox';
import './assets/animation/animation.js'
import { VANTA } from 'vanta';

function App() {

  const [position, setPosition] = useState(1)
  const [alertBoxActive, setAlertBoxActive] = useState(false)
  const [alertOptions, setAlertOptions] = useState({ isActive: false, type: 'Success', message: '' })
  const [alertMessage, setAlertMessage] = useState('')
  const [darkMode, setDarkMode] = useState(false);

  // useEffect(() => {
  //     VANTA.CELLS({
  //       el: "#App",
  //       mouseControls: true,
  //       touchControls: true,
  //       gyroControls: false,
  //       minHeight: 200.00,
  //       minWidth: 200.00,
  //       scale: 1.00,
  //       color1: 0xeb1b1,
  //       color2: 0x141416,
  //       size: 1.40,
  //       speed: 0.60
  //     })
  // }, [darkMode])

  const scrollEvent = (event) => {
    const main = event.target;
    const mainSize = main.clientHeight;

    if (main.scrollTop < mainSize) {
      setPosition(1);
    }
    if (main.scrollTop >= mainSize && main.scrollTop < (mainSize * 2)) {
      setPosition(2);
    }
    if (main.scrollTop >= (mainSize * 2) && main.scrollTop < (mainSize * 3)) {
      setPosition(3);
    }
    if (main.scrollTop >= (mainSize * 3)) {
      setPosition(4);
    }
    if (main.scrollTop >= (mainSize * 4)) {
      setPosition(5);
    }

  };

  const toggleAlert = (type, message) => {
    setAlertOptions((alertOptions) => ({ ...alertOptions, isActive: true, message: message, type: type }))

    setTimeout(() => {
      setAlertOptions((alertOptions) => ({ ...alertOptions, isActive: false, message: '', type: 'Success' }))
    }, 2000)

  }




  const toggleDark = () => {
    setDarkMode((darkMode) => !darkMode);
    darkMode ? localStorage.setItem('theme', 'light') : localStorage.setItem('theme', 'dark');
  }

  useEffect(() => {
    if (localStorage.getItem('theme')) {
      if (localStorage.getItem('theme') === 'dark') {
        setDarkMode(true);
      } else if (localStorage.getItem('theme') === 'light') {
        setDarkMode(false);
      }
    } else {
      setDarkMode(false);
    }
  })




  return (
    <div id="App" className={darkMode ? "App dark" : "App"} onScroll={(event) => scrollEvent(event)}>

      <Navbar position={position} handlePosition={setPosition} />
      <Header darkMode={darkMode} toggleDark={toggleDark} />
      <Home />
      <About />
      <Skills position={position} handlePosition={setPosition} />

      <Projects />
      <Contact alertFunction={toggleAlert} />
      <AlertBox alertOptions={alertOptions} />
    </div>
  );
}

export default App;
