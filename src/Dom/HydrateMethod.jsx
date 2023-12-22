import  { Component } from 'react';
import ReactDOM from 'react-dom';
class HydrateMethod extends Component {
  oldcontainer() {
    var c = document.getElementById('para');
    var e = <h1>I am doing Bcs in Computer Science</h1>;
    var ca = function () {
      alert('Hey,it is call back');
    };
    ReactDOM.hydrate(e, c, ca);
  }

  render() {
     return (
      <div>
        <button onClick={this.oldcontainer}>Changing</button>
        <h1 id="para">I am a student</h1>
      </div>
    );
  }
}

export default HydrateMethod;