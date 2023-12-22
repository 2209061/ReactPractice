import { Component } from 'react';

class Condition1 extends Component {
  constructor() {
    super();
    this.state = {
      login: false,
    };
  }

  render() {
    if (this.state.login == true) {
      return (
        <div>
          <form action="">
            <label>
              Comment:
              <input type="text" name="Comment" />
            </label>
            <div>
              <img src="#" alt="" height="200" width="200" />
            </div>

            <label>
              Location:
              <input type="text" name="Location" />
            </label>

            <button>Submit</button>
          </form>
        </div>
      );
    } else {
      return <div><p>press ON POST BUTTON</p></div> 

    }
  }
}

export default Condition1;
