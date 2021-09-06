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
        <input type="text" value={this.state.fields["firstName"]} placeholder={this.state.errors["firstName"] ? '' : 'First Name'} onChange={(event) => this.handleChange("firstName", event)} className={this.state.errors["firstName"] ? 'input-field-error' : 'input'} /><br/>
        <div className='error'>{this.state.errors["firstName"]}</div>
    
        <input type="text" value={this.state.fields["lastName"]} placeholder={this.state.errors["lastName"] ? '' : 'Last Name'} onChange={(event) => this.handleChange("lastName", event)} className={this.state.errors["lastName"] ? 'input-field-error' : 'input'} /><br/>
        <div className='error'>{this.state.errors["lastName"]}</div>

        <input type="email" value={this.state.fields["email"]} placeholder={this.state.errors["email"] ? 'email@example/com' : 'Email'} onChange={(event) => this.handleChange("email", event)} className={this.state.errors["email"] ? 'input-field-error' : 'input-email'} /><br/>
        <div className='error'>{this.state.errors["email"]}</div>

        <input type="password" value={this.state.fields["password"]} placeholder={this.state.errors["password"] ? '' : 'Password'} onChange={(event) => this.handleChange("password", event)} className={this.state.errors["password"] ? 'input-field-error' : 'input'} /><br/>
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
