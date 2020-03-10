import React from 'react';
import './Display.css';

class Display extends React.Component {


    render() {

        return (

            <div>
                <section>

                    {this.props.displayData.map((value, key) => {



                        const dataArr = {
                            title: value.volumeInfo.title,
                            author: value.volumeInfo.authors,
                            description: value.volumeInfo.description,
                            price: value.saleInfo.retailPrice ? value.saleInfo.retailPrice.amount : value.saleInfo.saleability,
                            image: value.volumeInfo.imageLinks.thumbnail
                        }


                        return (
                            <div key={key}>
                                <h2>{dataArr.title}</h2>
                                <p >{dataArr.author}</p>
                                <p>{dataArr.price}</p>
                                <p>{dataArr.description}</p>
                                <img alt='book-cover-display' src={dataArr.image} />
                            </div>
                        )
                    })
                    }
                </section>
            </div>
        )
    }

}

export default Display;