import React from 'react';

class Form extends React.Component {


  state = {
    value: ''
  }

  handleChange = event => {
    this.setState({

      value: event.target.value



    })

  }

  render() {
    return (
      <div className="container">
        <form onSubmit={e => {
          e.preventDefault();

          this.props.searchData(e.target.search.value, this.state.value);

        }}
        >
          <div className='search'>
            <label htmlFor="search-field">Search</label>
            <input type='text' id='search-field' name='search' />
          </div>
          <div className="filterType">
            <label>Book Type</label>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="print">Print</option>
              <option value="paid-ebooks">Paid E-book</option>
              <option value="free-ebooks">Free E-book</option>
            </select>
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default Form;