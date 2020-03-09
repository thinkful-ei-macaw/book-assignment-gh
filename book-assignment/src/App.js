import React from 'react';
import Header from './Components/Header';
import Store from './Components/Store';
import Display from './Components/Display';
import Form from './Components/Form';
import './App.css';

class App extends React.Component {

  state = {
    books: []
  }


  getBookData = (search) => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
      .then(result => result.json())
      .then(resultJson => this.setState({
        books: resultJson.items
      })
      )
  }

  //if the state changes or prop changes the render will fire off
  render() {



    return (
      <div className="App">
        <Header />
        <Form searchData={this.getBookData} />
        <Display displayData={this.state.books} />
      </div>
    );
  }
}

export default App;
