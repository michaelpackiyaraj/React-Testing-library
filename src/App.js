import React from 'react';
import Header from './components/header';
import Button from './components/button';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header text="My Header"></Header>
        <Button label="click me"></Button>
      </header>
    </div>
  );
}

export default App;

