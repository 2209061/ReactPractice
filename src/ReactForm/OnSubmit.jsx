import { Component } from 'react';

class OnSubmit extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
    };
  }

  changersA = event => {
    var a = event.target.name;
    var v = event.target.value;

    this.setState({ [a]: v });
  };

  submitionA = () => {
    alert(this.state.user);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitionA}>
          <p>this is a posting Form</p>
          <p>{this.state.user}</p>
          <input
            name="user"
            onChange={this.changersA}
            type="text"
            placeholder="write your comment"
          ></input>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default OnSubmit;
