import React from 'react';

class Form extends React.Component{

  render(){

    return(
      <div className="container">
          <form>
          <div className='search'>
            <label for="search">Search</label>
            <input type='text' id='search' />
          </div>
          <div className="filterType">
            <label for="print-type">Print Type</label>
              <select>
                <option value="default">Select</option>
                <option value="eBook">eBook</option>
                <option value="print">Print</option>
              </select>
            <label for="book-type">Book Type</label>
              <select>
                <option value="default">Select</option>
                <option value="free">Free</option>
                <option value="paid">Paid</option>
              </select>
          </div>
          </form>
        </div>





    )
  }
}

export default Form;