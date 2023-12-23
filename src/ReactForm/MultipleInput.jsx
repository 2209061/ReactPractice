import { Component } from 'react';

class MultipleInput extends Component {
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

export default MultipleInput;
