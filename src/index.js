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
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    handleChange(event, value) {
      this.setState({[value]: event.target.value});
    }

    handleSubmit(event) {
      alert('The form was submitted: ' + this.state.value);
      event.preventDefault();
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input className="first-name" type="text" name="firstName" value={this.state.firstName} placeholder="First Name" onChange={(event)=> this.handleChange(event, "firstName")} />
          <div class="error-last-name"></div>
    
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
