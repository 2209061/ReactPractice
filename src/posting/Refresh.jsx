import { Component } from 'react';

class Refresh extends Component {
  constructor() {
    super();

    this.refresher = this.refresher.bind(this);
  }

  refresher() {
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <button onClick={this.refresher}>Refresh</button>
        <h1>{Math.random()}</h1>
      </div>
    );
  }
}
export default Refresh;
