import { Component } from 'react';

class SelectOption extends Component {
  constructor() {
    super();
    this.state = {
      town1: 'Uxbridge',
      town2: 'HighWycombe',
      town3: 'Southhall',
      town4: 'Beaconsfield',
      userselect: '',
      previous: 'HighWycombe',
    };
  }

  selects = event => {
    var s = event.target.value;
    this.setState({ userselect: s, previous: s });
  };

  render() {
    return (
      /*<div>
       <p>{this.state.userselect}</p>
        <select onChange={this.selects}>
          <option>Uxbridge</option>
          <option>HighWycombe</option>
          <option>Southhall</option>
          <option>Beaconsfield</option>
        </select>
      </div>*/

      <div>
        <p>{this.state.userselect}</p>
        <select onChange={this.selects} value={this.state.previous}>
          <option>{this.state.town1}</option>
          <option>{this.state.town2}</option>
          <option>{this.state.town3}</option>
          <option>{this.state.town4}</option>
        </select>
      </div>
    );
  }
}

export default SelectOption;
