import React from 'react';

class Form extends React.Component {

  // state = {
  //   search: '',
  // }

  // addSearch = value => {
  //   this.setState({
  //     search: value
  //   })
  //   this.state.search = '';
  // }

  render() {

    return (
      <div className="container">
        <form onSubmit={e => {
          e.preventDefault();
          // this.addSearch(e.target.search.value);
          this.props.searchData(e.target.search.value);
        }}
        >
          <div className='search'>
            <label htmlFor="search-field">Search</label>
            <input type='text' id='search-field' name='search' />
          </div>
          <div className="filterType">
            <label>Print Type</label>
            <select>
              <option value="default">Select</option>
              <option value="eBook">eBook</option>
              <option value="print">Print</option>
            </select>
            <label>Book Type</label>
            <select>
              <option value="default">Select</option>
              <option value="free">Free</option>
              <option value="paid">Paid</option>
            </select>
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default Form;