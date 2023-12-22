import { Component } from 'react';

class Myt extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Comment',
      name1: 'Addphoto',
      name2: 'Location',
      name3: 'Submit',
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>;<h1>{this.state.name1}</h1>;
        <h1>{this.state.name2}</h1>;<h1>{this.state.name3}</h1>;
      </div>
    );
  }
}
export default Myt;
