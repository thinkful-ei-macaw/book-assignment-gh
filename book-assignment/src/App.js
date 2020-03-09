import React from 'react';
import Header from './Components/Header';
import Store from './Components/Store';
import Display from './Components/Display';
import Form from './Components/Form';
import './App.css';

class App extends React.Component {



  getBookData = (search) => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
      .then(result => result.json())
      .then(resultJson => console.log(resultJson))
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Form searchData={this.getBookData} />
        <Display />
      </div>
    );
  }
}

export default App;
