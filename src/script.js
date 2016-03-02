var React = require('react');
var ReactDOM = require('react-dom');

// 1. Hello World!
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('hello')
);

// 2. Events from a text field
var TextForm = React.createClass({
  getInitialState: function() {
    return {
      value: '',
      output: 'Awaiting input...'
    };
  },
  handleChange: function(event) {
    this.setState( {value: event.target.value} );
  },
  handleClick: function(event) {
    this.setState( {output: this.state.value} );
  },
  render: function() {
    return (
      <div className="form-container">
        <input
          type="text"
          placeholder="Type something..."
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Submit</button>
        <p>{this.state.output}</p>
      </div>
    )
  }
});

ReactDOM.render(<TextForm/>, document.getElementById('event'));
