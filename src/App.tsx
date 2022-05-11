import React from 'react';
import './App.scss';
import Homepage from './containers/Homepage';
import Projects from './containers/Projects';

function App() {
  return (
    <div className="App">
      <Homepage />
      <Projects />
    </div>
  );
}

export default App;
