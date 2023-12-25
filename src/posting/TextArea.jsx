import { Component } from 'react';

class TextArea extends Component {
  constructor() {
    super();
    this.state = {
      comment: '',
    };
  }

  textarea1 = event => {
    var a = event.target.value;

    this.setState({ comment: a });
  };

  render() {
    return (
      <div>
        <textarea
          onChange={this.textarea1}
          value={this.state.comment}
        ></textarea>
        <p>{this.state.comment}</p>
      </div>
    );
  }
}

export default TextArea;
