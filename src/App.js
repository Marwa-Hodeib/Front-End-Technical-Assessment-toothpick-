import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Header';


class App extends Component {
  render() {
  return (
    <div className="App">
      <Navbar />
        <main style={{marginTop: '200px'}}> 
          <p>Page Content</p>
        </main>
    </div>
  );
  }
}

export default App;
