import { Component } from 'react';

class Onchangeevent extends Component {
  constructor() {
    super();
    this.state = {
      com: '',
    };
  }

  changer = event => {
    var a = event.target.value;
    this.setState({ com: a });
  };
  render() {
    return (
      <div>
        <form>
          <p>posting Form</p>
          <p>{this.state.com}</p>
          <input
            onChange={this.changer}
            type="text"
            placeholder="write comment"
          ></input>
          <input type="submit" value="Submit "></input>
        </form>
      </div>
    );
  }
}

export default Onchangeevent;
