import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import HowItWorks from './Components/HowItWorks/HowItWorks';
import About from './Components/About/About';
import Home from './Components/Home/Home';

const App = () => (
  
    <div className="App">
      <Header />
      <Home />
      <HowItWorks />
      <About />
    </div>
  
)


export default App;
