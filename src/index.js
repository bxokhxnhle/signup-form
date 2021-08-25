import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      errors: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
  }

  handleValidation(event) {
    let name = event.target.name;
    let value = event.target.value;
    let errors = this.state.errors;
    let formIsValid = true;

    switch (name) {
      case 'firstName':
        if (value === '') {
          errors.firstName = 'First Name cannot be empty';
          formIsValid = false;
        } else errors.firstName = '';
        break;
      case 'lastName':
        if (value === '') {
          errors.lastName = 'Last Name cannot be empty';
          formIsValid = false;
        } else errors.lastName = '';
        break;
      case 'email':
        if (value === '') {
          errors.email = 'Looks like this is not an email';
          formIsValid = false;
        } else errors.email = '';
        break;
      case 'password':
        if (value === '') {
          errors.password = 'Password cannot be empty';
          formIsValid = false;
        } else errors.firstName = '';
        break;
      default:
        break;
    }

    this.setState({
      [errors]: errors
    });

    return formIsValid;
  }
  
  handleChange(event, value) {
    this.setState({ 
        [value]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    
    if (this.handleValidation(event)) {
      alert('Valid Form: ' + this.state.value);
    } 
    else {
      alert('Invalid Form: ' + this.state.value);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input className="first-name" type="text" name="firstName" value={this.state.firstName} placeholder="First Name" onChange={(event)=> this.handleChange(event, "firstName")} />
    
        <input className="last-name" type="text" name="lastName" value={this.state.lastName} placeholder="Last Name" onChange={(event)=> this.handleChange(event, "lastName")} />

        <input className="email" type="email" name="email" value={this.state.email} placeholder="Email" onChange={(event)=>this.handleChange(event, "email")} />

        <input className="password" type="password" name="password" value={this.state.password} placeholder="Password" onChange={(event)=>this.handleChange(event, "password")} />     

        <input className="submit" type="submit" value="CLAIM YOUR FREE TRIAL" />
      </form>
    );
  }
}

ReactDOM.render(
  <SignUpForm />,
  document.getElementById('signup-form')
);
