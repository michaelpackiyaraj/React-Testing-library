import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import Header from './components/header';
import Button from './components/button';

import Post from './components/FetchAPI/Post';
import Postform from './components/FetchAPI/Postform';

import './App.css';
const store = createStore( ()=> [], {}, applyMiddleware());

function App() {
  return (
    <Provider store = { store }>
      <div className="App">
        <header className="App-header">
          <Header text="My Header"></Header>
          <Button label="click me"></Button>
        </header>
        <Postform />
        <br />
        <hr />
        <Post />
      </div>
    </Provider>
  );
}

export default App;

