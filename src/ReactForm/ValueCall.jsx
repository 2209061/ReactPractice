import { Component } from 'react';

class ValueCall extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
    };
  }

  onChanger = event => {
    var myname = event.target.name;
    var myvalue = event.target.value;

    this.setState({ [myname]: myvalue });
  };

  render() {
    return (
      <div>
        <form>
          <p>This is comment</p>
          <p>{this.state.user}</p>
          <input
            name="user"
            onChange={this.onChanger}
            type="text"
            placeholder="write your comment"
          ></input>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default ValueCall;
