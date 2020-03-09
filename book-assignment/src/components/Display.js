import React from 'react';

class Display extends React.Component {


    render() {
        console.log(this.props.displayData)

        return (

            <div>
                <section>
                    <h2></h2>
                    <p>Author</p>
                    <p>Price</p>
                    <p>Description</p>
                    <img alt='book-cover-display' src="#" />
                </section>
            </div>
        )
    }

}

export default Display;