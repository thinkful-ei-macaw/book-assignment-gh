import React from 'react';
import Header from './Components/Header';
import Display from './Components/Display';
import Form from './Components/Form';
import './App.css';

class App extends React.Component {

  state = {
    books: [],

  }


  getBookData = (search, value) => {
    console.log(search)
    console.log(value)


    let URL = `https://www.googleapis.com/books/v1/volumes?q=${search}`;

    if (value === 'print') {
      URL = `https://www.googleapis.com/books/v1/volumes?q=${search}`
    } else if (value === 'paid-ebooks') {
      URL = `https://www.googleapis.com/books/v1/volumes?q=${search}&filter=${value}`
    } else if (value === 'free-ebooks') {
      URL = `https://www.googleapis.com/books/v1/volumes?q=${search}&filter=${value}`
    }


    fetch(URL)
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
