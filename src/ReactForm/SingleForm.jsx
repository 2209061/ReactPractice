import { Component } from 'react';

class SingleForm extends Component {
  render() {
    return (
      <div>
        <form>
          <p>posting Form</p>
          <input type="text" placeholder="write comment"></input>
          <input type="submit" value="Submit "></input>
        </form>
      </div>
    );
  }
}

export default SingleForm;
