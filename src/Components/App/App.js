import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Intro from '../Intro/Intro';
import Form from '../Form/Form';
import Search from '../Search/Search';

//App Component organizes all of my other Components
class App extends Component {


  constructor(props) {
    super(props);

    // Name seen when info is submitted.
    this.state = {
      welcomeName: '',
    }

  }

  nameChange = this.nameChange.bind(this);

  //CallBack function passed into Form Component
  nameChange(nameInput) {

    this.setState({
      welcomeName: nameInput
    });

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome {this.state.welcomeName}</h1>
        </header>

          <Intro />
          <Form nameFunctionProps={this.nameChange}/>
          <Search />
      </div>
    );
  }
}

export default App;
