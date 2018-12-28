import React, { Component } from 'react';
import headerImage from './images/bigbrother.jpg'
import logo from './logo.svg'
import './App.css';

class App extends Component {


  render() {
    return (
      <div className="Website">
        <div className="Header">
          <img className="headerImage" src={require('./images/bigbrother.jpg')} />        
          <img className="profilePicture" src={require('./images/profilepic.jpg')}/>
          <p className="headerBlurb">
            Hi. My Name is Tom!
          </p>
        </div>











      </div>



    );
  }
}

export default App;
