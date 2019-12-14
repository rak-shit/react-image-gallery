import React, { Component } from 'react';
import {storage} from '../firebase';
import * as firebase from 'firebase';

class PhotoForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             image : null,
             url : ''
        }
    }

    handleChange = e => {
        if (e.target.files[0]) {
          const image = e.target.files[0];
          this.setState(() => ({image}));
        }
    }

    handleUpload = () => {
        const {image} = this.state;
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed', 
        (snapshot) => {
          // progrss function ....
          
        }, 
        (error) => {
             // error function ....
          console.log(error);
        }, 
      () => {
          // complete function ....
          storage.ref('images').child(image.name).getDownloadURL().then(url => {
            console.log(url); 
            this.setState({url});
            firebase.database().ref('urls').push({
                url : this.state.url
            })
          })
      });
    }
   
    
    render() {
        return (
            <section className="noteform">
                <input type='file' onChange={(event) => this.handleChange(event)}/>
                <button onClick={() => this.handleUpload()}>Upload</button>
            </section>
        )
    }
}

export default PhotoForm
