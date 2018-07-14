import React, { Component } from 'react';

//Conditional Rendering

// If button is clicked then the message state changes.
// reset button renders if the message state is not empty.
// reset button can set the message state back to being blank.

class Intro extends Component {

  constructor(props) {
    super(props);

    this.state = {
      buttonMessage: '', //Message sent when the button is clicked
    }

  }

  createResetButton = this.createResetButton.bind(this);
  buttonClicked = this.buttonClicked.bind(this);
  resetButtonClicked = this.resetButtonClicked.bind(this);


  createResetButton() {

    if (this.state.buttonMessage !== '') {
      return (<button onClick={this.resetButtonClicked}> Reset </button>)
    }

  }

  buttonClicked() {

    this.setState({buttonMessage: 'The button was clicked!'});

  }



  resetButtonClicked() {
    this.setState({buttonMessage: ''})
  }


  render() {
    return (
      <div className="Intro">
        <header className="Intro-header">
          <h1 className="Intro-title">Introduction Header</h1>

          {this.state.buttonMessage}

          <button onClick={this.buttonClicked}> Click Me!!! </button>

          {this.createResetButton()}

        </header>

      </div>
    );
  }




}

export default Intro;
