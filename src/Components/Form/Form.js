import React, { Component } from 'react';

import Bio from './Bio/Bio';
// Simpler way of doing form submission
//chttps://medium.com/@kennethdwaynemarshall/handling-multiple-fields-form-in-react-feacffba1e27

//props function from App Component is called nameFunctionProps
class Form extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      age: 0,
      job: ''
    }

  }

// Bind any function dealing with state
formSubmit = this.formSubmit.bind(this);

 formSubmit(event) {
   event.preventDefault();
   const inputs = event.target.getElementsByTagName('input');

   this.setState({
     name: inputs.name.value,// Should match the name attribute on the input element
     age: inputs.age.value,
     job: inputs.job.value
   });

   this.props.nameFunctionProps(inputs.name.value);

  }



  render() {
    return (
     <div>
      <form onSubmit={this.formSubmit}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>

        <label>
          Age:
          <input type="number" name="age" />
        </label>

        <label>
          Job:
          <input type="text" name="job" />
        </label>

        <input type="submit" value="Submit" />
      </form>


      <Bio formProps={this.state}/>
    </div>
    );
  }




}

export default Form;
