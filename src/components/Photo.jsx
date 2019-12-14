import React, { Component } from 'react'
import * as firebase from 'firebase';

class Photo extends Component {
    constructor(props) {
        super(props)
    }

    deleteHandler = id => {
        firebase.database().ref('urls').child(id).remove();
    }
    
    render() {
        return (
            <div>
                <section className="notes-wrapper">
                    <div className="notes">
                        {this.props.images.map(image => (
                            <div className="note" key={image.id}> 
                                <div className="note-content">
                                    <img src={image.url} height="300" width="400" alt="Uploaded"/>
                                    <button className="remove" onClick={() => this.deleteHandler(image.id)}>Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        )
    }
}

export default Photo
