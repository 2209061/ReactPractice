import { Component } from 'react';
import ReactDOM from 'react-dom';

class FindDOMNode extends Component {
  changeimmage() {
    var img1 = document.getElementById('pic');

    ReactDOM.findDOMNode(img1).src = './pic/ubun2first.png';
  }
  render() {
    return (
      <div>
        <button onClick={this.changeimmage}>ChangeImage</button>
        <img
          id="pic"
          src="http://localhost:5173/food.jpg"
          height="400"
          width="300"
        ></img>
      </div>
    );
  }
}

export default FindDOMNode;
