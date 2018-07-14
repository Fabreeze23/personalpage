import React, { Component } from 'react';

// Child component of Form
// Renders all form data

//Name of props is formProps
class Bio extends Component {


  constructor(props) {
    super(props);

    this.state = {

    }

  }




  render() {
    return (
      <div>


      <h2>Name: {this.props.formProps.name}</h2>

      <div></div>

      <h2>Age: {this.props.formProps.age}</h2>

      <div></div>

      <h2>Job: {this.props.formProps.job}</h2>

      </div>


    );
  }




}

export default Bio;
