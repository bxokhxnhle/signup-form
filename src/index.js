import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let validForm = true;

    if (!fields["firstName"]) {
      validForm = false;
      errors["firstName"] = "First Name cannot be empty";
   }

   if (!fields["lastName"]) {
     validForm = false;
     errors["lastName"] = "Last Name cannot be empty";
  }

  if (!fields["email"]) {
    validForm = false;
    errors["email"] = "Looks like this is not an email"
  }

  if (!fields["password"]) {
    validForm = false;
    errors["password"] = "Password cannot be empty";
  }

    this.setState({
      errors: errors
    });

    return validForm;
  }
  
  handleChange(field, event) {
    let fields = this.state.fields;
    fields[field] = event.target.value;

    this.setState({fields});
  }

  handleSubmit(event) {
    event.preventDefault();
    
    this.handleValidation();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input className="first-name" refs="firstName" type="text" value={this.state.fields["firstName"]} placeholder="First Name" onChange={this.handleChange.bind(this, "firstName")} /><br/>
        <div className='error'>{this.state.errors["firstName"]}</div>
    
        <input className="last-name" refs="lastName" type="text" value={this.state.fields["lastName"]} placeholder="Last Name" onChange={this.handleChange.bind(this, "lastName")} /><br/>
        <div className='error'>{this.state.errors["lastName"]}</div>

        <input className="email" refs="email" type="email" value={this.state.fields["email"]} placeholder="Email" onChange={this.handleChange.bind(this, "email")} /><br/>
        <div className='error'>{this.state.errors["email"]}</div>

        <input className="password" refs="password" type="password" value={this.state.fields["password"]} placeholder="Password" onChange={this.handleChange.bind(this, "password")} /><br/>
        <div className='error'>{this.state.errors["password"]}</div>  

        <input className="submit" type="submit" value="CLAIM YOUR FREE TRIAL" />
      </form>
    );
  }
}

ReactDOM.render(
  <SignUpForm />,
  document.getElementById('signup-form')
);
