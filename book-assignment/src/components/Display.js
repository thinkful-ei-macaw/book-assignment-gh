import React from 'react';

class Display extends React.Component {

    // showData = populateData = () => {

    //     this.props.displayData.map(value => {

    //         const dataArr = {
    //             title: value.volumeInfo.title,
    //             author: value.volumeInfo.authors,
    //             description: value.volumeInfo.description

    //         }
    //         console.log(dataArr);
    //     })

    // }


    render() {


        return (

            <div>


                {this.props.displayData.map(value => {

                    const dataArr = {
                        title: value.volumeInfo.title,
                        author: value.volumeInfo.authors,
                        description: value.volumeInfo.description
                    }
                        < section >
                        <h2>{this.props,.displayData.dataArr}</h2>
                        <p>Author</p>
                        <p>Price</p>
                        <p>Description</p>
                        <img alt='book-cover-display' src="#" />
                    </section>

                    })
}
                    
                    
            </div >
        )
    }

}

export default Display;