import { Component } from 'react';

class FormValidation extends Component {
  constructor() {
    super();
    this.state = {
      frname: '',
      laname: '',
      email: '',
      mobile: '',
    };
  }

  changersA = event => {
    var a = event.target.name;
    var v = event.target.value;

    this.setState({ [a]: v });

    if (a === 'finame') {
      var namePattern = /^([a-z A-Z]){2,30}$/;

      if (!namePattern.test(v)) {
        this.setState({ frname: 'First Name is not Valide' });
      }
    }

    if (a === 'laname') {
      var name1Pattern = /^([a-z A-Z]){2,3}$/;
      if (!name1Pattern.test(v)) {
        this.setState({ laname: 'Last Name is not Valide' });
      }
    }

    if (a === 'email') {
      var emailPattern = /\S+\.S+/;
      if (!emailPattern.test(v)) {
        this.setState({ email: 'Email is not Valide' });
      }
    }

    if (a === 'mobile') {
      if (!Number(v)) {
        this.setState({ mobile: 'Mobile is not Valide' });
      }
    }
  };

  submitionA = () => {
    alert(this.state.frname);
    alert(this.state.laname);
    alert(this.state.email);
    alert(this.state.mobile);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitionA}>
          <h1>This is a posting Form</h1>
          <p>{this.state.frname}</p>
          <p>{this.state.laname}</p>
          <p>{this.state.email}</p>
          <p>{this.state.mobile}</p>
          <input
            name="frname"
            onChange={this.changersA}
            type="text"
            placeholder="First Name"
          ></input>
          <br></br>
          <input
            name="laname"
            onChange={this.changersA}
            type="text"
            placeholder="Last Name"
          ></input>
          <br></br>
          <input
            name="email"
            onChange={this.changersA}
            type="text"
            placeholder="Email Address"
          ></input>
          <br></br>
          <input
            name="mobile"
            onChange={this.changersA}
            type="text"
            placeholder="Mobile Number"
          ></input>
          <br></br>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}
export default FormValidation;
