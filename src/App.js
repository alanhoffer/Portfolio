import { useState } from 'react';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Contact from './components/Contact';

function App() {

  const [position, setPosition] = useState(1)
      
  const scrollEvent = (event) => {
    const main = event.target;
    const mainSize = main.clientHeight;
  
    if (main.scrollTop < mainSize) {
        setPosition(1);
    }
    if (main.scrollTop >= mainSize && main.scrollTop < (mainSize * 2)) {
        setPosition(2);
    }
    if (main.scrollTop >= (mainSize * 2) && main.scrollTop < (mainSize * 3 )) {
        setPosition(3);
    }
    if (main.scrollTop >= (mainSize * 3 )) {
        setPosition(4);
    }      
    if (main.scrollTop >= (mainSize * 4 )) {
      setPosition(5);
  }      
  
  };

  return (
    <div className="App" onScroll={(event) => scrollEvent(event)}>
      <Navbar props={position} />
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
