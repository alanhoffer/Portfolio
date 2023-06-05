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

function App() {

  const [position, setPosition] = useState(1)
  const [alertBoxActive, setAlertBoxActive] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [darkMode, setDarkMode] = useState(false);

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

  const toggleAlert = (message) => {
    setAlertMessage(message)
    setAlertBoxActive(true)

    setTimeout(() => {
      setAlertMessage('')
      setAlertBoxActive(false)
    }, 2000)

  }



  const toggleDark = () => {
    setDarkMode((darkMode) => !darkMode);
    darkMode ?  localStorage.setItem('theme', 'light'):localStorage.setItem('theme', 'dark');
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
    <div className={darkMode ? "App dark" : "App"} onScroll={(event) => scrollEvent(event)}>
      <Navbar props={position} />
      <Header darkMode={darkMode} toggleDark={toggleDark} />
      <Home />
      <About />
      <Skills position={position} />

      <Projects />
      <Contact alertFunction={toggleAlert} />
      <AlertBox isActive={alertBoxActive} message={alertMessage} />
    </div>
  );
}

export default App;
