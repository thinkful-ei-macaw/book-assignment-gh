import React from 'react';
import Header from './components/Header';
import Store from './components/Store';
import Display from './components/Display';
import Form from './components/Form';
import './App.css';

class App extends React.Component{

  render() {
    return  (
      <div className="App">
        <Header />
        
        <Form />
      </div>
    );
  }
}

export default App;
