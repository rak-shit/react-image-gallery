import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import PhotoForm from './components/PhotoForm';
import Photo from './components/Photo';
import * as firebase from 'firebase';


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       images : []
    }
  }

  componentDidMount(){
    this.db = firebase.database();
    this.listenForChange();
  }

  listenForChange() {
    this.db.ref('urls').on('child_added', snapshot => {
      let image = {
        id : snapshot.key,
        url : snapshot.val().url
      }
      let images = this.state.images;
      images.push(image);
      this.setState(images);
    })

    this.db.ref('urls').on('child_removed', snapshot => {
      let images=this.state.images;
      images = images.filter(image => image.id!==snapshot.key);
      this.setState({
        images : images
      })
    })

  }


  render() {
    return (
      <div className="App">
        <Header />
        <PhotoForm />
        <Photo images={this.state.images}/>
      </div>
    );
  }
}

export default App;
